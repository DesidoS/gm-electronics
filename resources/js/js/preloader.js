const preloaderRef = document.querySelector(".preloader");
let delay = window.innerWidth > 1024 ? 500 : 2800;

if (window.innerWidth <= 1024) {
    setTimeout(() => {
        document.querySelector(".preloader").style.transform =
            "translateY(-500%)";
        document.body.style.overflowY = "auto";
    }, delay);
}

if (window.innerWidth > 1024) {
    //схлопывание
    // setTimeout(() => {
    //     document.querySelector(".preloader").style.transform = "scaleX(0)";
    //     document.querySelector(".preloader").style.opacity = "0";
    //     document.querySelector(".preloader").style.transition = "all 0.5s ease";

    //     document.body.style.overflowY = "auto";
    // }, delay);
    //схлопывание

    setTimeout(() => {
        document.querySelector(".preloader").style.transform = "scale(3)";
        document.querySelector(".preloader").style.opacity = "0";
        document.querySelector(".preloader").style.transition = "all 1s ease";

        document.body.style.overflowY = "auto";
    }, delay);
}
setTimeout(() => {
    document.querySelector(".preloader").classList.add("active");
}, delay + 500);
