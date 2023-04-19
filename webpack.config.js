
// This is webpack 4 config

// FILES
let files = {
	'js/home': './resources/js/home.js',
	'css/home': "./resources/styles/sass/home.sass",
	// 'css/home_critical': "./resources/styles/sass/home_critical.sass",
};


// PLUGINS
const path = require("path");
const argv = require('yargs').argv;
const webpack = require('webpack');
const glob = require("glob");
const fs = require('fs');
const colors = require('colors/safe');


const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackOnBuildPlugin = require('on-build-webpack2');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin'); // (version >=7)

// FLAGS

// INIT
const root = path.resolve( __dirname);
const isDev = argv.mode === 'development';
const isProd = !isDev;


// FUNCTIONS
// Remove files of {extension} in {path_prod}
function del_file_folder(path_prod,extension){
    path_prod = path_prod.replaceAll('\\', '/');

    let unlinked = [];
    glob(`${path_prod}/**/*.${extension}`, function (er, files) {

        files.forEach(file => {
            fs.unlinkSync(path.resolve(file));
            unlinked.push(file);
        })

    });

    if (unlinked.length > 0) {
        console.log("================");
        console.log('Removed files: ', unlinked );
        console.log("================");
    }

}

// SETTINGS
const optimization = () => {
    const config = {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]|[\\/]js[\\/]includes[\\/]/,
                    chunks: 'all',
                    minSize: 999999999,

                    name(module, chunks, cacheGroupKey) {
                        let name = chunks.map((item) => item.name).join('~');
                        return cacheGroupKey+"/"+name;
                    },
                },
            }

        },
    };

    if (isProd) {
        config.minimizer = [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
            })
        ]
    }

    return config
};

const plugins = () =>{
    const plugins = [

        // JS quality of life
        // (version >=7)
        // new ESLintPlugin({
        //     extensions: [`js`, `jsx`],
        //     exclude: [
        //         `/node_modules/`,
        //         `/bower_components/`,
        //     ],
        //     fix: true,
        //     emitError: true,
        //     emitWarning: true
        // }),

        new MiniCssExtractPlugin({
            // filename: function(a, b){
            //     console.log(a, b);
            // }
            filename: "[name].css",
        }),

        new WebpackOnBuildPlugin(async function(stats) {
            console.log("===================== Start =====================" );

            await del_file_folder(root+"/public/css","js");

            let date = new Date();

            console.log("===================== Files =====================");
            console.log(files);
            console.log("==============================================" );

            console.log("===================== Time =====================" );
            console.log("Build finished:", colors.green(`${date.toLocaleTimeString()}`) );
            console.log("==============================================" );
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

        new WebpackBuildNotifierPlugin({
            title: "Webpack Build",
            suppressSuccess: false
        }),

    ];

    return plugins

};

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins:[
            '@babel/proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-typescript',
            '@babel/plugin-transform-runtime',
        ]
    };

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
};

module.exports = {
    entry: files,
    mode: argv.mode,
    watch: argv.watch,
    devtool: isDev === true ?'inline-source-map' : false,
    optimization: optimization(),
    plugins:  plugins(),
    output: {
        path: __dirname + '/public/',
        filename: "[name].js",
        chunkFilename: 'js/modules/[name].[chunkhash].js',
        publicPath: "/"
        //sourceMapFilename: '[name].js.map'
    },

    module: {
        rules: [

            // ======= JS ======= //
            {   // JS, JSX (Before Babel)
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    //eslintPath: 'eslint',
                    //emitError: true,
                    //emitWarning: true
                }
            },
            {   // JS, JSX  [MAIN]
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/react'],
                        plugins: [/*'@babel/plugin-syntax-jsx', */'@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread','@babel/plugin-syntax-dynamic-import',
                            // Set import path replaces (e.g. ~/ -> root)
                            [
                                'babel-plugin-root-import',
                                {
                                    "paths": [
                                        {
                                            "rootPathSuffix": root+"/",
                                            "rootPathPrefix": "~/"
                                        },
                                        {
                                            "rootPathSuffix": root+"/resources/",
                                            "rootPathPrefix": "resources/"
                                        },
                                    ]

                                }
                            ],
                            ["babel-plugin-module-resolver", {
                                "root": [root],
                                "alias": {
                                    "resources/": "./resources/",
                                }
                            }]
                        ]
                    }
                }
            },
            {   // JS
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {   // JSX
                test: /\.(jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react')
                }
            },
            {   // TS (before Babel)
                test: /\.ts$/,
                enforce: 'pre',
                use: {
                    loader: "tslint-loader",
                    options: {}
                }
            },
            {   // TS
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions('@babel/preset-typescript')
                    },
                    {
                        loader: "ts-loader",
                    },
                ]
            },

            // ======= CSS ======= //
            {   // SASS, SCSS [MAIN]
                test: /\.s[ac]ss$/,
                use:
                    [
                        'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {}
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require("sass"),
                                sourceMap: isDev,
                                sassOptions: {
                                    // Add root paths to sass @import
                                    // includePaths: [
                                    //     "./modules/AssemblyCollection",
                                    // ],
                                },
                            }
                        },
                    ]
            },
            {   // CSS
                test: /\.css$/,
                use:
                    [
                            'style-loader',
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: { sourceMap: true}

                            },
                            {
                                loader: 'postcss-loader',
                                options: { sourceMap: true, config: { path: `./postcss.config.js` } }
                            }
                    ]
            },

            // ======= MEDIA ======= //
            {   // SVG -no-optimize (without optimization)
                test: /(?<=-no-optimize)\.svg$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true, // true outputs JSX tags
                        }
                    }
                ]
            },
            {   // SVG (optimization)
                test: /(?<!-no-optimize)\.svg$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true, // true outputs JSX tags
                            svgo: {
                                plugins: [
                                    { removeTitle: false }
                                ],
                                floatPrecision: 2
                            }
                        }
                    }
                ]
            },

            {   // SVG external (do not parse, just load)
                test: /(?<=(node_modules|bower_components).*)\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ]
            },

            {   // PNG JPG GIF
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader?name=img/[name].[ext]',
                    },
                ],
            },


            {   // Fonts
                test: /\.(woff|woff2|ttf|eot|otf)([\?]?.*)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },

            // ======= OTHER ======= //
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },

        ]
    },
};


