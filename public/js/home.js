/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/js/advantage.js":
/*!**************************************!*\
  !*** ./resources/js/js/advantage.js ***!
  \**************************************/
/***/ (function() {

var items = document.querySelectorAll(".advantage__item");
items.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (window.innerWidth > 1024) return;
    items.forEach(function (el) {
      if (el !== event.currentTarget) {
        el.classList.remove("active");
      }
    });
    event.currentTarget.classList.toggle("active");
    items.forEach(function (item) {
      Array.from(item.children).forEach(function (child) {
        var _child$classList;
        (_child$classList = child.classList) === null || _child$classList === void 0 ? void 0 : _child$classList.remove("active");
      });
    });
  });
});

/***/ }),

/***/ "./resources/js/js/backdrop.js":
/*!*************************************!*\
  !*** ./resources/js/js/backdrop.js ***!
  \*************************************/
/***/ (function() {

var header = {
  menuBtn: document.querySelector(".header__menu-button"),
  element: document.querySelector(".header"),
  navItem: document.querySelectorAll(".header__nav-item")
};
function openBackdrop() {
  window.addEventListener("resize", watchScreenHeight);
  watchScreenHeight();
  header.element.classList.toggle("is-open");
  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }
  if (!header.element.classList.contains("is-open")) {
    window.removeEventListener("resize", watchScreenHeight);
    header.element.classList.remove("backdrop-scroll");
  }
}
function watchScreenHeight() {
  if (window.innerHeight > 632) return;
  header.element.classList.add("backdrop-scroll");
}
header.menuBtn.addEventListener("click", openBackdrop);
header.navItem.forEach(function (el) {
  return el.addEventListener("click", function () {
    if (!header.element.classList.contains("is-open")) return;
    openBackdrop();
  });
});

/***/ }),

/***/ "./resources/js/js/cookies.js":
/*!************************************!*\
  !*** ./resources/js/js/cookies.js ***!
  \************************************/
/***/ (function() {

var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)cookieConsent\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (!cookieValue) {
  var cookiesBtn = document.querySelector(".cookies__button");
  var cookiesRef = document.querySelector(".cookies");
  cookiesRef.classList.add("active");
  cookiesBtn.addEventListener("click", function () {
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    cookiesRef.style.transform = "translateY(100%)";
    setTimeout(function () {
      cookiesRef.style.display = "none";
    }, 1000);
  });
}
var cookiesPopupBg = document.querySelector(".cookies__popup__bg");
var cookiesPopup = document.querySelector(".cookies__popup");
var cookiesOpenPopupBtn = document.querySelectorAll(".cookies__open-popup");
var cookiesClosePopupBtn = document.querySelector(".cookies__close-popup");
cookiesOpenPopupBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.style.overflowY = "hidden";
    if (window.innerHeight < 632) {
      cookiesPopup.classList.add("scroll");
    }
    if (window.innerWidth < 904) {
      cookiesPopup.classList.add("scroll");
    }
    cookiesPopupBg.classList.add("active");
    cookiesPopup.classList.add("active");
  });
});
cookiesClosePopupBtn.addEventListener("click", function () {
  document.body.style.overflowY = "auto";
  cookiesPopupBg.classList.remove("active");
  cookiesPopup.classList.remove("active");
});

/***/ }),

/***/ "./resources/js/js/header.js":
/*!***********************************!*\
  !*** ./resources/js/js/header.js ***!
  \***********************************/
/***/ (function() {

if (!window.matchMedia("(min-width: 1025px)").matches) {
  var header = document.querySelector("header");
  var lastScroll = 0;
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll > 83 && currentScroll > lastScroll) {
      header.classList.remove("fixed");
      header.classList.add("hide");
    } else {
      header.classList.add("fixed");
    }
    lastScroll = currentScroll;
  });
}

/***/ }),

/***/ "./resources/js/js/lang.js":
/*!*********************************!*\
  !*** ./resources/js/js/lang.js ***!
  \*********************************/
/***/ (function() {

var buttonLang = document.querySelector(".header__lang-button");
var enSvg = document.querySelector(".header__lang-svg--img--en");
var arSvg = document.querySelector(".header__lang-svg--img--ar");
buttonLang.addEventListener("click", function () {
  enSvg.classList.toggle("enActive");
  arSvg.classList.toggle("arActive");
});

/***/ }),

/***/ "./resources/js/js/partners.js":
/*!*************************************!*\
  !*** ./resources/js/js/partners.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");

var splideOptions = {
  type: "loop",
  pagination: false,
  arrows: false,
  lazyLoad: "nearby",
  perPage: 1,
  speed: 500,
  gap: 30,
  autoplay: true,
  interval: 3000,
  drag: true,
  keyboard: true,
  mediaQuery: "min",
  breakpoints: {
    1200: {
      destroy: true
    },
    768: {
      perPage: 2
    }
  }
};
var splide = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](".splide", splideOptions).mount();

/***/ }),

/***/ "./resources/js/js/popup.js":
/*!**********************************!*\
  !*** ./resources/js/js/popup.js ***!
  \**********************************/
/***/ (function() {

var popupBg = document.querySelector(".popup__bg");
var popup = document.querySelector(".popup");
var openPopupButtons = document.querySelectorAll(".open-popup");
var closePopupButton = document.querySelector(".close-popup");
openPopupButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerHeight < 632) {
      popup.classList.add("scroll");
    }
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});
closePopupButton.addEventListener("click", function () {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});

/***/ }),

/***/ "./resources/js/js/preloader.js":
/*!**************************************!*\
  !*** ./resources/js/js/preloader.js ***!
  \**************************************/
/***/ (function() {

var preloaderRef = document.querySelector(".preloader");
var delay = window.innerWidth > 1024 ? 500 : 2800;
setTimeout(function () {
  if (window.innerWidth <= 1024) {
    preloaderRef.style.transform = "translateY(-500%)";
    document.body.style.overflowY = "auto";
  }
  if (window.innerWidth > 1024) {
    preloaderRef.style.transform = "scaleX(0)";
    preloaderRef.style.opacity = "0";
    preloaderRef.style.transition = "all 0.5s ease";
    document.body.style.overflowY = "auto";
  }
}, delay);
setTimeout(function () {
  document.querySelector(".preloader").classList.add("active");
}, delay + 500);

/***/ }),

/***/ "./resources/js/js/process.js":
/*!************************************!*\
  !*** ./resources/js/js/process.js ***!
  \************************************/
/***/ (function() {

var processLine = document.querySelector(".process__line");
var items = document.querySelectorAll(".process__item");
window.addEventListener("scroll", function () {
  var position = processLine.getBoundingClientRect().top;
  if (position < window.innerHeight * 0.8) {
    processLine.classList.add("show");
    items.forEach(function (item, index) {
      var delay;
      switch (index) {
        case 0:
          delay = 0;
          break;
        case 1:
          delay = window.innerHeight > 1025 ? 0 : 600;
          break;
        case 2:
          delay = window.innerHeight > 1025 ? 1400 : 1200;
          break;
        case 3:
          delay = window.innerHeight > 1025 ? 1600 : 1800;
          break;
        case 4:
          delay = window.innerHeight > 1025 ? 2800 : 2400;
          break;
        case 5:
          delay = 3000;
          break;
        case 6:
          delay = window.innerHeight > 1025 ? 4000 : 4000;
          break;
        default:
          delay = 0;
          break;
      }
      setTimeout(function () {
        item.classList.add("show");
      }, delay);
    });
  }
});

/***/ }),

/***/ "./resources/js/js/product.js":
/*!************************************!*\
  !*** ./resources/js/js/product.js ***!
  \************************************/
/***/ (function() {

var items = document.querySelectorAll(".products__item");
items.forEach(function (item) {
  item.addEventListener("click", function (event) {
    items.forEach(function (el) {
      if (el !== event.currentTarget) {
        if (el.style.zIndex > 1) {
          el.style.zIndex = 2;
          setTimeout(function () {
            el.style.zIndex = "";
          }, 500);
        }
        el.classList.remove("active");
        el.firstElementChild.classList.remove("active");
      }
    });
    var currentItem = event.currentTarget;
    var wrapItem = event.currentTarget.children[0];
    currentItem.classList.toggle("active");
    wrapItem.classList.toggle("active");
    currentItem.style.zIndex = 2;
  });
});
var body = document.querySelector("body"),
  observ = new MutationObserver(function () {
    var itemsActive = document.querySelector(".products__item.active");
    if (itemsActive) {
      itemsActive.style.zIndex = 3;
      itemsActive.addEventListener("click", function (e) {
        setTimeout(function () {
          itemsActive.style.zIndex = "";
        }, 500);
      });
    }
  });
observ.observe(body, {
  childList: true,
  subtree: true,
  attributes: true
});

/***/ }),

/***/ "./resources/js/js/statistics.js":
/*!***************************************!*\
  !*** ./resources/js/js/statistics.js ***!
  \***************************************/
/***/ (function() {

var statisticItems = document.querySelectorAll(".statistic__item--title");
function animateNumbers() {
  statisticItems.forEach(function (item) {
    var endValue = parseInt(item.textContent);
    var startValue = 0;
    var animationDuration = 1000;
    var step = endValue / animationDuration * 10;
    var delay = window.innerWidth < 1025 ? 1500 : 1000;
    var timer = setInterval(function () {
      item.textContent = Math.floor(startValue);
      setTimeout(function () {
        startValue += step;
        if (startValue >= endValue) {
          clearInterval(timer);
          item.textContent = endValue;
        }
      }, delay);
    }, 10);
  });
}
var animationHasStarted = false;
function handleScroll() {
  var statisticSection = document.querySelector(".statistic");
  var statisticSectionPosition = statisticSection.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (statisticSectionPosition < windowHeight && !animationHasStarted) {
    var statisticSectionBottomPosition = statisticSection.getBoundingClientRect().bottom;
    if (statisticSectionBottomPosition > 0) {
      animateNumbers();
      animationHasStarted = true;
    }
  }
}
window.addEventListener("scroll", handleScroll);

/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASSES": function() { return /* binding */ CLASSES; },
/* harmony export */   "CLASS_ACTIVE": function() { return /* binding */ CLASS_ACTIVE; },
/* harmony export */   "CLASS_ARROW": function() { return /* binding */ CLASS_ARROW; },
/* harmony export */   "CLASS_ARROWS": function() { return /* binding */ CLASS_ARROWS; },
/* harmony export */   "CLASS_ARROW_NEXT": function() { return /* binding */ CLASS_ARROW_NEXT; },
/* harmony export */   "CLASS_ARROW_PREV": function() { return /* binding */ CLASS_ARROW_PREV; },
/* harmony export */   "CLASS_CLONE": function() { return /* binding */ CLASS_CLONE; },
/* harmony export */   "CLASS_CONTAINER": function() { return /* binding */ CLASS_CONTAINER; },
/* harmony export */   "CLASS_FOCUS_IN": function() { return /* binding */ CLASS_FOCUS_IN; },
/* harmony export */   "CLASS_INITIALIZED": function() { return /* binding */ CLASS_INITIALIZED; },
/* harmony export */   "CLASS_LIST": function() { return /* binding */ CLASS_LIST; },
/* harmony export */   "CLASS_LOADING": function() { return /* binding */ CLASS_LOADING; },
/* harmony export */   "CLASS_NEXT": function() { return /* binding */ CLASS_NEXT; },
/* harmony export */   "CLASS_OVERFLOW": function() { return /* binding */ CLASS_OVERFLOW; },
/* harmony export */   "CLASS_PAGINATION": function() { return /* binding */ CLASS_PAGINATION; },
/* harmony export */   "CLASS_PAGINATION_PAGE": function() { return /* binding */ CLASS_PAGINATION_PAGE; },
/* harmony export */   "CLASS_PREV": function() { return /* binding */ CLASS_PREV; },
/* harmony export */   "CLASS_PROGRESS": function() { return /* binding */ CLASS_PROGRESS; },
/* harmony export */   "CLASS_PROGRESS_BAR": function() { return /* binding */ CLASS_PROGRESS_BAR; },
/* harmony export */   "CLASS_ROOT": function() { return /* binding */ CLASS_ROOT; },
/* harmony export */   "CLASS_SLIDE": function() { return /* binding */ CLASS_SLIDE; },
/* harmony export */   "CLASS_SPINNER": function() { return /* binding */ CLASS_SPINNER; },
/* harmony export */   "CLASS_SR": function() { return /* binding */ CLASS_SR; },
/* harmony export */   "CLASS_TOGGLE": function() { return /* binding */ CLASS_TOGGLE; },
/* harmony export */   "CLASS_TOGGLE_PAUSE": function() { return /* binding */ CLASS_TOGGLE_PAUSE; },
/* harmony export */   "CLASS_TOGGLE_PLAY": function() { return /* binding */ CLASS_TOGGLE_PLAY; },
/* harmony export */   "CLASS_TRACK": function() { return /* binding */ CLASS_TRACK; },
/* harmony export */   "CLASS_VISIBLE": function() { return /* binding */ CLASS_VISIBLE; },
/* harmony export */   "DEFAULTS": function() { return /* binding */ DEFAULTS; },
/* harmony export */   "EVENT_ACTIVE": function() { return /* binding */ EVENT_ACTIVE; },
/* harmony export */   "EVENT_ARROWS_MOUNTED": function() { return /* binding */ EVENT_ARROWS_MOUNTED; },
/* harmony export */   "EVENT_ARROWS_UPDATED": function() { return /* binding */ EVENT_ARROWS_UPDATED; },
/* harmony export */   "EVENT_AUTOPLAY_PAUSE": function() { return /* binding */ EVENT_AUTOPLAY_PAUSE; },
/* harmony export */   "EVENT_AUTOPLAY_PLAY": function() { return /* binding */ EVENT_AUTOPLAY_PLAY; },
/* harmony export */   "EVENT_AUTOPLAY_PLAYING": function() { return /* binding */ EVENT_AUTOPLAY_PLAYING; },
/* harmony export */   "EVENT_CLICK": function() { return /* binding */ EVENT_CLICK; },
/* harmony export */   "EVENT_DESTROY": function() { return /* binding */ EVENT_DESTROY; },
/* harmony export */   "EVENT_DRAG": function() { return /* binding */ EVENT_DRAG; },
/* harmony export */   "EVENT_DRAGGED": function() { return /* binding */ EVENT_DRAGGED; },
/* harmony export */   "EVENT_DRAGGING": function() { return /* binding */ EVENT_DRAGGING; },
/* harmony export */   "EVENT_END_INDEX_CHANGED": function() { return /* binding */ EVENT_END_INDEX_CHANGED; },
/* harmony export */   "EVENT_HIDDEN": function() { return /* binding */ EVENT_HIDDEN; },
/* harmony export */   "EVENT_INACTIVE": function() { return /* binding */ EVENT_INACTIVE; },
/* harmony export */   "EVENT_LAZYLOAD_LOADED": function() { return /* binding */ EVENT_LAZYLOAD_LOADED; },
/* harmony export */   "EVENT_MOUNTED": function() { return /* binding */ EVENT_MOUNTED; },
/* harmony export */   "EVENT_MOVE": function() { return /* binding */ EVENT_MOVE; },
/* harmony export */   "EVENT_MOVED": function() { return /* binding */ EVENT_MOVED; },
/* harmony export */   "EVENT_NAVIGATION_MOUNTED": function() { return /* binding */ EVENT_NAVIGATION_MOUNTED; },
/* harmony export */   "EVENT_OVERFLOW": function() { return /* binding */ EVENT_OVERFLOW; },
/* harmony export */   "EVENT_PAGINATION_MOUNTED": function() { return /* binding */ EVENT_PAGINATION_MOUNTED; },
/* harmony export */   "EVENT_PAGINATION_UPDATED": function() { return /* binding */ EVENT_PAGINATION_UPDATED; },
/* harmony export */   "EVENT_READY": function() { return /* binding */ EVENT_READY; },
/* harmony export */   "EVENT_REFRESH": function() { return /* binding */ EVENT_REFRESH; },
/* harmony export */   "EVENT_RESIZE": function() { return /* binding */ EVENT_RESIZE; },
/* harmony export */   "EVENT_RESIZED": function() { return /* binding */ EVENT_RESIZED; },
/* harmony export */   "EVENT_SCROLL": function() { return /* binding */ EVENT_SCROLL; },
/* harmony export */   "EVENT_SCROLLED": function() { return /* binding */ EVENT_SCROLLED; },
/* harmony export */   "EVENT_SHIFTED": function() { return /* binding */ EVENT_SHIFTED; },
/* harmony export */   "EVENT_SLIDE_KEYDOWN": function() { return /* binding */ EVENT_SLIDE_KEYDOWN; },
/* harmony export */   "EVENT_UPDATED": function() { return /* binding */ EVENT_UPDATED; },
/* harmony export */   "EVENT_VISIBLE": function() { return /* binding */ EVENT_VISIBLE; },
/* harmony export */   "EventBinder": function() { return /* binding */ EventBinder; },
/* harmony export */   "EventInterface": function() { return /* binding */ EventInterface; },
/* harmony export */   "FADE": function() { return /* binding */ FADE; },
/* harmony export */   "LOOP": function() { return /* binding */ LOOP; },
/* harmony export */   "LTR": function() { return /* binding */ LTR; },
/* harmony export */   "RTL": function() { return /* binding */ RTL; },
/* harmony export */   "RequestInterval": function() { return /* binding */ RequestInterval; },
/* harmony export */   "SLIDE": function() { return /* binding */ SLIDE; },
/* harmony export */   "STATUS_CLASSES": function() { return /* binding */ STATUS_CLASSES; },
/* harmony export */   "Splide": function() { return /* binding */ Splide; },
/* harmony export */   "SplideRenderer": function() { return /* binding */ SplideRenderer; },
/* harmony export */   "State": function() { return /* binding */ State; },
/* harmony export */   "TTB": function() { return /* binding */ TTB; },
/* harmony export */   "Throttle": function() { return /* binding */ Throttle; },
/* harmony export */   "default": function() { return /* binding */ Splide; }
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function (key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  forEach(keys || ownKeys(object), function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      id = raf(update);
    }
  }

  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function () {
    interval.isPaused() && interval.start();
  };
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);

    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function (Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;
  var overflow;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }

  function resize(force) {
    var newRect = rect(root);

    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);

      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }

  return {
    mount: mount,
    resize: resize,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding,
    isOverflow: isOverflow
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);

    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }

  function remount() {
    destroy();
    mount();
  }

  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }

  function observe() {
    var count = computeCloneCount();

    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      var index = loop(Move.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);

    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }

    return clamp(end, 0, slideCount - 1);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }

  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, endIndex) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var placeholder = Elements.arrows,
      track = Elements.track;
  var wrapper = placeholder;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller.getPrev();
      var nextIndex = Controller.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy,
    update: update
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on,
      bind = _EventInterface6.bind,
      emit = _EventInterface6.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on,
      emit = _EventInterface8.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit,
      bind = _EventInterface9.bind,
      unbind = _EventInterface9.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      off = _EventInterface11.off,
      bind = _EventInterface11.bind,
      emit = _EventInterface11.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }

  function init() {
    empty(entries);
    register();

    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }

  function register() {
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }

  function check() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries),
    check: check
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements.pagination;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");

    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      bind = _EventInterface12.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      on = _EventInterface13.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var Slides = Components2.Slides;

  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }

  function init() {
    Slides.forEach(function (Slide) {
      Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
    });
  }

  function start(index, done) {
    Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface14 = EventInterface(splide),
        on = _EventInterface14.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/preloader.js */ "./resources/js/js/preloader.js");
/* harmony import */ var _js_preloader_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_preloader_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_backdrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/backdrop.js */ "./resources/js/js/backdrop.js");
/* harmony import */ var _js_backdrop_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_backdrop_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/lang.js */ "./resources/js/js/lang.js");
/* harmony import */ var _js_lang_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_lang_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/product.js */ "./resources/js/js/product.js");
/* harmony import */ var _js_product_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_product_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_partners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/partners.js */ "./resources/js/js/partners.js");
/* harmony import */ var _js_advantage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/advantage.js */ "./resources/js/js/advantage.js");
/* harmony import */ var _js_advantage_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_advantage_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/popup.js */ "./resources/js/js/popup.js");
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_popup_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/header.js */ "./resources/js/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_statistics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/statistics.js */ "./resources/js/js/statistics.js");
/* harmony import */ var _js_statistics_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_statistics_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_cookies_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/cookies.js */ "./resources/js/js/cookies.js");
/* harmony import */ var _js_cookies_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_cookies_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_process_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/process.js */ "./resources/js/js/process.js");
/* harmony import */ var _js_process_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_process_js__WEBPACK_IMPORTED_MODULE_10__);











}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7QUFFM0RGLEtBQUssQ0FBQ0csT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztFQUN0QkEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0lBQ3hDLElBQUlDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLElBQUksRUFBRTtJQUM5QlIsS0FBSyxDQUFDRyxPQUFPLENBQUMsVUFBQ00sRUFBRSxFQUFLO01BQ3BCLElBQUlBLEVBQUUsS0FBS0gsS0FBSyxDQUFDSSxhQUFhLEVBQUU7UUFDOUJELEVBQUUsQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQy9CO0lBQ0YsQ0FBQyxDQUFDO0lBRUZOLEtBQUssQ0FBQ0ksYUFBYSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFFOUNiLEtBQUssQ0FBQ0csT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztNQUN0QlUsS0FBSyxDQUFDQyxJQUFJLENBQUNYLElBQUksQ0FBQ1ksUUFBUSxDQUFDLENBQUNiLE9BQU8sQ0FBQyxVQUFDYyxLQUFLLEVBQUs7UUFBQSxJQUFBQyxnQkFBQTtRQUMzQyxDQUFBQSxnQkFBQSxHQUFBRCxLQUFLLENBQUNOLFNBQVMsY0FBQU8sZ0JBQUEsdUJBQWZBLGdCQUFBLENBQWlCTixNQUFNLENBQUMsUUFBUSxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ25CRixJQUFNTyxNQUFNLEdBQUc7RUFDYkMsT0FBTyxFQUFFbkIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQ3ZEQyxPQUFPLEVBQUVyQixRQUFRLENBQUNvQixhQUFhLENBQUMsU0FBUyxDQUFDO0VBQzFDRSxPQUFPLEVBQUV0QixRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQjtBQUN4RCxDQUFDO0FBRUQsU0FBU3NCLFlBQVlBLENBQUEsRUFBRztFQUN0QmpCLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsaUJBQWlCLENBQUM7RUFFcERBLGlCQUFpQixFQUFFO0VBRW5CTixNQUFNLENBQUNHLE9BQU8sQ0FBQ1gsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO0VBRTFDLElBQUlaLFFBQVEsQ0FBQ3lCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEtBQUssUUFBUSxFQUFFO0lBQzlDM0IsUUFBUSxDQUFDeUIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxNQUFNO0VBQ3hDLENBQUMsTUFBTTtJQUNMM0IsUUFBUSxDQUFDeUIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRO0VBQzFDO0VBRUEsSUFBSSxDQUFDVCxNQUFNLENBQUNHLE9BQU8sQ0FBQ1gsU0FBUyxDQUFDa0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQ2pEdEIsTUFBTSxDQUFDdUIsbUJBQW1CLENBQUMsUUFBUSxFQUFFTCxpQkFBaUIsQ0FBQztJQUN2RE4sTUFBTSxDQUFDRyxPQUFPLENBQUNYLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0VBQ3BEO0FBQ0Y7QUFFQSxTQUFTYSxpQkFBaUJBLENBQUEsRUFBRztFQUMzQixJQUFJbEIsTUFBTSxDQUFDd0IsV0FBVyxHQUFHLEdBQUcsRUFBRTtFQUM5QlosTUFBTSxDQUFDRyxPQUFPLENBQUNYLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUNqRDtBQUVBYixNQUFNLENBQUNDLE9BQU8sQ0FBQ2YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFbUIsWUFBWSxDQUFDO0FBQ3RETCxNQUFNLENBQUNJLE9BQU8sQ0FBQ3BCLE9BQU8sQ0FBQyxVQUFDTSxFQUFFO0VBQUEsT0FDeEJBLEVBQUUsQ0FBQ0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDakMsSUFBSSxDQUFDYyxNQUFNLENBQUNHLE9BQU8sQ0FBQ1gsU0FBUyxDQUFDa0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQ25ETCxZQUFZLEVBQUU7RUFDaEIsQ0FBQyxDQUFDO0FBQUEsRUFDSDs7Ozs7Ozs7OztBQ3BDRCxJQUFNUyxXQUFXLEdBQUdoQyxRQUFRLENBQUNpQyxNQUFNLENBQUNDLE9BQU8sQ0FDekMsc0RBQXNELEVBQ3RELElBQUksQ0FDTDtBQUVELElBQUksQ0FBQ0YsV0FBVyxFQUFFO0VBQ2hCLElBQU1HLFVBQVUsR0FBR25DLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUM3RCxJQUFNZ0IsVUFBVSxHQUFHcEMsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUVyRGdCLFVBQVUsQ0FBQzFCLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFFbENJLFVBQVUsQ0FBQy9CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3pDSixRQUFRLENBQUNpQyxNQUFNLEdBQ2IsbUVBQW1FO0lBRXJFRyxVQUFVLENBQUNWLEtBQUssQ0FBQ1csU0FBUyxHQUFHLGtCQUFrQjtJQUMvQ0MsVUFBVSxDQUFDLFlBQU07TUFDZkYsVUFBVSxDQUFDVixLQUFLLENBQUNhLE9BQU8sR0FBRyxNQUFNO0lBQ25DLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDVixDQUFDLENBQUM7QUFDSjtBQUVBLElBQU1DLGNBQWMsR0FBR3hDLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUNwRSxJQUFNcUIsWUFBWSxHQUFHekMsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzlELElBQU1zQixtQkFBbUIsR0FBRzFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7QUFDN0UsSUFBTTBDLG9CQUFvQixHQUFHM0MsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBRTVFc0IsbUJBQW1CLENBQUN4QyxPQUFPLENBQUMsVUFBQzBDLE1BQU0sRUFBSztFQUN0Q0EsTUFBTSxDQUFDeEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUN5QyxDQUFDLEVBQUs7SUFDdENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2hCOUMsUUFBUSxDQUFDeUIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRO0lBRTFDLElBQUlyQixNQUFNLENBQUN3QixXQUFXLEdBQUcsR0FBRyxFQUFFO01BQzVCVyxZQUFZLENBQUMvQixTQUFTLENBQUNxQixHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3RDO0lBQ0EsSUFBSXpCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUcsRUFBRTtNQUMzQmtDLFlBQVksQ0FBQy9CLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDdEM7SUFFQVMsY0FBYyxDQUFDOUIsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN0Q1UsWUFBWSxDQUFDL0IsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUN0QyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRlksb0JBQW9CLENBQUN2QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNuREosUUFBUSxDQUFDeUIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxNQUFNO0VBQ3RDYSxjQUFjLENBQUM5QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDekM4QixZQUFZLENBQUMvQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDekMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDaERGLElBQUksQ0FBQ0wsTUFBTSxDQUFDeUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUNDLE9BQU8sRUFBRTtFQUNyRCxJQUFNOUIsTUFBTSxHQUFHbEIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxJQUFJNkIsVUFBVSxHQUFHLENBQUM7RUFFbEIzQyxNQUFNLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0lBQ3RDLElBQU04QyxhQUFhLEdBQUc1QyxNQUFNLENBQUM2QyxXQUFXO0lBQ3hDLElBQUlELGFBQWEsR0FBRyxFQUFFLElBQUlBLGFBQWEsR0FBR0QsVUFBVSxFQUFFO01BQ3BEL0IsTUFBTSxDQUFDUixTQUFTLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDaENPLE1BQU0sQ0FBQ1IsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDLE1BQU07TUFDTGIsTUFBTSxDQUFDUixTQUFTLENBQUNxQixHQUFHLENBQUMsT0FBTyxDQUFDO0lBQy9CO0lBQ0FrQixVQUFVLEdBQUdDLGFBQWE7RUFDNUIsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7QUNkQSxJQUFNRSxVQUFVLEdBQUdwRCxRQUFRLENBQUNvQixhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFDakUsSUFBTWlDLEtBQUssR0FBR3JELFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztBQUNsRSxJQUFNa0MsS0FBSyxHQUFHdEQsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0FBRWxFZ0MsVUFBVSxDQUFDaEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekNpRCxLQUFLLENBQUMzQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDbEMwQyxLQUFLLENBQUM1QyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDcEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUG9DO0FBRXRDLElBQU00QyxhQUFhLEdBQUc7RUFDcEJDLElBQUksRUFBRSxNQUFNO0VBQ1pDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxNQUFNLEVBQUUsS0FBSztFQUNiQyxRQUFRLEVBQUUsUUFBUTtFQUNsQkMsT0FBTyxFQUFFLENBQUM7RUFDVkMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsUUFBUSxFQUFFLElBQUk7RUFDZEMsUUFBUSxFQUFFLElBQUk7RUFDZEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsUUFBUSxFQUFFLElBQUk7RUFDZEMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFdBQVcsRUFBRTtJQUNYLElBQUksRUFBRTtNQUNKQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0QsR0FBRyxFQUFFO01BQ0hULE9BQU8sRUFBRTtJQUNYO0VBQ0Y7QUFDRixDQUFDO0FBRUQsSUFBTVUsTUFBTSxHQUFHLElBQUloQix3REFBTSxDQUFDLFNBQVMsRUFBRUMsYUFBYSxDQUFDLENBQUNnQixLQUFLLEVBQUU7Ozs7Ozs7Ozs7QUN6QjNELElBQU1DLE9BQU8sR0FBR3pFLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDcEQsSUFBTXNELEtBQUssR0FBRzFFLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsSUFBTXVELGdCQUFnQixHQUFHM0UsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDakUsSUFBTTJFLGdCQUFnQixHQUFHNUUsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUUvRHVELGdCQUFnQixDQUFDekUsT0FBTyxDQUFDLFVBQUMwQyxNQUFNLEVBQUs7RUFDbkNBLE1BQU0sQ0FBQ3hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDeUMsQ0FBQyxFQUFLO0lBQ3RDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUVsQixJQUFJeEMsTUFBTSxDQUFDd0IsV0FBVyxHQUFHLEdBQUcsRUFBRTtNQUM1QjRDLEtBQUssQ0FBQ2hFLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDL0I7SUFFQTBDLE9BQU8sQ0FBQy9ELFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDL0IyQyxLQUFLLENBQUNoRSxTQUFTLENBQUNxQixHQUFHLENBQUMsUUFBUSxDQUFDO0VBQy9CLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGNkMsZ0JBQWdCLENBQUN4RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUMvQ3FFLE9BQU8sQ0FBQy9ELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNsQytELEtBQUssQ0FBQ2hFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFFRlgsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3lDLENBQUMsRUFBSztFQUN4QyxJQUFJQSxDQUFDLENBQUNnQyxNQUFNLEtBQUtKLE9BQU8sRUFBRTtJQUN4QkEsT0FBTyxDQUFDL0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xDK0QsS0FBSyxDQUFDaEUsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ2xDO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDNUJGLElBQU1tRSxZQUFZLEdBQUc5RSxRQUFRLENBQUNvQixhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ3pELElBQUkyRCxLQUFLLEdBQUd6RSxNQUFNLENBQUNDLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFFakQrQixVQUFVLENBQUMsWUFBTTtFQUNiLElBQUloQyxNQUFNLENBQUNDLFVBQVUsSUFBSSxJQUFJLEVBQUU7SUFDM0J1RSxZQUFZLENBQUNwRCxLQUFLLENBQUNXLFNBQVMsR0FBRyxtQkFBbUI7SUFDbERyQyxRQUFRLENBQUN5QixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLE1BQU07RUFDMUM7RUFFQSxJQUFJckIsTUFBTSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxFQUFFO0lBQzFCdUUsWUFBWSxDQUFDcEQsS0FBSyxDQUFDVyxTQUFTLEdBQUcsV0FBVztJQUMxQ3lDLFlBQVksQ0FBQ3BELEtBQUssQ0FBQ3NELE9BQU8sR0FBRyxHQUFHO0lBQ2hDRixZQUFZLENBQUNwRCxLQUFLLENBQUN1RCxVQUFVLEdBQUcsZUFBZTtJQUUvQ2pGLFFBQVEsQ0FBQ3lCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUcsTUFBTTtFQUMxQztBQUNKLENBQUMsRUFBRW9ELEtBQUssQ0FBQztBQUNUekMsVUFBVSxDQUFDLFlBQU07RUFDYnRDLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ1YsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNoRSxDQUFDLEVBQUVnRCxLQUFLLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7O0FDbkJmLElBQU1HLFdBQVcsR0FBR2xGLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM1RCxJQUFNckIsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0FBRXpESyxNQUFNLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3RDLElBQU0rRSxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UscUJBQXFCLEVBQUUsQ0FBQ0MsR0FBRztFQUV4RCxJQUFJRixRQUFRLEdBQUc3RSxNQUFNLENBQUN3QixXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQ3ZDb0QsV0FBVyxDQUFDeEUsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUVqQ2hDLEtBQUssQ0FBQ0csT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRW1GLEtBQUssRUFBSztNQUM3QixJQUFJUCxLQUFLO01BQ1QsUUFBUU8sS0FBSztRQUNYLEtBQUssQ0FBQztVQUNKUCxLQUFLLEdBQUcsQ0FBQztVQUNUO1FBQ0YsS0FBSyxDQUFDO1VBQ0pBLEtBQUssR0FBR3pFLE1BQU0sQ0FBQ3dCLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7VUFDM0M7UUFDRixLQUFLLENBQUM7VUFDSmlELEtBQUssR0FBR3pFLE1BQU0sQ0FBQ3dCLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7VUFDL0M7UUFDRixLQUFLLENBQUM7VUFDSmlELEtBQUssR0FBR3pFLE1BQU0sQ0FBQ3dCLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7VUFDL0M7UUFDRixLQUFLLENBQUM7VUFDSmlELEtBQUssR0FBR3pFLE1BQU0sQ0FBQ3dCLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7VUFDL0M7UUFDRixLQUFLLENBQUM7VUFDSmlELEtBQUssR0FBRyxJQUFJO1VBQ1o7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHekUsTUFBTSxDQUFDd0IsV0FBVyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtVQUMvQztRQUNGO1VBQ0VpRCxLQUFLLEdBQUcsQ0FBQztVQUNUO01BQU07TUFFVnpDLFVBQVUsQ0FBQyxZQUFNO1FBQ2ZuQyxJQUFJLENBQUNPLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUIsQ0FBQyxFQUFFZ0QsS0FBSyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUMxQ0YsSUFBTWhGLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUUxREYsS0FBSyxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO0VBQ3RCQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7SUFDeENOLEtBQUssQ0FBQ0csT0FBTyxDQUFDLFVBQUNNLEVBQUUsRUFBSztNQUNwQixJQUFJQSxFQUFFLEtBQUtILEtBQUssQ0FBQ0ksYUFBYSxFQUFFO1FBQzlCLElBQUlELEVBQUUsQ0FBQ2tCLEtBQUssQ0FBQzZELE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdkIvRSxFQUFFLENBQUNrQixLQUFLLENBQUM2RCxNQUFNLEdBQUcsQ0FBQztVQUNuQmpELFVBQVUsQ0FBQyxZQUFNO1lBQ2Y5QixFQUFFLENBQUNrQixLQUFLLENBQUM2RCxNQUFNLEdBQUcsRUFBRTtVQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1Q7UUFDQS9FLEVBQUUsQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzdCSCxFQUFFLENBQUNnRixpQkFBaUIsQ0FBQzlFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNqRDtJQUNGLENBQUMsQ0FBQztJQUVGLElBQU04RSxXQUFXLEdBQUdwRixLQUFLLENBQUNJLGFBQWE7SUFDdkMsSUFBTWlGLFFBQVEsR0FBR3JGLEtBQUssQ0FBQ0ksYUFBYSxDQUFDTSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hEMEUsV0FBVyxDQUFDL0UsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3RDOEUsUUFBUSxDQUFDaEYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DNkUsV0FBVyxDQUFDL0QsS0FBSyxDQUFDNkQsTUFBTSxHQUFHLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTTlELElBQUksR0FBR3pCLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDekN1RSxNQUFNLEdBQUcsSUFBSUMsZ0JBQWdCLENBQUMsWUFBTTtJQUNsQyxJQUFNQyxXQUFXLEdBQUc3RixRQUFRLENBQUNvQixhQUFhLENBQUMsd0JBQXdCLENBQUM7SUFDcEUsSUFBSXlFLFdBQVcsRUFBRTtNQUNmQSxXQUFXLENBQUNuRSxLQUFLLENBQUM2RCxNQUFNLEdBQUcsQ0FBQztNQUM1Qk0sV0FBVyxDQUFDekYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUN5QyxDQUFDLEVBQUs7UUFDM0NQLFVBQVUsQ0FBQyxZQUFNO1VBQ2Z1RCxXQUFXLENBQUNuRSxLQUFLLENBQUM2RCxNQUFNLEdBQUcsRUFBRTtRQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ1QsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSkksTUFBTSxDQUFDRyxPQUFPLENBQUNyRSxJQUFJLEVBQUU7RUFBRXNFLFNBQVMsRUFBRSxJQUFJO0VBQUVDLE9BQU8sRUFBRSxJQUFJO0VBQUVDLFVBQVUsRUFBRTtBQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ3JDMUUsSUFBTUMsY0FBYyxHQUFHbEcsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUUzRSxTQUFTa0csY0FBY0EsQ0FBQSxFQUFHO0VBQ3hCRCxjQUFjLENBQUNoRyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO0lBQy9CLElBQU1pRyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ2xHLElBQUksQ0FBQ21HLFdBQVcsQ0FBQztJQUMzQyxJQUFJQyxVQUFVLEdBQUcsQ0FBQztJQUNsQixJQUFNQyxpQkFBaUIsR0FBRyxJQUFJO0lBQzlCLElBQU1DLElBQUksR0FBSUwsUUFBUSxHQUFHSSxpQkFBaUIsR0FBSSxFQUFFO0lBQ2hELElBQUl6QixLQUFLLEdBQUd6RSxNQUFNLENBQUNDLFVBQVUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7SUFDbEQsSUFBTW1HLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDOUJ4RyxJQUFJLENBQUNtRyxXQUFXLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixVQUFVLENBQUM7TUFDekNqRSxVQUFVLENBQUMsWUFBTTtRQUNmaUUsVUFBVSxJQUFJRSxJQUFJO1FBQ2xCLElBQUlGLFVBQVUsSUFBSUgsUUFBUSxFQUFFO1VBQzFCVSxhQUFhLENBQUNKLEtBQUssQ0FBQztVQUNwQnZHLElBQUksQ0FBQ21HLFdBQVcsR0FBR0YsUUFBUTtRQUM3QjtNQUNGLENBQUMsRUFBRXJCLEtBQUssQ0FBQztJQUNYLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDUixDQUFDLENBQUM7QUFDSjtBQUVBLElBQUlnQyxtQkFBbUIsR0FBRyxLQUFLO0FBQy9CLFNBQVNDLFlBQVlBLENBQUEsRUFBRztFQUN0QixJQUFNQyxnQkFBZ0IsR0FBR2pILFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDN0QsSUFBTThGLHdCQUF3QixHQUFHRCxnQkFBZ0IsQ0FBQzdCLHFCQUFxQixFQUFFLENBQUNDLEdBQUc7RUFDN0UsSUFBTThCLFlBQVksR0FBRzdHLE1BQU0sQ0FBQ3dCLFdBQVc7RUFFdkMsSUFBSW9GLHdCQUF3QixHQUFHQyxZQUFZLElBQUksQ0FBQ0osbUJBQW1CLEVBQUU7SUFDbkUsSUFBTUssOEJBQThCLEdBQ2xDSCxnQkFBZ0IsQ0FBQzdCLHFCQUFxQixFQUFFLENBQUNpQyxNQUFNO0lBQ2pELElBQUlELDhCQUE4QixHQUFHLENBQUMsRUFBRTtNQUN0Q2pCLGNBQWMsRUFBRTtNQUNoQlksbUJBQW1CLEdBQUcsSUFBSTtJQUM1QjtFQUNGO0FBQ0Y7QUFFQXpHLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUMsUUFBUSxFQUFFNEcsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qy9DLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVEOztBQUUvUCw4REFBOEQsc0VBQXNFLDhEQUE4RCxrREFBa0QsaUJBQWlCLEdBQUc7O0FBRXhRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QiwwQ0FBMEM7QUFDeEUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUEyQzs7QUFFaEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLE9BQU87QUFDUCxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsc0RBQXNEO0FBQ3REO0FBQ0EsMkJBQTJCLHVDQUF1QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsT0FBTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFMG9DOzs7Ozs7O1VDM2xIM29DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNEO0FBQ0o7QUFDRztBQUNDO0FBQ0M7QUFDSjtBQUNDO0FBQ0k7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2pzL2FkdmFudGFnZS5qcyIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy8uL3Jlc291cmNlcy9qcy9qcy9iYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy8uL3Jlc291cmNlcy9qcy9qcy9jb29raWVzLmpzIiwid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy8uL3Jlc291cmNlcy9qcy9qcy9sYW5nLmpzIiwid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2pzL3BhcnRuZXJzLmpzIiwid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2pzL3BvcHVwLmpzIiwid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy8uL3Jlc291cmNlcy9qcy9qcy9wcm9jZXNzLmpzIiwid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2pzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZ20tZWxlY3Ryb25pY3MvLi9yZXNvdXJjZXMvanMvanMvc3RhdGlzdGljcy5qcyIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy8uL25vZGVfbW9kdWxlcy9Ac3BsaWRlanMvc3BsaWRlL2Rpc3QvanMvc3BsaWRlLmVzbS5qcyIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ20tZWxlY3Ryb25pY3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nbS1lbGVjdHJvbmljcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dtLWVsZWN0cm9uaWNzLy4vcmVzb3VyY2VzL2pzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkdmFudGFnZV9faXRlbVwiKTtcblxuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSByZXR1cm47XG4gICAgaXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgQXJyYXkuZnJvbShpdGVtLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3Q/LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgaGVhZGVyID0ge1xuICBtZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1idXR0b25cIiksXG4gIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpLFxuICBuYXZJdGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fbmF2LWl0ZW1cIiksXG59O1xuXG5mdW5jdGlvbiBvcGVuQmFja2Ryb3AoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHdhdGNoU2NyZWVuSGVpZ2h0KTtcblxuICB3YXRjaFNjcmVlbkhlaWdodCgpO1xuXG4gIGhlYWRlci5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuXG4gIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9PT0gXCJoaWRkZW5cIikge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICB9XG5cbiAgaWYgKCFoZWFkZXIuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgd2F0Y2hTY3JlZW5IZWlnaHQpO1xuICAgIGhlYWRlci5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiYWNrZHJvcC1zY3JvbGxcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2F0Y2hTY3JlZW5IZWlnaHQoKSB7XG4gIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiA2MzIpIHJldHVybjtcbiAgaGVhZGVyLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhY2tkcm9wLXNjcm9sbFwiKTtcbn1cblxuaGVhZGVyLm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5CYWNrZHJvcCk7XG5oZWFkZXIubmF2SXRlbS5mb3JFYWNoKChlbCkgPT5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIWhlYWRlci5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLW9wZW5cIikpIHJldHVybjtcbiAgICBvcGVuQmFja2Ryb3AoKTtcbiAgfSlcbik7IiwiY29uc3QgY29va2llVmFsdWUgPSBkb2N1bWVudC5jb29raWUucmVwbGFjZShcbiAgLyg/Oig/Ol58Lio7XFxzKiljb29raWVDb25zZW50XFxzKlxcPVxccyooW147XSopLiokKXxeLiokLyxcbiAgXCIkMVwiXG4pO1xuXG5pZiAoIWNvb2tpZVZhbHVlKSB7XG4gIGNvbnN0IGNvb2tpZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXNfX2J1dHRvblwiKTtcbiAgY29uc3QgY29va2llc1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llc1wiKTtcblxuICBjb29raWVzUmVmLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY29va2llc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICBcImNvb2tpZUNvbnNlbnQ9dHJ1ZTsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVDsgcGF0aD0vXCI7XG5cbiAgICBjb29raWVzUmVmLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29va2llc1JlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufVxuXG5jb25zdCBjb29raWVzUG9wdXBCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llc19fcG9wdXBfX2JnXCIpO1xuY29uc3QgY29va2llc1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVzX19wb3B1cFwiKTtcbmNvbnN0IGNvb2tpZXNPcGVuUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvb2tpZXNfX29wZW4tcG9wdXBcIik7XG5jb25zdCBjb29raWVzQ2xvc2VQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llc19fY2xvc2UtcG9wdXBcIik7XG5cbmNvb2tpZXNPcGVuUG9wdXBCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG5cbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgNjMyKSB7XG4gICAgICBjb29raWVzUG9wdXAuY2xhc3NMaXN0LmFkZChcInNjcm9sbFwiKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTA0KSB7XG4gICAgICBjb29raWVzUG9wdXAuY2xhc3NMaXN0LmFkZChcInNjcm9sbFwiKTtcbiAgICB9XG5cbiAgICBjb29raWVzUG9wdXBCZy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGNvb2tpZXNQb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbn0pO1xuXG5jb29raWVzQ2xvc2VQb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiYXV0b1wiO1xuICBjb29raWVzUG9wdXBCZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBjb29raWVzUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn0pO1xuIiwiaWYgKCF3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwMjVweClcIikubWF0Y2hlcykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBsZXQgbGFzdFNjcm9sbCA9IDA7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgaWYgKGN1cnJlbnRTY3JvbGwgPiA4MyAmJiBjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCkge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcbiAgICB9XG4gICAgbGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG4gIH0pO1xufVxuIiwiY29uc3QgYnV0dG9uTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nLWJ1dHRvblwiKTtcbmNvbnN0IGVuU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xhbmctc3ZnLS1pbWctLWVuXCIpO1xuY29uc3QgYXJTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGFuZy1zdmctLWltZy0tYXJcIik7XG5cbmJ1dHRvbkxhbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZW5TdmcuY2xhc3NMaXN0LnRvZ2dsZShcImVuQWN0aXZlXCIpO1xuICBhclN2Zy5jbGFzc0xpc3QudG9nZ2xlKFwiYXJBY3RpdmVcIik7XG59KTtcbiIsImltcG9ydCBTcGxpZGUgZnJvbSBcIkBzcGxpZGVqcy9zcGxpZGVcIjtcblxuY29uc3Qgc3BsaWRlT3B0aW9ucyA9IHtcbiAgdHlwZTogXCJsb29wXCIsXG4gIHBhZ2luYXRpb246IGZhbHNlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBsYXp5TG9hZDogXCJuZWFyYnlcIixcbiAgcGVyUGFnZTogMSxcbiAgc3BlZWQ6IDUwMCxcbiAgZ2FwOiAzMCxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGludGVydmFsOiAzMDAwLFxuICBkcmFnOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgbWVkaWFRdWVyeTogXCJtaW5cIixcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMjAwOiB7XG4gICAgICBkZXN0cm95OiB0cnVlLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBwZXJQYWdlOiAyLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBzcGxpZGUgPSBuZXcgU3BsaWRlKFwiLnNwbGlkZVwiLCBzcGxpZGVPcHRpb25zKS5tb3VudCgpO1xuIiwiY29uc3QgcG9wdXBCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2JnXCIpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuY29uc3Qgb3BlblBvcHVwQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3Blbi1wb3B1cFwiKTtcbmNvbnN0IGNsb3NlUG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXBvcHVwXCIpO1xuXG5vcGVuUG9wdXBCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IDYzMikge1xuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcInNjcm9sbFwiKTtcbiAgICB9XG5cbiAgICBwb3B1cEJnLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG59KTtcblxuY2xvc2VQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwb3B1cEJnLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCA9PT0gcG9wdXBCZykge1xuICAgIHBvcHVwQmcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcbiIsImNvbnN0IHByZWxvYWRlclJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyXCIpO1xubGV0IGRlbGF5ID0gd2luZG93LmlubmVyV2lkdGggPiAxMDI0ID8gNTAwIDogMjgwMDtcblxuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQpIHtcbiAgICAgICAgcHJlbG9hZGVyUmVmLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtNTAwJSlcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICAgIHByZWxvYWRlclJlZi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWCgwKVwiO1xuICAgICAgICBwcmVsb2FkZXJSZWYuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBwcmVsb2FkZXJSZWYuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuNXMgZWFzZVwiO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XG4gICAgfVxufSwgZGVsYXkpO1xuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0sIGRlbGF5ICsgNTAwKTtcbiIsImNvbnN0IHByb2Nlc3NMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9jZXNzX19saW5lXCIpO1xuY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2Nlc3NfX2l0ZW1cIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBwcm9jZXNzTGluZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgaWYgKHBvc2l0aW9uIDwgd2luZG93LmlubmVySGVpZ2h0ICogMC44KSB7XG4gICAgcHJvY2Vzc0xpbmUuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGRlbGF5O1xuICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZGVsYXkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPiAxMDI1ID8gMCA6IDYwMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGRlbGF5ID0gd2luZG93LmlubmVySGVpZ2h0ID4gMTAyNSA/IDE0MDAgOiAxMjAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgZGVsYXkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPiAxMDI1ID8gMTYwMCA6IDE4MDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBkZWxheSA9IHdpbmRvdy5pbm5lckhlaWdodCA+IDEwMjUgPyAyODAwIDogMjQwMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGRlbGF5ID0gMzAwMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGRlbGF5ID0gd2luZG93LmlubmVySGVpZ2h0ID4gMTAyNSA/IDQwMDAgOiA0MDAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0pO1xuICB9XG59KTtcbiIsImNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0c19faXRlbVwiKTtcblxuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGlmIChlbC5zdHlsZS56SW5kZXggPiAxKSB7XG4gICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IFwiXCI7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBlbC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXTtcbiAgICBjdXJyZW50SXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHdyYXBJdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgY3VycmVudEl0ZW0uc3R5bGUuekluZGV4ID0gMjtcbiAgfSk7XG59KTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLFxuICBvYnNlcnYgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgY29uc3QgaXRlbXNBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzX19pdGVtLmFjdGl2ZVwiKTtcbiAgICBpZiAoaXRlbXNBY3RpdmUpIHtcbiAgICAgIGl0ZW1zQWN0aXZlLnN0eWxlLnpJbmRleCA9IDM7XG4gICAgICBpdGVtc0FjdGl2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaXRlbXNBY3RpdmUuc3R5bGUuekluZGV4ID0gXCJcIjtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5vYnNlcnYub2JzZXJ2ZShib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiIsImNvbnN0IHN0YXRpc3RpY0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGF0aXN0aWNfX2l0ZW0tLXRpdGxlXCIpO1xuXG5mdW5jdGlvbiBhbmltYXRlTnVtYmVycygpIHtcbiAgc3RhdGlzdGljSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGVuZFZhbHVlID0gcGFyc2VJbnQoaXRlbS50ZXh0Q29udGVudCk7XG4gICAgbGV0IHN0YXJ0VmFsdWUgPSAwO1xuICAgIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gMTAwMDtcbiAgICBjb25zdCBzdGVwID0gKGVuZFZhbHVlIC8gYW5pbWF0aW9uRHVyYXRpb24pICogMTA7XG4gICAgbGV0IGRlbGF5ID0gd2luZG93LmlubmVyV2lkdGggPCAxMDI1ID8gMTUwMCA6IDEwMDA7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpdGVtLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcihzdGFydFZhbHVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdGFydFZhbHVlICs9IHN0ZXA7XG4gICAgICAgIGlmIChzdGFydFZhbHVlID49IGVuZFZhbHVlKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGVuZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSwgMTApO1xuICB9KTtcbn1cblxubGV0IGFuaW1hdGlvbkhhc1N0YXJ0ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgY29uc3Qgc3RhdGlzdGljU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGlzdGljXCIpO1xuICBjb25zdCBzdGF0aXN0aWNTZWN0aW9uUG9zaXRpb24gPSBzdGF0aXN0aWNTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIGlmIChzdGF0aXN0aWNTZWN0aW9uUG9zaXRpb24gPCB3aW5kb3dIZWlnaHQgJiYgIWFuaW1hdGlvbkhhc1N0YXJ0ZWQpIHtcbiAgICBjb25zdCBzdGF0aXN0aWNTZWN0aW9uQm90dG9tUG9zaXRpb24gPVxuICAgICAgc3RhdGlzdGljU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgaWYgKHN0YXRpc3RpY1NlY3Rpb25Cb3R0b21Qb3NpdGlvbiA+IDApIHtcbiAgICAgIGFuaW1hdGVOdW1iZXJzKCk7XG4gICAgICBhbmltYXRpb25IYXNTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyohXG4gKiBTcGxpZGUuanNcbiAqIFZlcnNpb24gIDogNC4xLjRcbiAqIExpY2Vuc2UgIDogTUlUXG4gKiBDb3B5cmlnaHQ6IDIwMjIgTmFvdG9zaGkgRnVqaXRhXG4gKi9cbnZhciBNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OID0gXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiO1xudmFyIENSRUFURUQgPSAxO1xudmFyIE1PVU5URUQgPSAyO1xudmFyIElETEUgPSAzO1xudmFyIE1PVklORyA9IDQ7XG52YXIgU0NST0xMSU5HID0gNTtcbnZhciBEUkFHR0lORyA9IDY7XG52YXIgREVTVFJPWUVEID0gNztcbnZhciBTVEFURVMgPSB7XG4gIENSRUFURUQ6IENSRUFURUQsXG4gIE1PVU5URUQ6IE1PVU5URUQsXG4gIElETEU6IElETEUsXG4gIE1PVklORzogTU9WSU5HLFxuICBTQ1JPTExJTkc6IFNDUk9MTElORyxcbiAgRFJBR0dJTkc6IERSQUdHSU5HLFxuICBERVNUUk9ZRUQ6IERFU1RST1lFRFxufTtcblxuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgYXJyYXkubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gc2xpY2UoYXJyYXlMaWtlLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIHN0YXJ0LCBlbmQpO1xufVxuXG5mdW5jdGlvbiBhcHBseShmdW5jKSB7XG4gIHJldHVybiBmdW5jLmJpbmQuYXBwbHkoZnVuYywgW251bGxdLmNvbmNhdChzbGljZShhcmd1bWVudHMsIDEpKSk7XG59XG5cbnZhciBuZXh0VGljayA9IHNldFRpbWVvdXQ7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiByYWYoZnVuYykge1xuICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2YodHlwZSwgc3ViamVjdCkge1xuICByZXR1cm4gdHlwZW9mIHN1YmplY3QgPT09IHR5cGU7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuICFpc051bGwoc3ViamVjdCkgJiYgdHlwZU9mKFwib2JqZWN0XCIsIHN1YmplY3QpO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgaXNGdW5jdGlvbiA9IGFwcGx5KHR5cGVPZiwgXCJmdW5jdGlvblwiKTtcbnZhciBpc1N0cmluZyA9IGFwcGx5KHR5cGVPZiwgXCJzdHJpbmdcIik7XG52YXIgaXNVbmRlZmluZWQgPSBhcHBseSh0eXBlT2YsIFwidW5kZWZpbmVkXCIpO1xuXG5mdW5jdGlvbiBpc051bGwoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChzdWJqZWN0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHN1YmplY3QgaW5zdGFuY2VvZiAoc3ViamVjdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuSFRNTEVsZW1lbnQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2godmFsdWVzLCBpdGVyYXRlZSkge1xuICB0b0FycmF5KHZhbHVlcykuZm9yRWFjaChpdGVyYXRlZSk7XG59XG5cbmZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuZnVuY3Rpb24gcHVzaChhcnJheSwgaXRlbXMpIHtcbiAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgdG9BcnJheShpdGVtcykpO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsbSwgY2xhc3NlcywgYWRkKSB7XG4gIGlmIChlbG0pIHtcbiAgICBmb3JFYWNoKGNsYXNzZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBlbG0uY2xhc3NMaXN0W2FkZCA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXShuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgdG9nZ2xlQ2xhc3MoZWxtLCBpc1N0cmluZyhjbGFzc2VzKSA/IGNsYXNzZXMuc3BsaXQoXCIgXCIpIDogY2xhc3NlcywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkcmVuKSB7XG4gIGZvckVhY2goY2hpbGRyZW4sIHBhcmVudC5hcHBlbmRDaGlsZC5iaW5kKHBhcmVudCkpO1xufVxuXG5mdW5jdGlvbiBiZWZvcmUobm9kZXMsIHJlZikge1xuICBmb3JFYWNoKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBwYXJlbnQgPSAocmVmIHx8IG5vZGUpLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyhlbG0sIHNlbGVjdG9yKSB7XG4gIHJldHVybiBpc0hUTUxFbGVtZW50KGVsbSkgJiYgKGVsbVtcIm1zTWF0Y2hlc1NlbGVjdG9yXCJdIHx8IGVsbS5tYXRjaGVzKS5jYWxsKGVsbSwgc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHZhciBjaGlsZHJlbjIgPSBwYXJlbnQgPyBzbGljZShwYXJlbnQuY2hpbGRyZW4pIDogW107XG4gIHJldHVybiBzZWxlY3RvciA/IGNoaWxkcmVuMi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKTtcbiAgfSkgOiBjaGlsZHJlbjI7XG59XG5cbmZ1bmN0aW9uIGNoaWxkKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID8gY2hpbGRyZW4ocGFyZW50LCBzZWxlY3RvcilbMF0gOiBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbnZhciBvd25LZXlzID0gT2JqZWN0LmtleXM7XG5cbmZ1bmN0aW9uIGZvck93bihvYmplY3QsIGl0ZXJhdGVlLCByaWdodCkge1xuICBpZiAob2JqZWN0KSB7XG4gICAgKHJpZ2h0ID8gb3duS2V5cyhvYmplY3QpLnJldmVyc2UoKSA6IG93bktleXMob2JqZWN0KSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBrZXkgIT09IFwiX19wcm90b19fXCIgJiYgaXRlcmF0ZWUob2JqZWN0W2tleV0sIGtleSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ24ob2JqZWN0KSB7XG4gIHNsaWNlKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgZm9yT3duKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBtZXJnZShvYmplY3QpIHtcbiAgc2xpY2UoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBmb3JPd24oc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWUuc2xpY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gbWVyZ2Uoe30sIGlzT2JqZWN0KG9iamVjdFtrZXldKSA/IG9iamVjdFtrZXldIDoge30sIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBvbWl0KG9iamVjdCwga2V5cykge1xuICBmb3JFYWNoKGtleXMgfHwgb3duS2V5cyhvYmplY3QpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsbXMsIGF0dHJzKSB7XG4gIGZvckVhY2goZWxtcywgZnVuY3Rpb24gKGVsbSkge1xuICAgIGZvckVhY2goYXR0cnMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICBlbG0gJiYgZWxtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShlbG1zLCBhdHRycywgdmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KGF0dHJzKSkge1xuICAgIGZvck93bihhdHRycywgZnVuY3Rpb24gKHZhbHVlMiwgbmFtZSkge1xuICAgICAgc2V0QXR0cmlidXRlKGVsbXMsIG5hbWUsIHZhbHVlMik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChlbG1zLCBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICBpc051bGwodmFsdWUpIHx8IHZhbHVlID09PSBcIlwiID8gcmVtb3ZlQXR0cmlidXRlKGVsbSwgYXR0cnMpIDogZWxtLnNldEF0dHJpYnV0ZShhdHRycywgU3RyaW5nKHZhbHVlKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMsIHBhcmVudCkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gIGlmIChhdHRycykge1xuICAgIGlzU3RyaW5nKGF0dHJzKSA/IGFkZENsYXNzKGVsbSwgYXR0cnMpIDogc2V0QXR0cmlidXRlKGVsbSwgYXR0cnMpO1xuICB9XG5cbiAgcGFyZW50ICYmIGFwcGVuZChwYXJlbnQsIGVsbSk7XG4gIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsbSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsbSlbcHJvcF07XG4gIH1cblxuICBpZiAoIWlzTnVsbCh2YWx1ZSkpIHtcbiAgICBlbG0uc3R5bGVbcHJvcF0gPSBcIlwiICsgdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheShlbG0sIGRpc3BsYXkyKSB7XG4gIHN0eWxlKGVsbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkyKTtcbn1cblxuZnVuY3Rpb24gZm9jdXMoZWxtKSB7XG4gIGVsbVtcInNldEFjdGl2ZVwiXSAmJiBlbG1bXCJzZXRBY3RpdmVcIl0oKSB8fCBlbG0uZm9jdXMoe1xuICAgIHByZXZlbnRTY3JvbGw6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbG0sIGF0dHIpIHtcbiAgcmV0dXJuIGVsbS5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbG0gJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZWN0KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobm9kZXMpIHtcbiAgZm9yRWFjaChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xuICByZXR1cm4gY2hpbGQobmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKS5ib2R5KTtcbn1cblxuZnVuY3Rpb24gcHJldmVudChlLCBzdG9wUHJvcGFnYXRpb24pIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChzdG9wUHJvcGFnYXRpb24pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnkocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBbGwocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPyBzbGljZShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpIDogW107XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdGltZU9mKGUpIHtcbiAgcmV0dXJuIGUudGltZVN0YW1wO1xufVxuXG5mdW5jdGlvbiB1bml0KHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID8gdmFsdWUgKyBcInB4XCIgOiBcIlwiO1xufVxuXG52YXIgUFJPSkVDVF9DT0RFID0gXCJzcGxpZGVcIjtcbnZhciBEQVRBX0FUVFJJQlVURSA9IFwiZGF0YS1cIiArIFBST0pFQ1RfQ09ERTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltcIiArIFBST0pFQ1RfQ09ERSArIFwiXSBcIiArIChtZXNzYWdlIHx8IFwiXCIpKTtcbiAgfVxufVxuXG52YXIgbWluID0gTWF0aC5taW4sXG4gICAgbWF4ID0gTWF0aC5tYXgsXG4gICAgZmxvb3IgPSBNYXRoLmZsb29yLFxuICAgIGNlaWwgPSBNYXRoLmNlaWwsXG4gICAgYWJzID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIGFwcHJveGltYXRlbHlFcXVhbCh4LCB5LCBlcHNpbG9uKSB7XG4gIHJldHVybiBhYnMoeCAtIHkpIDwgZXBzaWxvbjtcbn1cblxuZnVuY3Rpb24gYmV0d2VlbihudW1iZXIsIHgsIHksIGV4Y2x1c2l2ZSkge1xuICB2YXIgbWluaW11bSA9IG1pbih4LCB5KTtcbiAgdmFyIG1heGltdW0gPSBtYXgoeCwgeSk7XG4gIHJldHVybiBleGNsdXNpdmUgPyBtaW5pbXVtIDwgbnVtYmVyICYmIG51bWJlciA8IG1heGltdW0gOiBtaW5pbXVtIDw9IG51bWJlciAmJiBudW1iZXIgPD0gbWF4aW11bTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCB4LCB5KSB7XG4gIHZhciBtaW5pbXVtID0gbWluKHgsIHkpO1xuICB2YXIgbWF4aW11bSA9IG1heCh4LCB5KTtcbiAgcmV0dXJuIG1pbihtYXgobWluaW11bSwgbnVtYmVyKSwgbWF4aW11bSk7XG59XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKyh4ID4gMCkgLSArKHggPCAwKTtcbn1cblxuZnVuY3Rpb24gY2FtZWxUb0tlYmFiKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cmluZywgcmVwbGFjZW1lbnRzKSB7XG4gIGZvckVhY2gocmVwbGFjZW1lbnRzLCBmdW5jdGlvbiAocmVwbGFjZW1lbnQpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShcIiVzXCIsIFwiXCIgKyByZXBsYWNlbWVudCk7XG4gIH0pO1xuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgPCAxMCA/IFwiMFwiICsgbnVtYmVyIDogXCJcIiArIG51bWJlcjtcbn1cblxudmFyIGlkcyA9IHt9O1xuXG5mdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgcmV0dXJuIFwiXCIgKyBwcmVmaXggKyBwYWQoaWRzW3ByZWZpeF0gPSAoaWRzW3ByZWZpeF0gfHwgMCkgKyAxKTtcbn1cblxuZnVuY3Rpb24gRXZlbnRCaW5kZXIoKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBiaW5kKHRhcmdldHMsIGV2ZW50cywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlKSB7XG4gICAgICB2YXIgaXNFdmVudFRhcmdldCA9IChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB0YXJnZXQpO1xuICAgICAgdmFyIHJlbW92ZXIgPSBpc0V2ZW50VGFyZ2V0ID8gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0YXJnZXQsIGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykgOiB0YXJnZXRbXCJyZW1vdmVMaXN0ZW5lclwiXS5iaW5kKHRhcmdldCwgY2FsbGJhY2spO1xuICAgICAgaXNFdmVudFRhcmdldCA/IHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykgOiB0YXJnZXRbXCJhZGRMaXN0ZW5lclwiXShjYWxsYmFjayk7XG4gICAgICBsaXN0ZW5lcnMucHVzaChbdGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlLCBjYWxsYmFjaywgcmVtb3Zlcl0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kKHRhcmdldHMsIGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlKSB7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXJbMF0gPT09IHRhcmdldCAmJiBsaXN0ZW5lclsxXSA9PT0gZXZlbnQgJiYgbGlzdGVuZXJbMl0gPT09IG5hbWVzcGFjZSAmJiAoIWNhbGxiYWNrIHx8IGxpc3RlbmVyWzNdID09PSBjYWxsYmFjaykpIHtcbiAgICAgICAgICBsaXN0ZW5lcls0XSgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwYXRjaCh0YXJnZXQsIHR5cGUsIGRldGFpbCkge1xuICAgIHZhciBlO1xuICAgIHZhciBidWJibGVzID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZSA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IGJ1YmJsZXMsXG4gICAgICAgIGRldGFpbDogZGV0YWlsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBmYWxzZSwgZGV0YWlsKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvckVhY2hFdmVudCh0YXJnZXRzLCBldmVudHMsIGl0ZXJhdGVlKSB7XG4gICAgZm9yRWFjaCh0YXJnZXRzLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgJiYgZm9yRWFjaChldmVudHMsIGZ1bmN0aW9uIChldmVudHMyKSB7XG4gICAgICAgIGV2ZW50czIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TlMpIHtcbiAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBldmVudE5TLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBpdGVyYXRlZSh0YXJnZXQsIGZyYWdtZW50WzBdLCBmcmFnbWVudFsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkYXRhWzRdKCk7XG4gICAgfSk7XG4gICAgZW1wdHkobGlzdGVuZXJzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmluZDogYmluZCxcbiAgICB1bmJpbmQ6IHVuYmluZCxcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG52YXIgRVZFTlRfTU9VTlRFRCA9IFwibW91bnRlZFwiO1xudmFyIEVWRU5UX1JFQURZID0gXCJyZWFkeVwiO1xudmFyIEVWRU5UX01PVkUgPSBcIm1vdmVcIjtcbnZhciBFVkVOVF9NT1ZFRCA9IFwibW92ZWRcIjtcbnZhciBFVkVOVF9DTElDSyA9IFwiY2xpY2tcIjtcbnZhciBFVkVOVF9BQ1RJVkUgPSBcImFjdGl2ZVwiO1xudmFyIEVWRU5UX0lOQUNUSVZFID0gXCJpbmFjdGl2ZVwiO1xudmFyIEVWRU5UX1ZJU0lCTEUgPSBcInZpc2libGVcIjtcbnZhciBFVkVOVF9ISURERU4gPSBcImhpZGRlblwiO1xudmFyIEVWRU5UX1JFRlJFU0ggPSBcInJlZnJlc2hcIjtcbnZhciBFVkVOVF9VUERBVEVEID0gXCJ1cGRhdGVkXCI7XG52YXIgRVZFTlRfUkVTSVpFID0gXCJyZXNpemVcIjtcbnZhciBFVkVOVF9SRVNJWkVEID0gXCJyZXNpemVkXCI7XG52YXIgRVZFTlRfRFJBRyA9IFwiZHJhZ1wiO1xudmFyIEVWRU5UX0RSQUdHSU5HID0gXCJkcmFnZ2luZ1wiO1xudmFyIEVWRU5UX0RSQUdHRUQgPSBcImRyYWdnZWRcIjtcbnZhciBFVkVOVF9TQ1JPTEwgPSBcInNjcm9sbFwiO1xudmFyIEVWRU5UX1NDUk9MTEVEID0gXCJzY3JvbGxlZFwiO1xudmFyIEVWRU5UX09WRVJGTE9XID0gXCJvdmVyZmxvd1wiO1xudmFyIEVWRU5UX0RFU1RST1kgPSBcImRlc3Ryb3lcIjtcbnZhciBFVkVOVF9BUlJPV1NfTU9VTlRFRCA9IFwiYXJyb3dzOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9BUlJPV1NfVVBEQVRFRCA9IFwiYXJyb3dzOnVwZGF0ZWRcIjtcbnZhciBFVkVOVF9QQUdJTkFUSU9OX01PVU5URUQgPSBcInBhZ2luYXRpb246bW91bnRlZFwiO1xudmFyIEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCA9IFwicGFnaW5hdGlvbjp1cGRhdGVkXCI7XG52YXIgRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVEID0gXCJuYXZpZ2F0aW9uOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9BVVRPUExBWV9QTEFZID0gXCJhdXRvcGxheTpwbGF5XCI7XG52YXIgRVZFTlRfQVVUT1BMQVlfUExBWUlORyA9IFwiYXV0b3BsYXk6cGxheWluZ1wiO1xudmFyIEVWRU5UX0FVVE9QTEFZX1BBVVNFID0gXCJhdXRvcGxheTpwYXVzZVwiO1xudmFyIEVWRU5UX0xBWllMT0FEX0xPQURFRCA9IFwibGF6eWxvYWQ6bG9hZGVkXCI7XG52YXIgRVZFTlRfU0xJREVfS0VZRE9XTiA9IFwic2tcIjtcbnZhciBFVkVOVF9TSElGVEVEID0gXCJzaFwiO1xudmFyIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEID0gXCJlaVwiO1xuXG5mdW5jdGlvbiBFdmVudEludGVyZmFjZShTcGxpZGUyKSB7XG4gIHZhciBidXMgPSBTcGxpZGUyID8gU3BsaWRlMi5ldmVudC5idXMgOiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciBiaW5kZXIgPSBFdmVudEJpbmRlcigpO1xuXG4gIGZ1bmN0aW9uIG9uKGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICBiaW5kZXIuYmluZChidXMsIHRvQXJyYXkoZXZlbnRzKS5qb2luKFwiIFwiKSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBpc0FycmF5KGUuZGV0YWlsKSA/IGUuZGV0YWlsIDogW10pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIGJpbmRlci5kaXNwYXRjaChidXMsIGV2ZW50LCBzbGljZShhcmd1bWVudHMsIDEpKTtcbiAgfVxuXG4gIGlmIChTcGxpZGUyKSB7XG4gICAgU3BsaWRlMi5ldmVudC5vbihFVkVOVF9ERVNUUk9ZLCBiaW5kZXIuZGVzdHJveSk7XG4gIH1cblxuICByZXR1cm4gYXNzaWduKGJpbmRlciwge1xuICAgIGJ1czogYnVzLFxuICAgIG9uOiBvbixcbiAgICBvZmY6IGFwcGx5KGJpbmRlci51bmJpbmQsIGJ1cyksXG4gICAgZW1pdDogZW1pdFxuICB9KTtcbn1cblxuZnVuY3Rpb24gUmVxdWVzdEludGVydmFsKGludGVydmFsLCBvbkludGVydmFsLCBvblVwZGF0ZSwgbGltaXQpIHtcbiAgdmFyIG5vdyA9IERhdGUubm93O1xuICB2YXIgc3RhcnRUaW1lO1xuICB2YXIgcmF0ZSA9IDA7XG4gIHZhciBpZDtcbiAgdmFyIHBhdXNlZCA9IHRydWU7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghcGF1c2VkKSB7XG4gICAgICByYXRlID0gaW50ZXJ2YWwgPyBtaW4oKG5vdygpIC0gc3RhcnRUaW1lKSAvIGludGVydmFsLCAxKSA6IDE7XG4gICAgICBvblVwZGF0ZSAmJiBvblVwZGF0ZShyYXRlKTtcblxuICAgICAgaWYgKHJhdGUgPj0gMSkge1xuICAgICAgICBvbkludGVydmFsKCk7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAgIGlmIChsaW1pdCAmJiArK2NvdW50ID49IGxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWQgPSByYWYodXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChyZXN1bWUpIHtcbiAgICByZXN1bWUgfHwgY2FuY2VsKCk7XG4gICAgc3RhcnRUaW1lID0gbm93KCkgLSAocmVzdW1lID8gcmF0ZSAqIGludGVydmFsIDogMCk7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgaWQgPSByYWYodXBkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIHBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZXdpbmQoKSB7XG4gICAgc3RhcnRUaW1lID0gbm93KCk7XG4gICAgcmF0ZSA9IDA7XG5cbiAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgIG9uVXBkYXRlKHJhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZCAmJiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gICAgcmF0ZSA9IDA7XG4gICAgaWQgPSAwO1xuICAgIHBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXQodGltZSkge1xuICAgIGludGVydmFsID0gdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGF1c2VkKCkge1xuICAgIHJldHVybiBwYXVzZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICByZXdpbmQ6IHJld2luZCxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgc2V0OiBzZXQsXG4gICAgaXNQYXVzZWQ6IGlzUGF1c2VkXG4gIH07XG59XG5cbmZ1bmN0aW9uIFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgc3RhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzKHN0YXRlcykge1xuICAgIHJldHVybiBpbmNsdWRlcyh0b0FycmF5KHN0YXRlcyksIHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0OiBzZXQsXG4gICAgaXM6IGlzXG4gIH07XG59XG5cbmZ1bmN0aW9uIFRocm90dGxlKGZ1bmMsIGR1cmF0aW9uKSB7XG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiB8fCAwLCBmdW5jLCBudWxsLCAxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpbnRlcnZhbC5pc1BhdXNlZCgpICYmIGludGVydmFsLnN0YXJ0KCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1lZGlhKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBzdGF0ZSA9IFNwbGlkZTIuc3RhdGU7XG4gIHZhciBicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMgfHwge307XG4gIHZhciByZWR1Y2VkTW90aW9uID0gb3B0aW9ucy5yZWR1Y2VkTW90aW9uIHx8IHt9O1xuICB2YXIgYmluZGVyID0gRXZlbnRCaW5kZXIoKTtcbiAgdmFyIHF1ZXJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB2YXIgaXNNaW4gPSBvcHRpb25zLm1lZGlhUXVlcnkgPT09IFwibWluXCI7XG4gICAgb3duS2V5cyhicmVha3BvaW50cykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgcmV0dXJuIGlzTWluID8gK24gLSArbSA6ICttIC0gK247XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZWdpc3RlcihicmVha3BvaW50c1trZXldLCBcIihcIiArIChpc01pbiA/IFwibWluXCIgOiBcIm1heFwiKSArIFwiLXdpZHRoOlwiICsga2V5ICsgXCJweClcIik7XG4gICAgfSk7XG4gICAgcmVnaXN0ZXIocmVkdWNlZE1vdGlvbiwgTUVESUFfUFJFRkVSU19SRURVQ0VEX01PVElPTik7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICBpZiAoY29tcGxldGVseSkge1xuICAgICAgYmluZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcihvcHRpb25zMiwgcXVlcnkpIHtcbiAgICB2YXIgcXVlcnlMaXN0ID0gbWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgYmluZGVyLmJpbmQocXVlcnlMaXN0LCBcImNoYW5nZVwiLCB1cGRhdGUpO1xuICAgIHF1ZXJpZXMucHVzaChbb3B0aW9uczIsIHF1ZXJ5TGlzdF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBkZXN0cm95ZWQgPSBzdGF0ZS5pcyhERVNUUk9ZRUQpO1xuICAgIHZhciBkaXJlY3Rpb24gPSBvcHRpb25zLmRpcmVjdGlvbjtcbiAgICB2YXIgbWVyZ2VkID0gcXVlcmllcy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZDIsIGVudHJ5KSB7XG4gICAgICByZXR1cm4gbWVyZ2UobWVyZ2VkMiwgZW50cnlbMV0ubWF0Y2hlcyA/IGVudHJ5WzBdIDoge30pO1xuICAgIH0sIHt9KTtcbiAgICBvbWl0KG9wdGlvbnMpO1xuICAgIHNldChtZXJnZWQpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVzdHJveSkge1xuICAgICAgU3BsaWRlMi5kZXN0cm95KG9wdGlvbnMuZGVzdHJveSA9PT0gXCJjb21wbGV0ZWx5XCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzdHJveWVkKSB7XG4gICAgICBkZXN0cm95KHRydWUpO1xuICAgICAgU3BsaWRlMi5tb3VudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gIT09IG9wdGlvbnMuZGlyZWN0aW9uICYmIFNwbGlkZTIucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZShlbmFibGUpIHtcbiAgICBpZiAobWF0Y2hNZWRpYShNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OKS5tYXRjaGVzKSB7XG4gICAgICBlbmFibGUgPyBtZXJnZShvcHRpb25zLCByZWR1Y2VkTW90aW9uKSA6IG9taXQob3B0aW9ucywgb3duS2V5cyhyZWR1Y2VkTW90aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9wdHMsIGJhc2UsIG5vdGlmeSkge1xuICAgIG1lcmdlKG9wdGlvbnMsIG9wdHMpO1xuICAgIGJhc2UgJiYgbWVyZ2UoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9wdGlvbnMpLCBvcHRzKTtcblxuICAgIGlmIChub3RpZnkgfHwgIXN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICBTcGxpZGUyLmVtaXQoRVZFTlRfVVBEQVRFRCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICBzZXQ6IHNldFxuICB9O1xufVxuXG52YXIgQVJST1cgPSBcIkFycm93XCI7XG52YXIgQVJST1dfTEVGVCA9IEFSUk9XICsgXCJMZWZ0XCI7XG52YXIgQVJST1dfUklHSFQgPSBBUlJPVyArIFwiUmlnaHRcIjtcbnZhciBBUlJPV19VUCA9IEFSUk9XICsgXCJVcFwiO1xudmFyIEFSUk9XX0RPV04gPSBBUlJPVyArIFwiRG93blwiO1xudmFyIExUUiA9IFwibHRyXCI7XG52YXIgUlRMID0gXCJydGxcIjtcbnZhciBUVEIgPSBcInR0YlwiO1xudmFyIE9SSUVOVEFUSU9OX01BUCA9IHtcbiAgd2lkdGg6IFtcImhlaWdodFwiXSxcbiAgbGVmdDogW1widG9wXCIsIFwicmlnaHRcIl0sXG4gIHJpZ2h0OiBbXCJib3R0b21cIiwgXCJsZWZ0XCJdLFxuICB4OiBbXCJ5XCJdLFxuICBYOiBbXCJZXCJdLFxuICBZOiBbXCJYXCJdLFxuICBBcnJvd0xlZnQ6IFtBUlJPV19VUCwgQVJST1dfUklHSFRdLFxuICBBcnJvd1JpZ2h0OiBbQVJST1dfRE9XTiwgQVJST1dfTEVGVF1cbn07XG5cbmZ1bmN0aW9uIERpcmVjdGlvbihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBmdW5jdGlvbiByZXNvbHZlKHByb3AsIGF4aXNPbmx5LCBkaXJlY3Rpb24pIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgb3B0aW9ucy5kaXJlY3Rpb247XG4gICAgdmFyIGluZGV4ID0gZGlyZWN0aW9uID09PSBSVEwgJiYgIWF4aXNPbmx5ID8gMSA6IGRpcmVjdGlvbiA9PT0gVFRCID8gMCA6IC0xO1xuICAgIHJldHVybiBPUklFTlRBVElPTl9NQVBbcHJvcF0gJiYgT1JJRU5UQVRJT05fTUFQW3Byb3BdW2luZGV4XSB8fCBwcm9wLnJlcGxhY2UoL3dpZHRofGxlZnR8cmlnaHQvaSwgZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgIHZhciByZXBsYWNlbWVudCA9IE9SSUVOVEFUSU9OX01BUFttYXRjaC50b0xvd2VyQ2FzZSgpXVtpbmRleF0gfHwgbWF0Y2g7XG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IHJlcGxhY2VtZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVwbGFjZW1lbnQuc2xpY2UoMSkgOiByZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yaWVudCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAqIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMID8gMSA6IC0xKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBvcmllbnQ6IG9yaWVudFxuICB9O1xufVxuXG52YXIgUk9MRSA9IFwicm9sZVwiO1xudmFyIFRBQl9JTkRFWCA9IFwidGFiaW5kZXhcIjtcbnZhciBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbnZhciBBUklBX1BSRUZJWCA9IFwiYXJpYS1cIjtcbnZhciBBUklBX0NPTlRST0xTID0gQVJJQV9QUkVGSVggKyBcImNvbnRyb2xzXCI7XG52YXIgQVJJQV9DVVJSRU5UID0gQVJJQV9QUkVGSVggKyBcImN1cnJlbnRcIjtcbnZhciBBUklBX1NFTEVDVEVEID0gQVJJQV9QUkVGSVggKyBcInNlbGVjdGVkXCI7XG52YXIgQVJJQV9MQUJFTCA9IEFSSUFfUFJFRklYICsgXCJsYWJlbFwiO1xudmFyIEFSSUFfTEFCRUxMRURCWSA9IEFSSUFfUFJFRklYICsgXCJsYWJlbGxlZGJ5XCI7XG52YXIgQVJJQV9ISURERU4gPSBBUklBX1BSRUZJWCArIFwiaGlkZGVuXCI7XG52YXIgQVJJQV9PUklFTlRBVElPTiA9IEFSSUFfUFJFRklYICsgXCJvcmllbnRhdGlvblwiO1xudmFyIEFSSUFfUk9MRURFU0NSSVBUSU9OID0gQVJJQV9QUkVGSVggKyBcInJvbGVkZXNjcmlwdGlvblwiO1xudmFyIEFSSUFfTElWRSA9IEFSSUFfUFJFRklYICsgXCJsaXZlXCI7XG52YXIgQVJJQV9CVVNZID0gQVJJQV9QUkVGSVggKyBcImJ1c3lcIjtcbnZhciBBUklBX0FUT01JQyA9IEFSSUFfUFJFRklYICsgXCJhdG9taWNcIjtcbnZhciBBTExfQVRUUklCVVRFUyA9IFtST0xFLCBUQUJfSU5ERVgsIERJU0FCTEVELCBBUklBX0NPTlRST0xTLCBBUklBX0NVUlJFTlQsIEFSSUFfTEFCRUwsIEFSSUFfTEFCRUxMRURCWSwgQVJJQV9ISURERU4sIEFSSUFfT1JJRU5UQVRJT04sIEFSSUFfUk9MRURFU0NSSVBUSU9OXTtcbnZhciBDTEFTU19QUkVGSVggPSBQUk9KRUNUX0NPREUgKyBcIl9fXCI7XG52YXIgU1RBVFVTX0NMQVNTX1BSRUZJWCA9IFwiaXMtXCI7XG52YXIgQ0xBU1NfUk9PVCA9IFBST0pFQ1RfQ09ERTtcbnZhciBDTEFTU19UUkFDSyA9IENMQVNTX1BSRUZJWCArIFwidHJhY2tcIjtcbnZhciBDTEFTU19MSVNUID0gQ0xBU1NfUFJFRklYICsgXCJsaXN0XCI7XG52YXIgQ0xBU1NfU0xJREUgPSBDTEFTU19QUkVGSVggKyBcInNsaWRlXCI7XG52YXIgQ0xBU1NfQ0xPTkUgPSBDTEFTU19TTElERSArIFwiLS1jbG9uZVwiO1xudmFyIENMQVNTX0NPTlRBSU5FUiA9IENMQVNTX1NMSURFICsgXCJfX2NvbnRhaW5lclwiO1xudmFyIENMQVNTX0FSUk9XUyA9IENMQVNTX1BSRUZJWCArIFwiYXJyb3dzXCI7XG52YXIgQ0xBU1NfQVJST1cgPSBDTEFTU19QUkVGSVggKyBcImFycm93XCI7XG52YXIgQ0xBU1NfQVJST1dfUFJFViA9IENMQVNTX0FSUk9XICsgXCItLXByZXZcIjtcbnZhciBDTEFTU19BUlJPV19ORVhUID0gQ0xBU1NfQVJST1cgKyBcIi0tbmV4dFwiO1xudmFyIENMQVNTX1BBR0lOQVRJT04gPSBDTEFTU19QUkVGSVggKyBcInBhZ2luYXRpb25cIjtcbnZhciBDTEFTU19QQUdJTkFUSU9OX1BBR0UgPSBDTEFTU19QQUdJTkFUSU9OICsgXCJfX3BhZ2VcIjtcbnZhciBDTEFTU19QUk9HUkVTUyA9IENMQVNTX1BSRUZJWCArIFwicHJvZ3Jlc3NcIjtcbnZhciBDTEFTU19QUk9HUkVTU19CQVIgPSBDTEFTU19QUk9HUkVTUyArIFwiX19iYXJcIjtcbnZhciBDTEFTU19UT0dHTEUgPSBDTEFTU19QUkVGSVggKyBcInRvZ2dsZVwiO1xudmFyIENMQVNTX1RPR0dMRV9QTEFZID0gQ0xBU1NfVE9HR0xFICsgXCJfX3BsYXlcIjtcbnZhciBDTEFTU19UT0dHTEVfUEFVU0UgPSBDTEFTU19UT0dHTEUgKyBcIl9fcGF1c2VcIjtcbnZhciBDTEFTU19TUElOTkVSID0gQ0xBU1NfUFJFRklYICsgXCJzcGlubmVyXCI7XG52YXIgQ0xBU1NfU1IgPSBDTEFTU19QUkVGSVggKyBcInNyXCI7XG52YXIgQ0xBU1NfSU5JVElBTElaRUQgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJpbml0aWFsaXplZFwiO1xudmFyIENMQVNTX0FDVElWRSA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcImFjdGl2ZVwiO1xudmFyIENMQVNTX1BSRVYgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJwcmV2XCI7XG52YXIgQ0xBU1NfTkVYVCA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcIm5leHRcIjtcbnZhciBDTEFTU19WSVNJQkxFID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwidmlzaWJsZVwiO1xudmFyIENMQVNTX0xPQURJTkcgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJsb2FkaW5nXCI7XG52YXIgQ0xBU1NfRk9DVVNfSU4gPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJmb2N1cy1pblwiO1xudmFyIENMQVNTX09WRVJGTE9XID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwib3ZlcmZsb3dcIjtcbnZhciBTVEFUVVNfQ0xBU1NFUyA9IFtDTEFTU19BQ1RJVkUsIENMQVNTX1ZJU0lCTEUsIENMQVNTX1BSRVYsIENMQVNTX05FWFQsIENMQVNTX0xPQURJTkcsIENMQVNTX0ZPQ1VTX0lOLCBDTEFTU19PVkVSRkxPV107XG52YXIgQ0xBU1NFUyA9IHtcbiAgc2xpZGU6IENMQVNTX1NMSURFLFxuICBjbG9uZTogQ0xBU1NfQ0xPTkUsXG4gIGFycm93czogQ0xBU1NfQVJST1dTLFxuICBhcnJvdzogQ0xBU1NfQVJST1csXG4gIHByZXY6IENMQVNTX0FSUk9XX1BSRVYsXG4gIG5leHQ6IENMQVNTX0FSUk9XX05FWFQsXG4gIHBhZ2luYXRpb246IENMQVNTX1BBR0lOQVRJT04sXG4gIHBhZ2U6IENMQVNTX1BBR0lOQVRJT05fUEFHRSxcbiAgc3Bpbm5lcjogQ0xBU1NfU1BJTk5FUlxufTtcblxuZnVuY3Rpb24gY2xvc2VzdChmcm9tLCBzZWxlY3Rvcikge1xuICBpZiAoaXNGdW5jdGlvbihmcm9tLmNsb3Nlc3QpKSB7XG4gICAgcmV0dXJuIGZyb20uY2xvc2VzdChzZWxlY3Rvcik7XG4gIH1cblxuICB2YXIgZWxtID0gZnJvbTtcblxuICB3aGlsZSAoZWxtICYmIGVsbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChtYXRjaGVzKGVsbSwgc2VsZWN0b3IpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbG0gPSBlbG0ucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbG07XG59XG5cbnZhciBGUklDVElPTiA9IDU7XG52YXIgTE9HX0lOVEVSVkFMID0gMjAwO1xudmFyIFBPSU5URVJfRE9XTl9FVkVOVFMgPSBcInRvdWNoc3RhcnQgbW91c2Vkb3duXCI7XG52YXIgUE9JTlRFUl9NT1ZFX0VWRU5UUyA9IFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiO1xudmFyIFBPSU5URVJfVVBfRVZFTlRTID0gXCJ0b3VjaGVuZCB0b3VjaGNhbmNlbCBtb3VzZXVwIGNsaWNrXCI7XG5cbmZ1bmN0aW9uIEVsZW1lbnRzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlLm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZS5iaW5kO1xuXG4gIHZhciByb290ID0gU3BsaWRlMi5yb290O1xuICB2YXIgaTE4biA9IG9wdGlvbnMuaTE4bjtcbiAgdmFyIGVsZW1lbnRzID0ge307XG4gIHZhciBzbGlkZXMgPSBbXTtcbiAgdmFyIHJvb3RDbGFzc2VzID0gW107XG4gIHZhciB0cmFja0NsYXNzZXMgPSBbXTtcbiAgdmFyIHRyYWNrO1xuICB2YXIgbGlzdDtcbiAgdmFyIGlzVXNpbmdLZXk7XG5cbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY29sbGVjdCgpO1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIHNldHVwKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCB1cGRhdGUpO1xuICAgIGJpbmQoZG9jdW1lbnQsIFBPSU5URVJfRE9XTl9FVkVOVFMgKyBcIiBrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpc1VzaW5nS2V5ID0gZS50eXBlID09PSBcImtleWRvd25cIjtcbiAgICB9LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSk7XG4gICAgYmluZChyb290LCBcImZvY3VzaW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlQ2xhc3Mocm9vdCwgQ0xBU1NfRk9DVVNfSU4sICEhaXNVc2luZ0tleSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICB2YXIgYXR0cnMgPSBBTExfQVRUUklCVVRFUy5jb25jYXQoXCJzdHlsZVwiKTtcbiAgICBlbXB0eShzbGlkZXMpO1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICByZW1vdmVDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoW3RyYWNrLCBsaXN0XSwgYXR0cnMpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShyb290LCBjb21wbGV0ZWx5ID8gYXR0cnMgOiBbXCJzdHlsZVwiLCBBUklBX1JPTEVERVNDUklQVElPTl0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICByZW1vdmVDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICByb290Q2xhc3NlcyA9IGdldENsYXNzZXMoQ0xBU1NfUk9PVCk7XG4gICAgdHJhY2tDbGFzc2VzID0gZ2V0Q2xhc3NlcyhDTEFTU19UUkFDSyk7XG4gICAgYWRkQ2xhc3Mocm9vdCwgcm9vdENsYXNzZXMpO1xuICAgIGFkZENsYXNzKHRyYWNrLCB0cmFja0NsYXNzZXMpO1xuICAgIHNldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMLCBvcHRpb25zLmxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTExFREJZLCBvcHRpb25zLmxhYmVsbGVkYnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICB0cmFjayA9IGZpbmQoXCIuXCIgKyBDTEFTU19UUkFDSyk7XG4gICAgbGlzdCA9IGNoaWxkKHRyYWNrLCBcIi5cIiArIENMQVNTX0xJU1QpO1xuICAgIGFzc2VydCh0cmFjayAmJiBsaXN0LCBcIkEgdHJhY2svbGlzdCBlbGVtZW50IGlzIG1pc3NpbmcuXCIpO1xuICAgIHB1c2goc2xpZGVzLCBjaGlsZHJlbihsaXN0LCBcIi5cIiArIENMQVNTX1NMSURFICsgXCI6bm90KC5cIiArIENMQVNTX0NMT05FICsgXCIpXCIpKTtcbiAgICBmb3JPd24oe1xuICAgICAgYXJyb3dzOiBDTEFTU19BUlJPV1MsXG4gICAgICBwYWdpbmF0aW9uOiBDTEFTU19QQUdJTkFUSU9OLFxuICAgICAgcHJldjogQ0xBU1NfQVJST1dfUFJFVixcbiAgICAgIG5leHQ6IENMQVNTX0FSUk9XX05FWFQsXG4gICAgICBiYXI6IENMQVNTX1BST0dSRVNTX0JBUixcbiAgICAgIHRvZ2dsZTogQ0xBU1NfVE9HR0xFXG4gICAgfSwgZnVuY3Rpb24gKGNsYXNzTmFtZSwga2V5KSB7XG4gICAgICBlbGVtZW50c1trZXldID0gZmluZChcIi5cIiArIGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gICAgYXNzaWduKGVsZW1lbnRzLCB7XG4gICAgICByb290OiByb290LFxuICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBpZCA9IHJvb3QuaWQgfHwgdW5pcXVlSWQoUFJPSkVDVF9DT0RFKTtcbiAgICB2YXIgcm9sZSA9IG9wdGlvbnMucm9sZTtcbiAgICByb290LmlkID0gaWQ7XG4gICAgdHJhY2suaWQgPSB0cmFjay5pZCB8fCBpZCArIFwiLXRyYWNrXCI7XG4gICAgbGlzdC5pZCA9IGxpc3QuaWQgfHwgaWQgKyBcIi1saXN0XCI7XG5cbiAgICBpZiAoIWdldEF0dHJpYnV0ZShyb290LCBST0xFKSAmJiByb290LnRhZ05hbWUgIT09IFwiU0VDVElPTlwiICYmIHJvbGUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShyb290LCBST0xFLCByb2xlKTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9ST0xFREVTQ1JJUFRJT04sIGkxOG4uY2Fyb3VzZWwpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBST0xFLCBcInByZXNlbnRhdGlvblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWxtID0gcXVlcnkocm9vdCwgc2VsZWN0b3IpO1xuICAgIHJldHVybiBlbG0gJiYgY2xvc2VzdChlbG0sIFwiLlwiICsgQ0xBU1NfUk9PVCkgPT09IHJvb3QgPyBlbG0gOiB2b2lkIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKGJhc2UpIHtcbiAgICByZXR1cm4gW2Jhc2UgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIGJhc2UgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnICYmIGJhc2UgKyBcIi0tZHJhZ2dhYmxlXCIsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uICYmIGJhc2UgKyBcIi0tbmF2XCIsIGJhc2UgPT09IENMQVNTX1JPT1QgJiYgQ0xBU1NfQUNUSVZFXTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oZWxlbWVudHMsIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfSk7XG59XG5cbnZhciBTTElERSA9IFwic2xpZGVcIjtcbnZhciBMT09QID0gXCJsb29wXCI7XG52YXIgRkFERSA9IFwiZmFkZVwiO1xuXG5mdW5jdGlvbiBTbGlkZSQxKFNwbGlkZTIsIGluZGV4LCBzbGlkZUluZGV4LCBzbGlkZSkge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdCxcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kO1xuICB2YXIgQ29tcG9uZW50cyA9IFNwbGlkZTIuQ29tcG9uZW50cyxcbiAgICAgIHJvb3QgPSBTcGxpZGUyLnJvb3QsXG4gICAgICBvcHRpb25zID0gU3BsaWRlMi5vcHRpb25zO1xuICB2YXIgaXNOYXZpZ2F0aW9uID0gb3B0aW9ucy5pc05hdmlnYXRpb24sXG4gICAgICB1cGRhdGVPbk1vdmUgPSBvcHRpb25zLnVwZGF0ZU9uTW92ZSxcbiAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG4sXG4gICAgICBwYWdpbmF0aW9uID0gb3B0aW9ucy5wYWdpbmF0aW9uLFxuICAgICAgc2xpZGVGb2N1cyA9IG9wdGlvbnMuc2xpZGVGb2N1cztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgc3R5bGVzID0gZ2V0QXR0cmlidXRlKHNsaWRlLCBcInN0eWxlXCIpO1xuICB2YXIgbGFiZWwgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwpO1xuICB2YXIgaXNDbG9uZSA9IHNsaWRlSW5kZXggPiAtMTtcbiAgdmFyIGNvbnRhaW5lciA9IGNoaWxkKHNsaWRlLCBcIi5cIiArIENMQVNTX0NPTlRBSU5FUik7XG4gIHZhciBkZXN0cm95ZWQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKCFpc0Nsb25lKSB7XG4gICAgICBzbGlkZS5pZCA9IHJvb3QuaWQgKyBcIi1zbGlkZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFJPTEUsIHBhZ2luYXRpb24gPyBcInRhYnBhbmVsXCIgOiBcImdyb3VwXCIpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX1JPTEVERVNDUklQVElPTiwgaTE4bi5zbGlkZSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsIHx8IGZvcm1hdChpMThuLnNsaWRlTGFiZWwsIFtpbmRleCArIDEsIFNwbGlkZTIubGVuZ3RoXSkpO1xuICAgIH1cblxuICAgIGxpc3RlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIGJpbmQoc2xpZGUsIFwiY2xpY2tcIiwgYXBwbHkoZW1pdCwgRVZFTlRfQ0xJQ0ssIHNlbGYpKTtcbiAgICBiaW5kKHNsaWRlLCBcImtleWRvd25cIiwgYXBwbHkoZW1pdCwgRVZFTlRfU0xJREVfS0VZRE9XTiwgc2VsZikpO1xuICAgIG9uKFtFVkVOVF9NT1ZFRCwgRVZFTlRfU0hJRlRFRCwgRVZFTlRfU0NST0xMRURdLCB1cGRhdGUpO1xuICAgIG9uKEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCwgaW5pdE5hdmlnYXRpb24pO1xuXG4gICAgaWYgKHVwZGF0ZU9uTW92ZSkge1xuICAgICAgb24oRVZFTlRfTU9WRSwgb25Nb3ZlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIHJlbW92ZUNsYXNzKHNsaWRlLCBTVEFUVVNfQ0xBU1NFUyk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBTExfQVRUUklCVVRFUyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBcInN0eWxlXCIsIHN0eWxlcyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBsYWJlbCB8fCBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uKCkge1xuICAgIHZhciBjb250cm9scyA9IFNwbGlkZTIuc3BsaWRlcy5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdmFyIFNsaWRlMiA9IHRhcmdldC5zcGxpZGUuQ29tcG9uZW50cy5TbGlkZXMuZ2V0QXQoaW5kZXgpO1xuICAgICAgcmV0dXJuIFNsaWRlMiA/IFNsaWRlMi5zbGlkZS5pZCA6IFwiXCI7XG4gICAgfSkuam9pbihcIiBcIik7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBmb3JtYXQoaTE4bi5zbGlkZVgsIChpc0Nsb25lID8gc2xpZGVJbmRleCA6IGluZGV4KSArIDEpKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFJPTEUsIHNsaWRlRm9jdXMgPyBcImJ1dHRvblwiIDogXCJcIik7XG4gICAgc2xpZGVGb2N1cyAmJiByZW1vdmVBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfUk9MRURFU0NSSVBUSU9OKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZSgpIHtcbiAgICBpZiAoIWRlc3Ryb3llZCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghZGVzdHJveWVkKSB7XG4gICAgICB2YXIgY3VyciA9IFNwbGlkZTIuaW5kZXg7XG4gICAgICB1cGRhdGVBY3Rpdml0eSgpO1xuICAgICAgdXBkYXRlVmlzaWJpbGl0eSgpO1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX1BSRVYsIGluZGV4ID09PSBjdXJyIC0gMSk7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfTkVYVCwgaW5kZXggPT09IGN1cnIgKyAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBY3Rpdml0eSgpIHtcbiAgICB2YXIgYWN0aXZlID0gaXNBY3RpdmUoKTtcblxuICAgIGlmIChhY3RpdmUgIT09IGhhc0NsYXNzKHNsaWRlLCBDTEFTU19BQ1RJVkUpKSB7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfQUNUSVZFLCBhY3RpdmUpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlQsIGlzTmF2aWdhdGlvbiAmJiBhY3RpdmUgfHwgXCJcIik7XG4gICAgICBlbWl0KGFjdGl2ZSA/IEVWRU5UX0FDVElWRSA6IEVWRU5UX0lOQUNUSVZFLCBzZWxmKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaXNpYmlsaXR5KCkge1xuICAgIHZhciB2aXNpYmxlID0gaXNWaXNpYmxlKCk7XG4gICAgdmFyIGhpZGRlbiA9ICF2aXNpYmxlICYmICghaXNBY3RpdmUoKSB8fCBpc0Nsb25lKTtcblxuICAgIGlmICghU3BsaWRlMi5zdGF0ZS5pcyhbTU9WSU5HLCBTQ1JPTExJTkddKSkge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0hJRERFTiwgaGlkZGVuIHx8IFwiXCIpO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShxdWVyeUFsbChzbGlkZSwgb3B0aW9ucy5mb2N1c2FibGVOb2RlcyB8fCBcIlwiKSwgVEFCX0lOREVYLCBoaWRkZW4gPyAtMSA6IFwiXCIpO1xuXG4gICAgaWYgKHNsaWRlRm9jdXMpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgVEFCX0lOREVYLCBoaWRkZW4gPyAtMSA6IDApO1xuICAgIH1cblxuICAgIGlmICh2aXNpYmxlICE9PSBoYXNDbGFzcyhzbGlkZSwgQ0xBU1NfVklTSUJMRSkpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19WSVNJQkxFLCB2aXNpYmxlKTtcbiAgICAgIGVtaXQodmlzaWJsZSA/IEVWRU5UX1ZJU0lCTEUgOiBFVkVOVF9ISURERU4sIHNlbGYpO1xuICAgIH1cblxuICAgIGlmICghdmlzaWJsZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBzbGlkZSkge1xuICAgICAgdmFyIFNsaWRlMiA9IENvbXBvbmVudHMuU2xpZGVzLmdldEF0KFNwbGlkZTIuaW5kZXgpO1xuICAgICAgU2xpZGUyICYmIGZvY3VzKFNsaWRlMi5zbGlkZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGUkMShwcm9wLCB2YWx1ZSwgdXNlQ29udGFpbmVyKSB7XG4gICAgc3R5bGUodXNlQ29udGFpbmVyICYmIGNvbnRhaW5lciB8fCBzbGlkZSwgcHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIGN1cnIgPSBTcGxpZGUyLmluZGV4O1xuICAgIHJldHVybiBjdXJyID09PSBpbmRleCB8fCBvcHRpb25zLmNsb25lU3RhdHVzICYmIGN1cnIgPT09IHNsaWRlSW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIHJldHVybiBpc0FjdGl2ZSgpO1xuICAgIH1cblxuICAgIHZhciB0cmFja1JlY3QgPSByZWN0KENvbXBvbmVudHMuRWxlbWVudHMudHJhY2spO1xuICAgIHZhciBzbGlkZVJlY3QgPSByZWN0KHNsaWRlKTtcbiAgICB2YXIgbGVmdCA9IHJlc29sdmUoXCJsZWZ0XCIsIHRydWUpO1xuICAgIHZhciByaWdodCA9IHJlc29sdmUoXCJyaWdodFwiLCB0cnVlKTtcbiAgICByZXR1cm4gZmxvb3IodHJhY2tSZWN0W2xlZnRdKSA8PSBjZWlsKHNsaWRlUmVjdFtsZWZ0XSkgJiYgZmxvb3Ioc2xpZGVSZWN0W3JpZ2h0XSkgPD0gY2VpbCh0cmFja1JlY3RbcmlnaHRdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzV2l0aGluKGZyb20sIGRpc3RhbmNlKSB7XG4gICAgdmFyIGRpZmYgPSBhYnMoZnJvbSAtIGluZGV4KTtcblxuICAgIGlmICghaXNDbG9uZSAmJiAob3B0aW9ucy5yZXdpbmQgfHwgU3BsaWRlMi5pcyhMT09QKSkpIHtcbiAgICAgIGRpZmYgPSBtaW4oZGlmZiwgU3BsaWRlMi5sZW5ndGggLSBkaWZmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlmZiA8PSBkaXN0YW5jZTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGluZGV4OiBpbmRleCxcbiAgICBzbGlkZUluZGV4OiBzbGlkZUluZGV4LFxuICAgIHNsaWRlOiBzbGlkZSxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBpc0Nsb25lOiBpc0Nsb25lLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHN0eWxlOiBzdHlsZSQxLFxuICAgIGlzV2l0aGluOiBpc1dpdGhpblxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2xpZGVzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UyID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTIub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMi5lbWl0LFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTIuYmluZDtcblxuICB2YXIgX0NvbXBvbmVudHMyJEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBzbGlkZXMgPSBfQ29tcG9uZW50czIkRWxlbWVudHMuc2xpZGVzLFxuICAgICAgbGlzdCA9IF9Db21wb25lbnRzMiRFbGVtZW50cy5saXN0O1xuICB2YXIgU2xpZGVzMiA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBpbml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpbmRleCkge1xuICAgICAgcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCAtMSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KFNsaWRlczIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIudXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcihzbGlkZSwgaW5kZXgsIHNsaWRlSW5kZXgpIHtcbiAgICB2YXIgb2JqZWN0ID0gU2xpZGUkMShTcGxpZGUyLCBpbmRleCwgc2xpZGVJbmRleCwgc2xpZGUpO1xuICAgIG9iamVjdC5tb3VudCgpO1xuICAgIFNsaWRlczIucHVzaChvYmplY3QpO1xuICAgIFNsaWRlczIuc29ydChmdW5jdGlvbiAoU2xpZGUxLCBTbGlkZTIpIHtcbiAgICAgIHJldHVybiBTbGlkZTEuaW5kZXggLSBTbGlkZTIuaW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoZXhjbHVkZUNsb25lcykge1xuICAgIHJldHVybiBleGNsdWRlQ2xvbmVzID8gZmlsdGVyKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiAhU2xpZGUyLmlzQ2xvbmU7XG4gICAgfSkgOiBTbGlkZXMyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW4ocGFnZSkge1xuICAgIHZhciBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcjtcbiAgICB2YXIgaW5kZXggPSBDb250cm9sbGVyLnRvSW5kZXgocGFnZSk7XG4gICAgdmFyIG1heCA9IENvbnRyb2xsZXIuaGFzRm9jdXMoKSA/IDEgOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgcmV0dXJuIGZpbHRlcihmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gYmV0d2VlbihTbGlkZTIuaW5kZXgsIGluZGV4LCBpbmRleCArIG1heCAtIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICByZXR1cm4gZmlsdGVyKGluZGV4KVswXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpdGVtcywgaW5kZXgpIHtcbiAgICBmb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgIGlmIChpc1N0cmluZyhzbGlkZSkpIHtcbiAgICAgICAgc2xpZGUgPSBwYXJzZUh0bWwoc2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNIVE1MRWxlbWVudChzbGlkZSkpIHtcbiAgICAgICAgdmFyIHJlZiA9IHNsaWRlc1tpbmRleF07XG4gICAgICAgIHJlZiA/IGJlZm9yZShzbGlkZSwgcmVmKSA6IGFwcGVuZChsaXN0LCBzbGlkZSk7XG4gICAgICAgIGFkZENsYXNzKHNsaWRlLCBvcHRpb25zLmNsYXNzZXMuc2xpZGUpO1xuICAgICAgICBvYnNlcnZlSW1hZ2VzKHNsaWRlLCBhcHBseShlbWl0LCBFVkVOVF9SRVNJWkUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlJDEobWF0Y2hlcikge1xuICAgIHJlbW92ZShmaWx0ZXIobWF0Y2hlcikubWFwKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiBTbGlkZTIuc2xpZGU7XG4gICAgfSkpO1xuICAgIGVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JFYWNoJDEoaXRlcmF0ZWUsIGV4Y2x1ZGVDbG9uZXMpIHtcbiAgICBnZXQoZXhjbHVkZUNsb25lcykuZm9yRWFjaChpdGVyYXRlZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXIobWF0Y2hlcikge1xuICAgIHJldHVybiBTbGlkZXMyLmZpbHRlcihpc0Z1bmN0aW9uKG1hdGNoZXIpID8gbWF0Y2hlciA6IGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiBpc1N0cmluZyhtYXRjaGVyKSA/IG1hdGNoZXMoU2xpZGUyLnNsaWRlLCBtYXRjaGVyKSA6IGluY2x1ZGVzKHRvQXJyYXkobWF0Y2hlciksIFNsaWRlMi5pbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZShwcm9wLCB2YWx1ZSwgdXNlQ29udGFpbmVyKSB7XG4gICAgZm9yRWFjaCQxKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIFNsaWRlMi5zdHlsZShwcm9wLCB2YWx1ZSwgdXNlQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmVJbWFnZXMoZWxtLCBjYWxsYmFjaykge1xuICAgIHZhciBpbWFnZXMgPSBxdWVyeUFsbChlbG0sIFwiaW1nXCIpO1xuICAgIHZhciBsZW5ndGggPSBpbWFnZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZykge1xuICAgICAgICBiaW5kKGltZywgXCJsb2FkIGVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoISAtLWxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGVuZ3RoKGV4Y2x1ZGVDbG9uZXMpIHtcbiAgICByZXR1cm4gZXhjbHVkZUNsb25lcyA/IHNsaWRlcy5sZW5ndGggOiBTbGlkZXMyLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRW5vdWdoKCkge1xuICAgIHJldHVybiBTbGlkZXMyLmxlbmd0aCA+IG9wdGlvbnMucGVyUGFnZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLFxuICAgIGdldDogZ2V0LFxuICAgIGdldEluOiBnZXRJbixcbiAgICBnZXRBdDogZ2V0QXQsXG4gICAgYWRkOiBhZGQsXG4gICAgcmVtb3ZlOiByZW1vdmUkMSxcbiAgICBmb3JFYWNoOiBmb3JFYWNoJDEsXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGdldExlbmd0aDogZ2V0TGVuZ3RoLFxuICAgIGlzRW5vdWdoOiBpc0Vub3VnaFxuICB9O1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTMgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMy5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UzLmJpbmQsXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMy5lbWl0O1xuXG4gIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXM7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBfQ29tcG9uZW50czIkRWxlbWVudHMyID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICByb290ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMi5yb290LFxuICAgICAgdHJhY2sgPSBfQ29tcG9uZW50czIkRWxlbWVudHMyLnRyYWNrLFxuICAgICAgbGlzdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czIubGlzdDtcbiAgdmFyIGdldEF0ID0gU2xpZGVzLmdldEF0LFxuICAgICAgc3R5bGVTbGlkZXMgPSBTbGlkZXMuc3R5bGU7XG4gIHZhciB2ZXJ0aWNhbDtcbiAgdmFyIHJvb3RSZWN0O1xuICB2YXIgb3ZlcmZsb3c7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIGJpbmQod2luZG93LCBcInJlc2l6ZSBsb2FkXCIsIFRocm90dGxlKGFwcGx5KGVtaXQsIEVWRU5UX1JFU0laRSkpKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGluaXQpO1xuICAgIG9uKEVWRU5UX1JFU0laRSwgcmVzaXplKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmVydGljYWwgPSBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAgIHN0eWxlKHJvb3QsIFwibWF4V2lkdGhcIiwgdW5pdChvcHRpb25zLndpZHRoKSk7XG4gICAgc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nTGVmdFwiKSwgY3NzUGFkZGluZyhmYWxzZSkpO1xuICAgIHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ1JpZ2h0XCIpLCBjc3NQYWRkaW5nKHRydWUpKTtcbiAgICByZXNpemUodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemUoZm9yY2UpIHtcbiAgICB2YXIgbmV3UmVjdCA9IHJlY3Qocm9vdCk7XG5cbiAgICBpZiAoZm9yY2UgfHwgcm9vdFJlY3Qud2lkdGggIT09IG5ld1JlY3Qud2lkdGggfHwgcm9vdFJlY3QuaGVpZ2h0ICE9PSBuZXdSZWN0LmhlaWdodCkge1xuICAgICAgc3R5bGUodHJhY2ssIFwiaGVpZ2h0XCIsIGNzc1RyYWNrSGVpZ2h0KCkpO1xuICAgICAgc3R5bGVTbGlkZXMocmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpLCB1bml0KG9wdGlvbnMuZ2FwKSk7XG4gICAgICBzdHlsZVNsaWRlcyhcIndpZHRoXCIsIGNzc1NsaWRlV2lkdGgoKSk7XG4gICAgICBzdHlsZVNsaWRlcyhcImhlaWdodFwiLCBjc3NTbGlkZUhlaWdodCgpLCB0cnVlKTtcbiAgICAgIHJvb3RSZWN0ID0gbmV3UmVjdDtcbiAgICAgIGVtaXQoRVZFTlRfUkVTSVpFRCk7XG5cbiAgICAgIGlmIChvdmVyZmxvdyAhPT0gKG92ZXJmbG93ID0gaXNPdmVyZmxvdygpKSkge1xuICAgICAgICB0b2dnbGVDbGFzcyhyb290LCBDTEFTU19PVkVSRkxPVywgb3ZlcmZsb3cpO1xuICAgICAgICBlbWl0KEVWRU5UX09WRVJGTE9XLCBvdmVyZmxvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3NzUGFkZGluZyhyaWdodCkge1xuICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgIHZhciBwcm9wID0gcmVzb2x2ZShyaWdodCA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICByZXR1cm4gcGFkZGluZyAmJiB1bml0KHBhZGRpbmdbcHJvcF0gfHwgKGlzT2JqZWN0KHBhZGRpbmcpID8gMCA6IHBhZGRpbmcpKSB8fCBcIjBweFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzVHJhY2tIZWlnaHQoKSB7XG4gICAgdmFyIGhlaWdodCA9IFwiXCI7XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGhlaWdodCA9IGNzc0hlaWdodCgpO1xuICAgICAgYXNzZXJ0KGhlaWdodCwgXCJoZWlnaHQgb3IgaGVpZ2h0UmF0aW8gaXMgbWlzc2luZy5cIik7XG4gICAgICBoZWlnaHQgPSBcImNhbGMoXCIgKyBoZWlnaHQgKyBcIiAtIFwiICsgY3NzUGFkZGluZyhmYWxzZSkgKyBcIiAtIFwiICsgY3NzUGFkZGluZyh0cnVlKSArIFwiKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5oZWlnaHQgfHwgcmVjdChsaXN0KS53aWR0aCAqIG9wdGlvbnMuaGVpZ2h0UmF0aW8pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzU2xpZGVXaWR0aCgpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hdXRvV2lkdGggPyBudWxsIDogdW5pdChvcHRpb25zLmZpeGVkV2lkdGgpIHx8ICh2ZXJ0aWNhbCA/IFwiXCIgOiBjc3NTbGlkZVNpemUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NTbGlkZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmZpeGVkSGVpZ2h0KSB8fCAodmVydGljYWwgPyBvcHRpb25zLmF1dG9IZWlnaHQgPyBudWxsIDogY3NzU2xpZGVTaXplKCkgOiBjc3NIZWlnaHQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NTbGlkZVNpemUoKSB7XG4gICAgdmFyIGdhcCA9IHVuaXQob3B0aW9ucy5nYXApO1xuICAgIHJldHVybiBcImNhbGMoKDEwMCVcIiArIChnYXAgJiYgXCIgKyBcIiArIGdhcCkgKyBcIikvXCIgKyAob3B0aW9ucy5wZXJQYWdlIHx8IDEpICsgKGdhcCAmJiBcIiAtIFwiICsgZ2FwKSArIFwiKVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdFNpemUoKSB7XG4gICAgcmV0dXJuIHJlY3QobGlzdClbcmVzb2x2ZShcIndpZHRoXCIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlU2l6ZShpbmRleCwgd2l0aG91dEdhcCkge1xuICAgIHZhciBTbGlkZSA9IGdldEF0KGluZGV4IHx8IDApO1xuICAgIHJldHVybiBTbGlkZSA/IHJlY3QoU2xpZGUuc2xpZGUpW3Jlc29sdmUoXCJ3aWR0aFwiKV0gKyAod2l0aG91dEdhcCA/IDAgOiBnZXRHYXAoKSkgOiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gdG90YWxTaXplKGluZGV4LCB3aXRob3V0R2FwKSB7XG4gICAgdmFyIFNsaWRlID0gZ2V0QXQoaW5kZXgpO1xuXG4gICAgaWYgKFNsaWRlKSB7XG4gICAgICB2YXIgcmlnaHQgPSByZWN0KFNsaWRlLnNsaWRlKVtyZXNvbHZlKFwicmlnaHRcIildO1xuICAgICAgdmFyIGxlZnQgPSByZWN0KGxpc3QpW3Jlc29sdmUoXCJsZWZ0XCIpXTtcbiAgICAgIHJldHVybiBhYnMocmlnaHQgLSBsZWZ0KSArICh3aXRob3V0R2FwID8gMCA6IGdldEdhcCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlclNpemUod2l0aG91dEdhcCkge1xuICAgIHJldHVybiB0b3RhbFNpemUoU3BsaWRlMi5sZW5ndGggLSAxKSAtIHRvdGFsU2l6ZSgwKSArIHNsaWRlU2l6ZSgwLCB3aXRob3V0R2FwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhcCgpIHtcbiAgICB2YXIgU2xpZGUgPSBnZXRBdCgwKTtcbiAgICByZXR1cm4gU2xpZGUgJiYgcGFyc2VGbG9hdChzdHlsZShTbGlkZS5zbGlkZSwgcmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpKSkgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhZGRpbmcocmlnaHQpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZSh0cmFjaywgcmVzb2x2ZShcInBhZGRpbmdcIiArIChyaWdodCA/IFwiUmlnaHRcIiA6IFwiTGVmdFwiKSkpKSB8fCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPdmVyZmxvdygpIHtcbiAgICByZXR1cm4gU3BsaWRlMi5pcyhGQURFKSB8fCBzbGlkZXJTaXplKHRydWUpID4gbGlzdFNpemUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHJlc2l6ZTogcmVzaXplLFxuICAgIGxpc3RTaXplOiBsaXN0U2l6ZSxcbiAgICBzbGlkZVNpemU6IHNsaWRlU2l6ZSxcbiAgICBzbGlkZXJTaXplOiBzbGlkZXJTaXplLFxuICAgIHRvdGFsU2l6ZTogdG90YWxTaXplLFxuICAgIGdldFBhZGRpbmc6IGdldFBhZGRpbmcsXG4gICAgaXNPdmVyZmxvdzogaXNPdmVyZmxvd1xuICB9O1xufVxuXG52YXIgTVVMVElQTElFUiA9IDI7XG5cbmZ1bmN0aW9uIENsb25lcyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub247XG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgY2xvbmVzID0gW107XG4gIHZhciBjbG9uZUNvdW50O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIHJlbW91bnQpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRVNJWkVdLCBvYnNlcnZlKTtcblxuICAgIGlmIChjbG9uZUNvdW50ID0gY29tcHV0ZUNsb25lQ291bnQoKSkge1xuICAgICAgZ2VuZXJhdGUoY2xvbmVDb3VudCk7XG4gICAgICBDb21wb25lbnRzMi5MYXlvdXQucmVzaXplKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICAgIGVtcHR5KGNsb25lcyk7XG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZSgpIHtcbiAgICB2YXIgY291bnQgPSBjb21wdXRlQ2xvbmVDb3VudCgpO1xuXG4gICAgaWYgKGNsb25lQ291bnQgIT09IGNvdW50KSB7XG4gICAgICBpZiAoY2xvbmVDb3VudCA8IGNvdW50IHx8ICFjb3VudCkge1xuICAgICAgICBldmVudC5lbWl0KEVWRU5UX1JFRlJFU0gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlKGNvdW50KSB7XG4gICAgdmFyIHNsaWRlcyA9IFNsaWRlcy5nZXQoKS5zbGljZSgpO1xuICAgIHZhciBsZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICBwdXNoKHNsaWRlcywgc2xpZGVzKTtcbiAgICAgIH1cblxuICAgICAgcHVzaChzbGlkZXMuc2xpY2UoLWNvdW50KSwgc2xpZGVzLnNsaWNlKDAsIGNvdW50KSkuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUsIGluZGV4KSB7XG4gICAgICAgIHZhciBpc0hlYWQgPSBpbmRleCA8IGNvdW50O1xuICAgICAgICB2YXIgY2xvbmUgPSBjbG9uZURlZXAoU2xpZGUuc2xpZGUsIGluZGV4KTtcbiAgICAgICAgaXNIZWFkID8gYmVmb3JlKGNsb25lLCBzbGlkZXNbMF0uc2xpZGUpIDogYXBwZW5kKEVsZW1lbnRzLmxpc3QsIGNsb25lKTtcbiAgICAgICAgcHVzaChjbG9uZXMsIGNsb25lKTtcbiAgICAgICAgU2xpZGVzLnJlZ2lzdGVyKGNsb25lLCBpbmRleCAtIGNvdW50ICsgKGlzSGVhZCA/IDAgOiBsZW5ndGgpLCBTbGlkZS5pbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZURlZXAoZWxtLCBpbmRleCkge1xuICAgIHZhciBjbG9uZSA9IGVsbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYWRkQ2xhc3MoY2xvbmUsIG9wdGlvbnMuY2xhc3Nlcy5jbG9uZSk7XG4gICAgY2xvbmUuaWQgPSBTcGxpZGUyLnJvb3QuaWQgKyBcIi1jbG9uZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUNsb25lQ291bnQoKSB7XG4gICAgdmFyIGNsb25lczIgPSBvcHRpb25zLmNsb25lcztcblxuICAgIGlmICghU3BsaWRlMi5pcyhMT09QKSkge1xuICAgICAgY2xvbmVzMiA9IDA7XG4gICAgfSBlbHNlIGlmIChpc1VuZGVmaW5lZChjbG9uZXMyKSkge1xuICAgICAgdmFyIGZpeGVkU2l6ZSA9IG9wdGlvbnNbcmVzb2x2ZShcImZpeGVkV2lkdGhcIildICYmIENvbXBvbmVudHMyLkxheW91dC5zbGlkZVNpemUoMCk7XG4gICAgICB2YXIgZml4ZWRDb3VudCA9IGZpeGVkU2l6ZSAmJiBjZWlsKHJlY3QoRWxlbWVudHMudHJhY2spW3Jlc29sdmUoXCJ3aWR0aFwiKV0gLyBmaXhlZFNpemUpO1xuICAgICAgY2xvbmVzMiA9IGZpeGVkQ291bnQgfHwgb3B0aW9uc1tyZXNvbHZlKFwiYXV0b1dpZHRoXCIpXSAmJiBTcGxpZGUyLmxlbmd0aCB8fCBvcHRpb25zLnBlclBhZ2UgKiBNVUxUSVBMSUVSO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZXMyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG5mdW5jdGlvbiBNb3ZlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U0ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTQub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlNC5lbWl0O1xuXG4gIHZhciBzZXQgPSBTcGxpZGUyLnN0YXRlLnNldDtcbiAgdmFyIF9Db21wb25lbnRzMiRMYXlvdXQgPSBDb21wb25lbnRzMi5MYXlvdXQsXG4gICAgICBzbGlkZVNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0LnNsaWRlU2l6ZSxcbiAgICAgIGdldFBhZGRpbmcgPSBfQ29tcG9uZW50czIkTGF5b3V0LmdldFBhZGRpbmcsXG4gICAgICB0b3RhbFNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0LnRvdGFsU2l6ZSxcbiAgICAgIGxpc3RTaXplID0gX0NvbXBvbmVudHMyJExheW91dC5saXN0U2l6ZSxcbiAgICAgIHNsaWRlclNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0LnNsaWRlclNpemU7XG4gIHZhciBfQ29tcG9uZW50czIkRGlyZWN0aW8gPSBDb21wb25lbnRzMi5EaXJlY3Rpb24sXG4gICAgICByZXNvbHZlID0gX0NvbXBvbmVudHMyJERpcmVjdGlvLnJlc29sdmUsXG4gICAgICBvcmllbnQgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8ub3JpZW50O1xuICB2YXIgX0NvbXBvbmVudHMyJEVsZW1lbnRzMyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgbGlzdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czMubGlzdCxcbiAgICAgIHRyYWNrID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMy50cmFjaztcbiAgdmFyIFRyYW5zaXRpb247XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgVHJhbnNpdGlvbiA9IENvbXBvbmVudHMyLlRyYW5zaXRpb247XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFU0laRUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCByZXBvc2l0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9zaXRpb24oKSB7XG4gICAgaWYgKCFDb21wb25lbnRzMi5Db250cm9sbGVyLmlzQnVzeSgpKSB7XG4gICAgICBDb21wb25lbnRzMi5TY3JvbGwuY2FuY2VsKCk7XG4gICAgICBqdW1wKFNwbGlkZTIuaW5kZXgpO1xuICAgICAgQ29tcG9uZW50czIuU2xpZGVzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZGVzdCwgaW5kZXgsIHByZXYsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGRlc3QgIT09IGluZGV4ICYmIGNhblNoaWZ0KGRlc3QgPiBwcmV2KSkge1xuICAgICAgY2FuY2VsKCk7XG4gICAgICB0cmFuc2xhdGUoc2hpZnQoZ2V0UG9zaXRpb24oKSwgZGVzdCA+IHByZXYpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzZXQoTU9WSU5HKTtcbiAgICBlbWl0KEVWRU5UX01PVkUsIGluZGV4LCBwcmV2LCBkZXN0KTtcbiAgICBUcmFuc2l0aW9uLnN0YXJ0KGluZGV4LCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXQoSURMRSk7XG4gICAgICBlbWl0KEVWRU5UX01PVkVELCBpbmRleCwgcHJldiwgZGVzdCk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24ganVtcChpbmRleCkge1xuICAgIHRyYW5zbGF0ZSh0b1Bvc2l0aW9uKGluZGV4LCB0cnVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUocG9zaXRpb24sIHByZXZlbnRMb29wKSB7XG4gICAgaWYgKCFTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICB2YXIgZGVzdGluYXRpb24gPSBwcmV2ZW50TG9vcCA/IHBvc2l0aW9uIDogbG9vcChwb3NpdGlvbik7XG4gICAgICBzdHlsZShsaXN0LCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVwiICsgcmVzb2x2ZShcIlhcIikgKyBcIihcIiArIGRlc3RpbmF0aW9uICsgXCJweClcIik7XG4gICAgICBwb3NpdGlvbiAhPT0gZGVzdGluYXRpb24gJiYgZW1pdChFVkVOVF9TSElGVEVEKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKHBvc2l0aW9uKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoTE9PUCkpIHtcbiAgICAgIHZhciBpbmRleCA9IHRvSW5kZXgocG9zaXRpb24pO1xuICAgICAgdmFyIGV4Y2VlZGVkTWF4ID0gaW5kZXggPiBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEVuZCgpO1xuICAgICAgdmFyIGV4Y2VlZGVkTWluID0gaW5kZXggPCAwO1xuXG4gICAgICBpZiAoZXhjZWVkZWRNaW4gfHwgZXhjZWVkZWRNYXgpIHtcbiAgICAgICAgcG9zaXRpb24gPSBzaGlmdChwb3NpdGlvbiwgZXhjZWVkZWRNYXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoaWZ0KHBvc2l0aW9uLCBiYWNrd2FyZHMpIHtcbiAgICB2YXIgZXhjZXNzID0gcG9zaXRpb24gLSBnZXRMaW1pdChiYWNrd2FyZHMpO1xuICAgIHZhciBzaXplID0gc2xpZGVyU2l6ZSgpO1xuICAgIHBvc2l0aW9uIC09IG9yaWVudChzaXplICogKGNlaWwoYWJzKGV4Y2VzcykgLyBzaXplKSB8fCAxKSkgKiAoYmFja3dhcmRzID8gMSA6IC0xKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdHJhbnNsYXRlKGdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgIFRyYW5zaXRpb24uY2FuY2VsKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0luZGV4KHBvc2l0aW9uKSB7XG4gICAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcy5nZXQoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzbGlkZUluZGV4ID0gU2xpZGVzW2ldLmluZGV4O1xuICAgICAgdmFyIGRpc3RhbmNlID0gYWJzKHRvUG9zaXRpb24oc2xpZGVJbmRleCwgdHJ1ZSkgLSBwb3NpdGlvbik7XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8PSBtaW5EaXN0YW5jZSkge1xuICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICBpbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiB0b1Bvc2l0aW9uKGluZGV4LCB0cmltbWluZykge1xuICAgIHZhciBwb3NpdGlvbiA9IG9yaWVudCh0b3RhbFNpemUoaW5kZXggLSAxKSAtIG9mZnNldChpbmRleCkpO1xuICAgIHJldHVybiB0cmltbWluZyA/IHRyaW0ocG9zaXRpb24pIDogcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgbGVmdCA9IHJlc29sdmUoXCJsZWZ0XCIpO1xuICAgIHJldHVybiByZWN0KGxpc3QpW2xlZnRdIC0gcmVjdCh0cmFjaylbbGVmdF0gKyBvcmllbnQoZ2V0UGFkZGluZyhmYWxzZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpbShwb3NpdGlvbikge1xuICAgIGlmIChvcHRpb25zLnRyaW1TcGFjZSAmJiBTcGxpZGUyLmlzKFNMSURFKSkge1xuICAgICAgcG9zaXRpb24gPSBjbGFtcChwb3NpdGlvbiwgMCwgb3JpZW50KHNsaWRlclNpemUodHJ1ZSkgLSBsaXN0U2l6ZSgpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgdmFyIGZvY3VzID0gb3B0aW9ucy5mb2N1cztcbiAgICByZXR1cm4gZm9jdXMgPT09IFwiY2VudGVyXCIgPyAobGlzdFNpemUoKSAtIHNsaWRlU2l6ZShpbmRleCwgdHJ1ZSkpIC8gMiA6ICtmb2N1cyAqIHNsaWRlU2l6ZShpbmRleCkgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpbWl0KG1heCkge1xuICAgIHJldHVybiB0b1Bvc2l0aW9uKG1heCA/IENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ2V0RW5kKCkgOiAwLCAhIW9wdGlvbnMudHJpbVNwYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblNoaWZ0KGJhY2t3YXJkcykge1xuICAgIHZhciBzaGlmdGVkID0gb3JpZW50KHNoaWZ0KGdldFBvc2l0aW9uKCksIGJhY2t3YXJkcykpO1xuICAgIHJldHVybiBiYWNrd2FyZHMgPyBzaGlmdGVkID49IDAgOiBzaGlmdGVkIDw9IGxpc3RbcmVzb2x2ZShcInNjcm9sbFdpZHRoXCIpXSAtIHJlY3QodHJhY2spW3Jlc29sdmUoXCJ3aWR0aFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBleGNlZWRlZExpbWl0KG1heCwgcG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IGlzVW5kZWZpbmVkKHBvc2l0aW9uKSA/IGdldFBvc2l0aW9uKCkgOiBwb3NpdGlvbjtcbiAgICB2YXIgZXhjZWVkZWRNaW4gPSBtYXggIT09IHRydWUgJiYgb3JpZW50KHBvc2l0aW9uKSA8IG9yaWVudChnZXRMaW1pdChmYWxzZSkpO1xuICAgIHZhciBleGNlZWRlZE1heCA9IG1heCAhPT0gZmFsc2UgJiYgb3JpZW50KHBvc2l0aW9uKSA+IG9yaWVudChnZXRMaW1pdCh0cnVlKSk7XG4gICAgcmV0dXJuIGV4Y2VlZGVkTWluIHx8IGV4Y2VlZGVkTWF4O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgbW92ZTogbW92ZSxcbiAgICBqdW1wOiBqdW1wLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIHNoaWZ0OiBzaGlmdCxcbiAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgIHRvUG9zaXRpb246IHRvUG9zaXRpb24sXG4gICAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uLFxuICAgIGdldExpbWl0OiBnZXRMaW1pdCxcbiAgICBleGNlZWRlZExpbWl0OiBleGNlZWRlZExpbWl0LFxuICAgIHJlcG9zaXRpb246IHJlcG9zaXRpb25cbiAgfTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbGxlcihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U1Lm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTUuZW1pdDtcblxuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmU7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBnZXRMaW1pdCA9IE1vdmUuZ2V0TGltaXQsXG4gICAgICB0b1Bvc2l0aW9uID0gTW92ZS50b1Bvc2l0aW9uO1xuICB2YXIgX0NvbXBvbmVudHMyJFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcyxcbiAgICAgIGlzRW5vdWdoID0gX0NvbXBvbmVudHMyJFNsaWRlcy5pc0Vub3VnaCxcbiAgICAgIGdldExlbmd0aCA9IF9Db21wb25lbnRzMiRTbGlkZXMuZ2V0TGVuZ3RoO1xuICB2YXIgb21pdEVuZCA9IG9wdGlvbnMub21pdEVuZDtcbiAgdmFyIGlzTG9vcCA9IFNwbGlkZTIuaXMoTE9PUCk7XG4gIHZhciBpc1NsaWRlID0gU3BsaWRlMi5pcyhTTElERSk7XG4gIHZhciBnZXROZXh0ID0gYXBwbHkoZ2V0QWRqYWNlbnQsIGZhbHNlKTtcbiAgdmFyIGdldFByZXYgPSBhcHBseShnZXRBZGphY2VudCwgdHJ1ZSk7XG4gIHZhciBjdXJySW5kZXggPSBvcHRpb25zLnN0YXJ0IHx8IDA7XG4gIHZhciBlbmRJbmRleDtcbiAgdmFyIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgdmFyIHNsaWRlQ291bnQ7XG4gIHZhciBwZXJNb3ZlO1xuICB2YXIgcGVyUGFnZTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0gsIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEXSwgaW5pdCk7XG4gICAgb24oRVZFTlRfUkVTSVpFRCwgb25SZXNpemVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2xpZGVDb3VudCA9IGdldExlbmd0aCh0cnVlKTtcbiAgICBwZXJNb3ZlID0gb3B0aW9ucy5wZXJNb3ZlO1xuICAgIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgZW5kSW5kZXggPSBnZXRFbmQoKTtcbiAgICB2YXIgaW5kZXggPSBjbGFtcChjdXJySW5kZXgsIDAsIG9taXRFbmQgPyBlbmRJbmRleCA6IHNsaWRlQ291bnQgLSAxKTtcblxuICAgIGlmIChpbmRleCAhPT0gY3VyckluZGV4KSB7XG4gICAgICBjdXJySW5kZXggPSBpbmRleDtcbiAgICAgIE1vdmUucmVwb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVzaXplZCgpIHtcbiAgICBpZiAoZW5kSW5kZXggIT09IGdldEVuZCgpKSB7XG4gICAgICBlbWl0KEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnbyhjb250cm9sLCBhbGxvd1NhbWVJbmRleCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWlzQnVzeSgpKSB7XG4gICAgICB2YXIgZGVzdCA9IHBhcnNlKGNvbnRyb2wpO1xuICAgICAgdmFyIGluZGV4ID0gbG9vcChkZXN0KTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgKGFsbG93U2FtZUluZGV4IHx8IGluZGV4ICE9PSBjdXJySW5kZXgpKSB7XG4gICAgICAgIHNldEluZGV4KGluZGV4KTtcbiAgICAgICAgTW92ZS5tb3ZlKGRlc3QsIGluZGV4LCBwcmV2SW5kZXgsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBjYWxsYmFjaykge1xuICAgIENvbXBvbmVudHMyLlNjcm9sbC5zY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5kZXggPSBsb29wKE1vdmUudG9JbmRleChnZXRQb3NpdGlvbigpKSk7XG4gICAgICBzZXRJbmRleChvbWl0RW5kID8gbWluKGluZGV4LCBlbmRJbmRleCkgOiBpbmRleCk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2UoY29udHJvbCkge1xuICAgIHZhciBpbmRleCA9IGN1cnJJbmRleDtcblxuICAgIGlmIChpc1N0cmluZyhjb250cm9sKSkge1xuICAgICAgdmFyIF9yZWYgPSBjb250cm9sLm1hdGNoKC8oWytcXC08Pl0pKFxcZCspPy8pIHx8IFtdLFxuICAgICAgICAgIGluZGljYXRvciA9IF9yZWZbMV0sXG4gICAgICAgICAgbnVtYmVyID0gX3JlZlsyXTtcblxuICAgICAgaWYgKGluZGljYXRvciA9PT0gXCIrXCIgfHwgaW5kaWNhdG9yID09PSBcIi1cIikge1xuICAgICAgICBpbmRleCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgKyhcIlwiICsgaW5kaWNhdG9yICsgKCtudW1iZXIgfHwgMSkpLCBjdXJySW5kZXgpO1xuICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09IFwiPlwiKSB7XG4gICAgICAgIGluZGV4ID0gbnVtYmVyID8gdG9JbmRleCgrbnVtYmVyKSA6IGdldE5leHQodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGluZGljYXRvciA9PT0gXCI8XCIpIHtcbiAgICAgICAgaW5kZXggPSBnZXRQcmV2KHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IGlzTG9vcCA/IGNvbnRyb2wgOiBjbGFtcChjb250cm9sLCAwLCBlbmRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWRqYWNlbnQocHJldiwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgbnVtYmVyID0gcGVyTW92ZSB8fCAoaGFzRm9jdXMoKSA/IDEgOiBwZXJQYWdlKTtcbiAgICB2YXIgZGVzdCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgbnVtYmVyICogKHByZXYgPyAtMSA6IDEpLCBjdXJySW5kZXgsICEocGVyTW92ZSB8fCBoYXNGb2N1cygpKSk7XG5cbiAgICBpZiAoZGVzdCA9PT0gLTEgJiYgaXNTbGlkZSkge1xuICAgICAgaWYgKCFhcHByb3hpbWF0ZWx5RXF1YWwoZ2V0UG9zaXRpb24oKSwgZ2V0TGltaXQoIXByZXYpLCAxKSkge1xuICAgICAgICByZXR1cm4gcHJldiA/IDAgOiBlbmRJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdGluYXRpb24gPyBkZXN0IDogbG9vcChkZXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVEZXN0SW5kZXgoZGVzdCwgZnJvbSwgc25hcFBhZ2UpIHtcbiAgICBpZiAoaXNFbm91Z2goKSB8fCBoYXNGb2N1cygpKSB7XG4gICAgICB2YXIgaW5kZXggPSBjb21wdXRlTW92YWJsZURlc3RJbmRleChkZXN0KTtcblxuICAgICAgaWYgKGluZGV4ICE9PSBkZXN0KSB7XG4gICAgICAgIGZyb20gPSBkZXN0O1xuICAgICAgICBkZXN0ID0gaW5kZXg7XG4gICAgICAgIHNuYXBQYWdlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZXN0IDwgMCB8fCBkZXN0ID4gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKCFwZXJNb3ZlICYmIChiZXR3ZWVuKDAsIGRlc3QsIGZyb20sIHRydWUpIHx8IGJldHdlZW4oZW5kSW5kZXgsIGZyb20sIGRlc3QsIHRydWUpKSkge1xuICAgICAgICAgIGRlc3QgPSB0b0luZGV4KHRvUGFnZShkZXN0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzTG9vcCkge1xuICAgICAgICAgICAgZGVzdCA9IHNuYXBQYWdlID8gZGVzdCA8IDAgPyAtKHNsaWRlQ291bnQgJSBwZXJQYWdlIHx8IHBlclBhZ2UpIDogc2xpZGVDb3VudCA6IGRlc3Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJld2luZCkge1xuICAgICAgICAgICAgZGVzdCA9IGRlc3QgPCAwID8gZW5kSW5kZXggOiAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0ID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc25hcFBhZ2UgJiYgZGVzdCAhPT0gZnJvbSkge1xuICAgICAgICAgIGRlc3QgPSB0b0luZGV4KHRvUGFnZShmcm9tKSArIChkZXN0IDwgZnJvbSA/IC0xIDogMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3QgPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVNb3ZhYmxlRGVzdEluZGV4KGRlc3QpIHtcbiAgICBpZiAoaXNTbGlkZSAmJiBvcHRpb25zLnRyaW1TcGFjZSA9PT0gXCJtb3ZlXCIgJiYgZGVzdCAhPT0gY3VyckluZGV4KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPT09IHRvUG9zaXRpb24oZGVzdCwgdHJ1ZSkgJiYgYmV0d2VlbihkZXN0LCAwLCBTcGxpZGUyLmxlbmd0aCAtIDEsICFvcHRpb25zLnJld2luZCkpIHtcbiAgICAgICAgZGVzdCA8IGN1cnJJbmRleCA/IC0tZGVzdCA6ICsrZGVzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AoaW5kZXgpIHtcbiAgICByZXR1cm4gaXNMb29wID8gKGluZGV4ICsgc2xpZGVDb3VudCkgJSBzbGlkZUNvdW50IHx8IDAgOiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVuZCgpIHtcbiAgICB2YXIgZW5kID0gc2xpZGVDb3VudCAtIChoYXNGb2N1cygpIHx8IGlzTG9vcCAmJiBwZXJNb3ZlID8gMSA6IHBlclBhZ2UpO1xuXG4gICAgd2hpbGUgKG9taXRFbmQgJiYgZW5kLS0gPiAwKSB7XG4gICAgICBpZiAodG9Qb3NpdGlvbihzbGlkZUNvdW50IC0gMSwgdHJ1ZSkgIT09IHRvUG9zaXRpb24oZW5kLCB0cnVlKSkge1xuICAgICAgICBlbmQrKztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYW1wKGVuZCwgMCwgc2xpZGVDb3VudCAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9JbmRleChwYWdlKSB7XG4gICAgcmV0dXJuIGNsYW1wKGhhc0ZvY3VzKCkgPyBwYWdlIDogcGVyUGFnZSAqIHBhZ2UsIDAsIGVuZEluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUGFnZShpbmRleCkge1xuICAgIHJldHVybiBoYXNGb2N1cygpID8gbWluKGluZGV4LCBlbmRJbmRleCkgOiBmbG9vcigoaW5kZXggPj0gZW5kSW5kZXggPyBzbGlkZUNvdW50IC0gMSA6IGluZGV4KSAvIHBlclBhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9EZXN0KGRlc3RpbmF0aW9uKSB7XG4gICAgdmFyIGNsb3Nlc3QgPSBNb3ZlLnRvSW5kZXgoZGVzdGluYXRpb24pO1xuICAgIHJldHVybiBpc1NsaWRlID8gY2xhbXAoY2xvc2VzdCwgMCwgZW5kSW5kZXgpIDogY2xvc2VzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluZGV4KGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgIGN1cnJJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluZGV4KHByZXYpIHtcbiAgICByZXR1cm4gcHJldiA/IHByZXZJbmRleCA6IGN1cnJJbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0ZvY3VzKCkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQob3B0aW9ucy5mb2N1cykgfHwgb3B0aW9ucy5pc05hdmlnYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBpc0J1c3koKSB7XG4gICAgcmV0dXJuIFNwbGlkZTIuc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSkgJiYgISFvcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZ286IGdvLFxuICAgIHNjcm9sbDogc2Nyb2xsLFxuICAgIGdldE5leHQ6IGdldE5leHQsXG4gICAgZ2V0UHJldjogZ2V0UHJldixcbiAgICBnZXRBZGphY2VudDogZ2V0QWRqYWNlbnQsXG4gICAgZ2V0RW5kOiBnZXRFbmQsXG4gICAgc2V0SW5kZXg6IHNldEluZGV4LFxuICAgIGdldEluZGV4OiBnZXRJbmRleCxcbiAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgIHRvUGFnZTogdG9QYWdlLFxuICAgIHRvRGVzdDogdG9EZXN0LFxuICAgIGhhc0ZvY3VzOiBoYXNGb2N1cyxcbiAgICBpc0J1c3k6IGlzQnVzeVxuICB9O1xufVxuXG52YXIgWE1MX05BTUVfU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG52YXIgUEFUSCA9IFwibTE1LjUgMC45MzItNC4zIDQuMzggMTQuNSAxNC42LTE0LjUgMTQuNSA0LjMgNC40IDE0LjYtMTQuNiA0LjQtNC4zLTQuNC00LjQtMTQuNi0xNC42elwiO1xudmFyIFNJWkUgPSA0MDtcblxuZnVuY3Rpb24gQXJyb3dzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICB2YXIgb24gPSBldmVudC5vbixcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kLFxuICAgICAgZW1pdCA9IGV2ZW50LmVtaXQ7XG4gIHZhciBjbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzLFxuICAgICAgaTE4biA9IG9wdGlvbnMuaTE4bjtcbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcjtcbiAgdmFyIHBsYWNlaG9sZGVyID0gRWxlbWVudHMuYXJyb3dzLFxuICAgICAgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgdmFyIHdyYXBwZXIgPSBwbGFjZWhvbGRlcjtcbiAgdmFyIHByZXYgPSBFbGVtZW50cy5wcmV2O1xuICB2YXIgbmV4dCA9IEVsZW1lbnRzLm5leHQ7XG4gIHZhciBjcmVhdGVkO1xuICB2YXIgd3JhcHBlckNsYXNzZXM7XG4gIHZhciBhcnJvd3MgPSB7fTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgcmVtb3VudCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgZW5hYmxlZCA9IG9wdGlvbnMuYXJyb3dzO1xuXG4gICAgaWYgKGVuYWJsZWQgJiYgIShwcmV2ICYmIG5leHQpKSB7XG4gICAgICBjcmVhdGVBcnJvd3MoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICBhc3NpZ24oYXJyb3dzLCB7XG4gICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgIG5leHQ6IG5leHRcbiAgICAgIH0pO1xuICAgICAgZGlzcGxheSh3cmFwcGVyLCBlbmFibGVkID8gXCJcIiA6IFwibm9uZVwiKTtcbiAgICAgIGFkZENsYXNzKHdyYXBwZXIsIHdyYXBwZXJDbGFzc2VzID0gQ0xBU1NfQVJST1dTICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBsaXN0ZW4oKTtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEF0dHJpYnV0ZShbcHJldiwgbmV4dF0sIEFSSUFfQ09OVFJPTFMsIHRyYWNrLmlkKTtcbiAgICAgICAgZW1pdChFVkVOVF9BUlJPV1NfTU9VTlRFRCwgcHJldiwgbmV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBldmVudC5kZXN0cm95KCk7XG4gICAgcmVtb3ZlQ2xhc3Mod3JhcHBlciwgd3JhcHBlckNsYXNzZXMpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIHJlbW92ZShwbGFjZWhvbGRlciA/IFtwcmV2LCBuZXh0XSA6IHdyYXBwZXIpO1xuICAgICAgcHJldiA9IG5leHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoW3ByZXYsIG5leHRdLCBBTExfQVRUUklCVVRFUyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9NT1ZFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfU0NST0xMRUQsIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEXSwgdXBkYXRlKTtcbiAgICBiaW5kKG5leHQsIFwiY2xpY2tcIiwgYXBwbHkoZ28sIFwiPlwiKSk7XG4gICAgYmluZChwcmV2LCBcImNsaWNrXCIsIGFwcGx5KGdvLCBcIjxcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28oY29udHJvbCkge1xuICAgIENvbnRyb2xsZXIuZ28oY29udHJvbCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJvd3MoKSB7XG4gICAgd3JhcHBlciA9IHBsYWNlaG9sZGVyIHx8IGNyZWF0ZShcImRpdlwiLCBjbGFzc2VzLmFycm93cyk7XG4gICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgIG5leHQgPSBjcmVhdGVBcnJvdyhmYWxzZSk7XG4gICAgY3JlYXRlZCA9IHRydWU7XG4gICAgYXBwZW5kKHdyYXBwZXIsIFtwcmV2LCBuZXh0XSk7XG4gICAgIXBsYWNlaG9sZGVyICYmIGJlZm9yZSh3cmFwcGVyLCB0cmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJvdyhwcmV2Mikge1xuICAgIHZhciBhcnJvdyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiXCIgKyBjbGFzc2VzLmFycm93ICsgXCIgXCIgKyAocHJldjIgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHQpICsgXCJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHN2ZyB4bWxucz1cXFwiXCIgKyBYTUxfTkFNRV9TUEFDRSArIFwiXFxcIiB2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiIHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgaGVpZ2h0PVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCI+PHBhdGggZD1cXFwiXCIgKyAob3B0aW9ucy5hcnJvd1BhdGggfHwgUEFUSCkgKyBcIlxcXCIgLz5cIjtcbiAgICByZXR1cm4gcGFyc2VIdG1sKGFycm93KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUyLmluZGV4O1xuICAgICAgdmFyIHByZXZJbmRleCA9IENvbnRyb2xsZXIuZ2V0UHJldigpO1xuICAgICAgdmFyIG5leHRJbmRleCA9IENvbnRyb2xsZXIuZ2V0TmV4dCgpO1xuICAgICAgdmFyIHByZXZMYWJlbCA9IHByZXZJbmRleCA+IC0xICYmIGluZGV4IDwgcHJldkluZGV4ID8gaTE4bi5sYXN0IDogaTE4bi5wcmV2O1xuICAgICAgdmFyIG5leHRMYWJlbCA9IG5leHRJbmRleCA+IC0xICYmIGluZGV4ID4gbmV4dEluZGV4ID8gaTE4bi5maXJzdCA6IGkxOG4ubmV4dDtcbiAgICAgIHByZXYuZGlzYWJsZWQgPSBwcmV2SW5kZXggPCAwO1xuICAgICAgbmV4dC5kaXNhYmxlZCA9IG5leHRJbmRleCA8IDA7XG4gICAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9MQUJFTCwgcHJldkxhYmVsKTtcbiAgICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0xBQkVMLCBuZXh0TGFiZWwpO1xuICAgICAgZW1pdChFVkVOVF9BUlJPV1NfVVBEQVRFRCwgcHJldiwgbmV4dCwgcHJldkluZGV4LCBuZXh0SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYXJyb3dzOiBhcnJvd3MsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcbn1cblxudmFyIElOVEVSVkFMX0RBVEFfQVRUUklCVVRFID0gREFUQV9BVFRSSUJVVEUgKyBcIi1pbnRlcnZhbFwiO1xuXG5mdW5jdGlvbiBBdXRvcGxheShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U2Lm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTYuYmluZCxcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U2LmVtaXQ7XG5cbiAgdmFyIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKG9wdGlvbnMuaW50ZXJ2YWwsIFNwbGlkZTIuZ28uYmluZChTcGxpZGUyLCBcIj5cIiksIG9uQW5pbWF0aW9uRnJhbWUpO1xuICB2YXIgaXNQYXVzZWQgPSBpbnRlcnZhbC5pc1BhdXNlZDtcbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBfQ29tcG9uZW50czIkRWxlbWVudHM0ID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICByb290ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzNC5yb290LFxuICAgICAgdG9nZ2xlID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzNC50b2dnbGU7XG4gIHZhciBhdXRvcGxheSA9IG9wdGlvbnMuYXV0b3BsYXk7XG4gIHZhciBob3ZlcmVkO1xuICB2YXIgZm9jdXNlZDtcbiAgdmFyIHN0b3BwZWQgPSBhdXRvcGxheSA9PT0gXCJwYXVzZVwiO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgbGlzdGVuKCk7XG4gICAgICB0b2dnbGUgJiYgc2V0QXR0cmlidXRlKHRvZ2dsZSwgQVJJQV9DT05UUk9MUywgRWxlbWVudHMudHJhY2suaWQpO1xuICAgICAgc3RvcHBlZCB8fCBwbGF5KCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICBiaW5kKHJvb3QsIFwibW91c2VlbnRlciBtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhvdmVyZWQgPSBlLnR5cGUgPT09IFwibW91c2VlbnRlclwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uRm9jdXMpIHtcbiAgICAgIGJpbmQocm9vdCwgXCJmb2N1c2luIGZvY3Vzb3V0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvY3VzZWQgPSBlLnR5cGUgPT09IFwiZm9jdXNpblwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICBiaW5kKHRvZ2dsZSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3BwZWQgPyBwbGF5KCkgOiBwYXVzZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uKFtFVkVOVF9NT1ZFLCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1JFRlJFU0hdLCBpbnRlcnZhbC5yZXdpbmQpO1xuICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmIChpc1BhdXNlZCgpICYmIENvbXBvbmVudHMyLlNsaWRlcy5pc0Vub3VnaCgpKSB7XG4gICAgICBpbnRlcnZhbC5zdGFydCghb3B0aW9ucy5yZXNldFByb2dyZXNzKTtcbiAgICAgIGZvY3VzZWQgPSBob3ZlcmVkID0gc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BMQVkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKHN0b3ApIHtcbiAgICBpZiAoc3RvcCA9PT0gdm9pZCAwKSB7XG4gICAgICBzdG9wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdG9wcGVkID0gISFzdG9wO1xuICAgIHVwZGF0ZSgpO1xuXG4gICAgaWYgKCFpc1BhdXNlZCgpKSB7XG4gICAgICBpbnRlcnZhbC5wYXVzZSgpO1xuICAgICAgZW1pdChFVkVOVF9BVVRPUExBWV9QQVVTRSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXV0b1RvZ2dsZSgpIHtcbiAgICBpZiAoIXN0b3BwZWQpIHtcbiAgICAgIGhvdmVyZWQgfHwgZm9jdXNlZCA/IHBhdXNlKGZhbHNlKSA6IHBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgdG9nZ2xlQ2xhc3ModG9nZ2xlLCBDTEFTU19BQ1RJVkUsICFzdG9wcGVkKTtcbiAgICAgIHNldEF0dHJpYnV0ZSh0b2dnbGUsIEFSSUFfTEFCRUwsIG9wdGlvbnMuaTE4bltzdG9wcGVkID8gXCJwbGF5XCIgOiBcInBhdXNlXCJdKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkFuaW1hdGlvbkZyYW1lKHJhdGUpIHtcbiAgICB2YXIgYmFyID0gRWxlbWVudHMuYmFyO1xuICAgIGJhciAmJiBzdHlsZShiYXIsIFwid2lkdGhcIiwgcmF0ZSAqIDEwMCArIFwiJVwiKTtcbiAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcsIHJhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKGluZGV4KSB7XG4gICAgdmFyIFNsaWRlID0gQ29tcG9uZW50czIuU2xpZGVzLmdldEF0KGluZGV4KTtcbiAgICBpbnRlcnZhbC5zZXQoU2xpZGUgJiYgK2dldEF0dHJpYnV0ZShTbGlkZS5zbGlkZSwgSU5URVJWQUxfREFUQV9BVFRSSUJVVEUpIHx8IG9wdGlvbnMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogaW50ZXJ2YWwuY2FuY2VsLFxuICAgIHBsYXk6IHBsYXksXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGlzUGF1c2VkOiBpc1BhdXNlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBDb3ZlcihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U3Lm9uO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChvcHRpb25zLmNvdmVyKSB7XG4gICAgICBvbihFVkVOVF9MQVpZTE9BRF9MT0FERUQsIGFwcGx5KHRvZ2dsZSwgdHJ1ZSkpO1xuICAgICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBhcHBseShjb3ZlciwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdmVyKGNvdmVyMikge1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIGltZyA9IGNoaWxkKFNsaWRlLmNvbnRhaW5lciB8fCBTbGlkZS5zbGlkZSwgXCJpbWdcIik7XG5cbiAgICAgIGlmIChpbWcgJiYgaW1nLnNyYykge1xuICAgICAgICB0b2dnbGUoY292ZXIyLCBpbWcsIFNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShjb3ZlcjIsIGltZywgU2xpZGUpIHtcbiAgICBTbGlkZS5zdHlsZShcImJhY2tncm91bmRcIiwgY292ZXIyID8gXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybChcXFwiXCIgKyBpbWcuc3JjICsgXCJcXFwiKVwiIDogXCJcIiwgdHJ1ZSk7XG4gICAgZGlzcGxheShpbWcsIGNvdmVyMiA/IFwibm9uZVwiIDogXCJcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBhcHBseShjb3ZlciwgZmFsc2UpXG4gIH07XG59XG5cbnZhciBCT1VOQ0VfRElGRl9USFJFU0hPTEQgPSAxMDtcbnZhciBCT1VOQ0VfRFVSQVRJT04gPSA2MDA7XG52YXIgRlJJQ1RJT05fRkFDVE9SID0gMC42O1xudmFyIEJBU0VfVkVMT0NJVFkgPSAxLjU7XG52YXIgTUlOX0RVUkFUSU9OID0gODAwO1xuXG5mdW5jdGlvbiBTY3JvbGwoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTggPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlOC5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U4LmVtaXQ7XG5cbiAgdmFyIHNldCA9IFNwbGlkZTIuc3RhdGUuc2V0O1xuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmU7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBnZXRMaW1pdCA9IE1vdmUuZ2V0TGltaXQsXG4gICAgICBleGNlZWRlZExpbWl0ID0gTW92ZS5leGNlZWRlZExpbWl0LFxuICAgICAgdHJhbnNsYXRlID0gTW92ZS50cmFuc2xhdGU7XG4gIHZhciBpc1NsaWRlID0gU3BsaWRlMi5pcyhTTElERSk7XG4gIHZhciBpbnRlcnZhbDtcbiAgdmFyIGNhbGxiYWNrO1xuICB2YXIgZnJpY3Rpb24gPSAxO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX01PVkUsIGNsZWFyKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGNhbmNlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBvblNjcm9sbGVkLCBub0NvbnN0cmFpbikge1xuICAgIHZhciBmcm9tID0gZ2V0UG9zaXRpb24oKTtcbiAgICBjbGVhcigpO1xuXG4gICAgaWYgKHNuYXAgJiYgKCFpc1NsaWRlIHx8ICFleGNlZWRlZExpbWl0KCkpKSB7XG4gICAgICB2YXIgc2l6ZSA9IENvbXBvbmVudHMyLkxheW91dC5zbGlkZXJTaXplKCk7XG4gICAgICB2YXIgb2Zmc2V0ID0gc2lnbihkZXN0aW5hdGlvbikgKiBzaXplICogZmxvb3IoYWJzKGRlc3RpbmF0aW9uKSAvIHNpemUpIHx8IDA7XG4gICAgICBkZXN0aW5hdGlvbiA9IE1vdmUudG9Qb3NpdGlvbihDb21wb25lbnRzMi5Db250cm9sbGVyLnRvRGVzdChkZXN0aW5hdGlvbiAlIHNpemUpKSArIG9mZnNldDtcbiAgICB9XG5cbiAgICB2YXIgbm9EaXN0YW5jZSA9IGFwcHJveGltYXRlbHlFcXVhbChmcm9tLCBkZXN0aW5hdGlvbiwgMSk7XG4gICAgZnJpY3Rpb24gPSAxO1xuICAgIGR1cmF0aW9uID0gbm9EaXN0YW5jZSA/IDAgOiBkdXJhdGlvbiB8fCBtYXgoYWJzKGRlc3RpbmF0aW9uIC0gZnJvbSkgLyBCQVNFX1ZFTE9DSVRZLCBNSU5fRFVSQVRJT04pO1xuICAgIGNhbGxiYWNrID0gb25TY3JvbGxlZDtcbiAgICBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiwgb25FbmQsIGFwcGx5KHVwZGF0ZSwgZnJvbSwgZGVzdGluYXRpb24sIG5vQ29uc3RyYWluKSwgMSk7XG4gICAgc2V0KFNDUk9MTElORyk7XG4gICAgZW1pdChFVkVOVF9TQ1JPTEwpO1xuICAgIGludGVydmFsLnN0YXJ0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICBzZXQoSURMRSk7XG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICBlbWl0KEVWRU5UX1NDUk9MTEVEKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShmcm9tLCB0bywgbm9Db25zdHJhaW4sIHJhdGUpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICAgIHZhciB0YXJnZXQgPSBmcm9tICsgKHRvIC0gZnJvbSkgKiBlYXNpbmcocmF0ZSk7XG4gICAgdmFyIGRpZmYgPSAodGFyZ2V0IC0gcG9zaXRpb24pICogZnJpY3Rpb247XG4gICAgdHJhbnNsYXRlKHBvc2l0aW9uICsgZGlmZik7XG5cbiAgICBpZiAoaXNTbGlkZSAmJiAhbm9Db25zdHJhaW4gJiYgZXhjZWVkZWRMaW1pdCgpKSB7XG4gICAgICBmcmljdGlvbiAqPSBGUklDVElPTl9GQUNUT1I7XG5cbiAgICAgIGlmIChhYnMoZGlmZikgPCBCT1VOQ0VfRElGRl9USFJFU0hPTEQpIHtcbiAgICAgICAgc2Nyb2xsKGdldExpbWl0KGV4Y2VlZGVkTGltaXQodHJ1ZSkpLCBCT1VOQ0VfRFVSQVRJT04sIGZhbHNlLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKGludGVydmFsKSB7XG4gICAgICBpbnRlcnZhbC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKGludGVydmFsICYmICFpbnRlcnZhbC5pc1BhdXNlZCgpKSB7XG4gICAgICBjbGVhcigpO1xuICAgICAgb25FbmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlYXNpbmcodCkge1xuICAgIHZhciBlYXNpbmdGdW5jID0gb3B0aW9ucy5lYXNpbmdGdW5jO1xuICAgIHJldHVybiBlYXNpbmdGdW5jID8gZWFzaW5nRnVuYyh0KSA6IDEgLSBNYXRoLnBvdygxIC0gdCwgNCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBjbGVhcixcbiAgICBzY3JvbGw6IHNjcm9sbCxcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufVxuXG52YXIgU0NST0xMX0xJU1RFTkVSX09QVElPTlMgPSB7XG4gIHBhc3NpdmU6IGZhbHNlLFxuICBjYXB0dXJlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBEcmFnKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U5ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTkub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlOS5lbWl0LFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTkuYmluZCxcbiAgICAgIHVuYmluZCA9IF9FdmVudEludGVyZmFjZTkudW5iaW5kO1xuXG4gIHZhciBzdGF0ZSA9IFNwbGlkZTIuc3RhdGU7XG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZSxcbiAgICAgIFNjcm9sbCA9IENvbXBvbmVudHMyLlNjcm9sbCxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyLFxuICAgICAgdHJhY2sgPSBDb21wb25lbnRzMi5FbGVtZW50cy50cmFjayxcbiAgICAgIHJlZHVjZSA9IENvbXBvbmVudHMyLk1lZGlhLnJlZHVjZTtcbiAgdmFyIF9Db21wb25lbnRzMiREaXJlY3RpbzIgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24sXG4gICAgICByZXNvbHZlID0gX0NvbXBvbmVudHMyJERpcmVjdGlvMi5yZXNvbHZlLFxuICAgICAgb3JpZW50ID0gX0NvbXBvbmVudHMyJERpcmVjdGlvMi5vcmllbnQ7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBleGNlZWRlZExpbWl0ID0gTW92ZS5leGNlZWRlZExpbWl0O1xuICB2YXIgYmFzZVBvc2l0aW9uO1xuICB2YXIgYmFzZUV2ZW50O1xuICB2YXIgcHJldkJhc2VFdmVudDtcbiAgdmFyIGlzRnJlZTtcbiAgdmFyIGRyYWdnaW5nO1xuICB2YXIgZXhjZWVkZWQgPSBmYWxzZTtcbiAgdmFyIGNsaWNrUHJldmVudGVkO1xuICB2YXIgZGlzYWJsZWQ7XG4gIHZhciB0YXJnZXQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgbm9vcCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfVVBfRVZFTlRTLCBub29wLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9ET1dOX0VWRU5UUywgb25Qb2ludGVyRG93biwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFwiY2xpY2tcIiwgb25DbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICAgIGJpbmQodHJhY2ssIFwiZHJhZ3N0YXJ0XCIsIHByZXZlbnQpO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVEXSwgaW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBkcmFnID0gb3B0aW9ucy5kcmFnO1xuICAgIGRpc2FibGUoIWRyYWcpO1xuICAgIGlzRnJlZSA9IGRyYWcgPT09IFwiZnJlZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlKSB7XG4gICAgY2xpY2tQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHZhciBpc1RvdWNoID0gaXNUb3VjaEV2ZW50KGUpO1xuXG4gICAgICBpZiAoaXNEcmFnZ2FibGUoZS50YXJnZXQpICYmIChpc1RvdWNoIHx8ICFlLmJ1dHRvbikpIHtcbiAgICAgICAgaWYgKCFDb250cm9sbGVyLmlzQnVzeSgpKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gaXNUb3VjaCA/IHRyYWNrIDogd2luZG93O1xuICAgICAgICAgIGRyYWdnaW5nID0gc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSk7XG4gICAgICAgICAgcHJldkJhc2VFdmVudCA9IG51bGw7XG4gICAgICAgICAgYmluZCh0YXJnZXQsIFBPSU5URVJfTU9WRV9FVkVOVFMsIG9uUG9pbnRlck1vdmUsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICAgICAgICBiaW5kKHRhcmdldCwgUE9JTlRFUl9VUF9FVkVOVFMsIG9uUG9pbnRlclVwLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgICAgICAgTW92ZS5jYW5jZWwoKTtcbiAgICAgICAgICBTY3JvbGwuY2FuY2VsKCk7XG4gICAgICAgICAgc2F2ZShlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyTW92ZShlKSB7XG4gICAgaWYgKCFzdGF0ZS5pcyhEUkFHR0lORykpIHtcbiAgICAgIHN0YXRlLnNldChEUkFHR0lORyk7XG4gICAgICBlbWl0KEVWRU5UX0RSQUcpO1xuICAgIH1cblxuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBNb3ZlLnRyYW5zbGF0ZShiYXNlUG9zaXRpb24gKyBjb25zdHJhaW4oZGlmZkNvb3JkKGUpKSk7XG4gICAgICAgIHZhciBleHBpcmVkID0gZGlmZlRpbWUoZSkgPiBMT0dfSU5URVJWQUw7XG4gICAgICAgIHZhciBoYXNFeGNlZWRlZCA9IGV4Y2VlZGVkICE9PSAoZXhjZWVkZWQgPSBleGNlZWRlZExpbWl0KCkpO1xuXG4gICAgICAgIGlmIChleHBpcmVkIHx8IGhhc0V4Y2VlZGVkKSB7XG4gICAgICAgICAgc2F2ZShlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgZW1pdChFVkVOVF9EUkFHR0lORyk7XG4gICAgICAgIHByZXZlbnQoZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2xpZGVyRGlyZWN0aW9uKGUpKSB7XG4gICAgICAgIGRyYWdnaW5nID0gc2hvdWxkU3RhcnQoZSk7XG4gICAgICAgIHByZXZlbnQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyVXAoZSkge1xuICAgIGlmIChzdGF0ZS5pcyhEUkFHR0lORykpIHtcbiAgICAgIHN0YXRlLnNldChJRExFKTtcbiAgICAgIGVtaXQoRVZFTlRfRFJBR0dFRCk7XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBtb3ZlKGUpO1xuICAgICAgcHJldmVudChlKTtcbiAgICB9XG5cbiAgICB1bmJpbmQodGFyZ2V0LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBvblBvaW50ZXJNb3ZlKTtcbiAgICB1bmJpbmQodGFyZ2V0LCBQT0lOVEVSX1VQX0VWRU5UUywgb25Qb2ludGVyVXApO1xuICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGNsaWNrUHJldmVudGVkKSB7XG4gICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmUoZSkge1xuICAgIHByZXZCYXNlRXZlbnQgPSBiYXNlRXZlbnQ7XG4gICAgYmFzZUV2ZW50ID0gZTtcbiAgICBiYXNlUG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgdmFyIHZlbG9jaXR5ID0gY29tcHV0ZVZlbG9jaXR5KGUpO1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IGNvbXB1dGVEZXN0aW5hdGlvbih2ZWxvY2l0eSk7XG4gICAgdmFyIHJld2luZCA9IG9wdGlvbnMucmV3aW5kICYmIG9wdGlvbnMucmV3aW5kQnlEcmFnO1xuICAgIHJlZHVjZShmYWxzZSk7XG5cbiAgICBpZiAoaXNGcmVlKSB7XG4gICAgICBDb250cm9sbGVyLnNjcm9sbChkZXN0aW5hdGlvbiwgMCwgb3B0aW9ucy5zbmFwKTtcbiAgICB9IGVsc2UgaWYgKFNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIENvbnRyb2xsZXIuZ28ob3JpZW50KHNpZ24odmVsb2NpdHkpKSA8IDAgPyByZXdpbmQgPyBcIjxcIiA6IFwiLVwiIDogcmV3aW5kID8gXCI+XCIgOiBcIitcIik7XG4gICAgfSBlbHNlIGlmIChTcGxpZGUyLmlzKFNMSURFKSAmJiBleGNlZWRlZCAmJiByZXdpbmQpIHtcbiAgICAgIENvbnRyb2xsZXIuZ28oZXhjZWVkZWRMaW1pdCh0cnVlKSA/IFwiPlwiIDogXCI8XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDb250cm9sbGVyLmdvKENvbnRyb2xsZXIudG9EZXN0KGRlc3RpbmF0aW9uKSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmVkdWNlKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU3RhcnQoZSkge1xuICAgIHZhciB0aHJlc2hvbGRzID0gb3B0aW9ucy5kcmFnTWluVGhyZXNob2xkO1xuICAgIHZhciBpc09iaiA9IGlzT2JqZWN0KHRocmVzaG9sZHMpO1xuICAgIHZhciBtb3VzZSA9IGlzT2JqICYmIHRocmVzaG9sZHMubW91c2UgfHwgMDtcbiAgICB2YXIgdG91Y2ggPSAoaXNPYmogPyB0aHJlc2hvbGRzLnRvdWNoIDogK3RocmVzaG9sZHMpIHx8IDEwO1xuICAgIHJldHVybiBhYnMoZGlmZkNvb3JkKGUpKSA+IChpc1RvdWNoRXZlbnQoZSkgPyB0b3VjaCA6IG1vdXNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2xpZGVyRGlyZWN0aW9uKGUpIHtcbiAgICByZXR1cm4gYWJzKGRpZmZDb29yZChlKSkgPiBhYnMoZGlmZkNvb3JkKGUsIHRydWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVWZWxvY2l0eShlKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoTE9PUCkgfHwgIWV4Y2VlZGVkKSB7XG4gICAgICB2YXIgdGltZSA9IGRpZmZUaW1lKGUpO1xuXG4gICAgICBpZiAodGltZSAmJiB0aW1lIDwgTE9HX0lOVEVSVkFMKSB7XG4gICAgICAgIHJldHVybiBkaWZmQ29vcmQoZSkgLyB0aW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIGdldFBvc2l0aW9uKCkgKyBzaWduKHZlbG9jaXR5KSAqIG1pbihhYnModmVsb2NpdHkpICogKG9wdGlvbnMuZmxpY2tQb3dlciB8fCA2MDApLCBpc0ZyZWUgPyBJbmZpbml0eSA6IENvbXBvbmVudHMyLkxheW91dC5saXN0U2l6ZSgpICogKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaWZmQ29vcmQoZSwgb3J0aG9nb25hbCkge1xuICAgIHJldHVybiBjb29yZE9mKGUsIG9ydGhvZ29uYWwpIC0gY29vcmRPZihnZXRCYXNlRXZlbnQoZSksIG9ydGhvZ29uYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlmZlRpbWUoZSkge1xuICAgIHJldHVybiB0aW1lT2YoZSkgLSB0aW1lT2YoZ2V0QmFzZUV2ZW50KGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJhc2VFdmVudChlKSB7XG4gICAgcmV0dXJuIGJhc2VFdmVudCA9PT0gZSAmJiBwcmV2QmFzZUV2ZW50IHx8IGJhc2VFdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvb3JkT2YoZSwgb3J0aG9nb25hbCkge1xuICAgIHJldHVybiAoaXNUb3VjaEV2ZW50KGUpID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpW1wicGFnZVwiICsgcmVzb2x2ZShvcnRob2dvbmFsID8gXCJZXCIgOiBcIlhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluKGRpZmYpIHtcbiAgICByZXR1cm4gZGlmZiAvIChleGNlZWRlZCAmJiBTcGxpZGUyLmlzKFNMSURFKSA/IEZSSUNUSU9OIDogMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0RyYWdnYWJsZSh0YXJnZXQyKSB7XG4gICAgdmFyIG5vRHJhZyA9IG9wdGlvbnMubm9EcmFnO1xuICAgIHJldHVybiAhbWF0Y2hlcyh0YXJnZXQyLCBcIi5cIiArIENMQVNTX1BBR0lOQVRJT05fUEFHRSArIFwiLCAuXCIgKyBDTEFTU19BUlJPVykgJiYgKCFub0RyYWcgfHwgIW1hdGNoZXModGFyZ2V0Miwgbm9EcmFnKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RvdWNoRXZlbnQoZSkge1xuICAgIHJldHVybiB0eXBlb2YgVG91Y2hFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSh2YWx1ZSkge1xuICAgIGRpc2FibGVkID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgIGlzRHJhZ2dpbmc6IGlzRHJhZ2dpbmdcbiAgfTtcbn1cblxudmFyIE5PUk1BTElaQVRJT05fTUFQID0ge1xuICBTcGFjZWJhcjogXCIgXCIsXG4gIFJpZ2h0OiBBUlJPV19SSUdIVCxcbiAgTGVmdDogQVJST1dfTEVGVCxcbiAgVXA6IEFSUk9XX1VQLFxuICBEb3duOiBBUlJPV19ET1dOXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gIGtleSA9IGlzU3RyaW5nKGtleSkgPyBrZXkgOiBrZXkua2V5O1xuICByZXR1cm4gTk9STUFMSVpBVElPTl9NQVBba2V5XSB8fCBrZXk7XG59XG5cbnZhciBLRVlCT0FSRF9FVkVOVCA9IFwia2V5ZG93blwiO1xuXG5mdW5jdGlvbiBLZXlib2FyZChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTAgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTAub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMTAuYmluZCxcbiAgICAgIHVuYmluZCA9IF9FdmVudEludGVyZmFjZTEwLnVuYmluZDtcblxuICB2YXIgcm9vdCA9IFNwbGlkZTIucm9vdDtcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIHRhcmdldDtcbiAgdmFyIGRpc2FibGVkO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBpbml0KTtcbiAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIga2V5Ym9hcmQgPSBvcHRpb25zLmtleWJvYXJkO1xuXG4gICAgaWYgKGtleWJvYXJkKSB7XG4gICAgICB0YXJnZXQgPSBrZXlib2FyZCA9PT0gXCJnbG9iYWxcIiA/IHdpbmRvdyA6IHJvb3Q7XG4gICAgICBiaW5kKHRhcmdldCwgS0VZQk9BUkRfRVZFTlQsIG9uS2V5ZG93bik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKHZhbHVlKSB7XG4gICAgZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZSgpIHtcbiAgICB2YXIgX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc2FibGVkID0gX2Rpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB2YXIga2V5ID0gbm9ybWFsaXplS2V5KGUpO1xuXG4gICAgICBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX0xFRlQpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI8XCIpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfUklHSFQpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgZGlzYWJsZTogZGlzYWJsZVxuICB9O1xufVxuXG52YXIgU1JDX0RBVEFfQVRUUklCVVRFID0gREFUQV9BVFRSSUJVVEUgKyBcIi1sYXp5XCI7XG52YXIgU1JDU0VUX0RBVEFfQVRUUklCVVRFID0gU1JDX0RBVEFfQVRUUklCVVRFICsgXCItc3Jjc2V0XCI7XG52YXIgSU1BR0VfU0VMRUNUT1IgPSBcIltcIiArIFNSQ19EQVRBX0FUVFJJQlVURSArIFwiXSwgW1wiICsgU1JDU0VUX0RBVEFfQVRUUklCVVRFICsgXCJdXCI7XG5cbmZ1bmN0aW9uIExhenlMb2FkKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMS5vbixcbiAgICAgIG9mZiA9IF9FdmVudEludGVyZmFjZTExLm9mZixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMS5iaW5kLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTExLmVtaXQ7XG5cbiAgdmFyIGlzU2VxdWVudGlhbCA9IG9wdGlvbnMubGF6eUxvYWQgPT09IFwic2VxdWVudGlhbFwiO1xuICB2YXIgZXZlbnRzID0gW0VWRU5UX01PVkVELCBFVkVOVF9TQ1JPTExFRF07XG4gIHZhciBlbnRyaWVzID0gW107XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKG9wdGlvbnMubGF6eUxvYWQpIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIG9uKEVWRU5UX1JFRlJFU0gsIGluaXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZW1wdHkoZW50cmllcyk7XG4gICAgcmVnaXN0ZXIoKTtcblxuICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgIGxvYWROZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZihldmVudHMpO1xuICAgICAgb24oZXZlbnRzLCBjaGVjayk7XG4gICAgICBjaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgcXVlcnlBbGwoU2xpZGUuc2xpZGUsIElNQUdFX1NFTEVDVE9SKS5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgdmFyIHNyYyA9IGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX0FUVFJJQlVURSk7XG4gICAgICAgIHZhciBzcmNzZXQgPSBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuXG4gICAgICAgIGlmIChzcmMgIT09IGltZy5zcmMgfHwgc3Jjc2V0ICE9PSBpbWcuc3Jjc2V0KSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3Nlcy5zcGlubmVyO1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBpbWcucGFyZW50RWxlbWVudDtcbiAgICAgICAgICB2YXIgc3Bpbm5lciA9IGNoaWxkKHBhcmVudCwgXCIuXCIgKyBjbGFzc05hbWUpIHx8IGNyZWF0ZShcInNwYW5cIiwgY2xhc3NOYW1lLCBwYXJlbnQpO1xuICAgICAgICAgIGVudHJpZXMucHVzaChbaW1nLCBTbGlkZSwgc3Bpbm5lcl0pO1xuICAgICAgICAgIGltZy5zcmMgfHwgZGlzcGxheShpbWcsIFwibm9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICBlbnRyaWVzID0gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9IG9wdGlvbnMucGVyUGFnZSAqICgob3B0aW9ucy5wcmVsb2FkUGFnZXMgfHwgMSkgKyAxKSAtIDE7XG4gICAgICByZXR1cm4gZGF0YVsxXS5pc1dpdGhpbihTcGxpZGUyLmluZGV4LCBkaXN0YW5jZSkgPyBsb2FkKGRhdGEpIDogdHJ1ZTtcbiAgICB9KTtcbiAgICBlbnRyaWVzLmxlbmd0aCB8fCBvZmYoZXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQoZGF0YSkge1xuICAgIHZhciBpbWcgPSBkYXRhWzBdO1xuICAgIGFkZENsYXNzKGRhdGFbMV0uc2xpZGUsIENMQVNTX0xPQURJTkcpO1xuICAgIGJpbmQoaW1nLCBcImxvYWQgZXJyb3JcIiwgYXBwbHkob25Mb2FkLCBkYXRhKSk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgXCJzcmNcIiwgZ2V0QXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKSk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgXCJzcmNzZXRcIiwgZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfQVRUUklCVVRFKSk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Mb2FkKGRhdGEsIGUpIHtcbiAgICB2YXIgaW1nID0gZGF0YVswXSxcbiAgICAgICAgU2xpZGUgPSBkYXRhWzFdO1xuICAgIHJlbW92ZUNsYXNzKFNsaWRlLnNsaWRlLCBDTEFTU19MT0FESU5HKTtcblxuICAgIGlmIChlLnR5cGUgIT09IFwiZXJyb3JcIikge1xuICAgICAgcmVtb3ZlKGRhdGFbMl0pO1xuICAgICAgZGlzcGxheShpbWcsIFwiXCIpO1xuICAgICAgZW1pdChFVkVOVF9MQVpZTE9BRF9MT0FERUQsIGltZywgU2xpZGUpO1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkUpO1xuICAgIH1cblxuICAgIGlzU2VxdWVudGlhbCAmJiBsb2FkTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZE5leHQoKSB7XG4gICAgZW50cmllcy5sZW5ndGggJiYgbG9hZChlbnRyaWVzLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogYXBwbHkoZW1wdHksIGVudHJpZXMpLFxuICAgIGNoZWNrOiBjaGVja1xuICB9O1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICB2YXIgb24gPSBldmVudC5vbixcbiAgICAgIGVtaXQgPSBldmVudC5lbWl0LFxuICAgICAgYmluZCA9IGV2ZW50LmJpbmQ7XG4gIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXMsXG4gICAgICBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXI7XG4gIHZhciBoYXNGb2N1cyA9IENvbnRyb2xsZXIuaGFzRm9jdXMsXG4gICAgICBnZXRJbmRleCA9IENvbnRyb2xsZXIuZ2V0SW5kZXgsXG4gICAgICBnbyA9IENvbnRyb2xsZXIuZ287XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBwbGFjZWhvbGRlciA9IEVsZW1lbnRzLnBhZ2luYXRpb247XG4gIHZhciBpdGVtcyA9IFtdO1xuICB2YXIgbGlzdDtcbiAgdmFyIHBhZ2luYXRpb25DbGFzc2VzO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfRU5EX0lOREVYX0NIQU5HRURdLCBtb3VudCk7XG4gICAgdmFyIGVuYWJsZWQgPSBvcHRpb25zLnBhZ2luYXRpb247XG4gICAgcGxhY2Vob2xkZXIgJiYgZGlzcGxheShwbGFjZWhvbGRlciwgZW5hYmxlZCA/IFwiXCIgOiBcIm5vbmVcIik7XG5cbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgb24oW0VWRU5UX01PVkUsIEVWRU5UX1NDUk9MTCwgRVZFTlRfU0NST0xMRURdLCB1cGRhdGUpO1xuICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwge1xuICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgIH0sIGdldEF0KFNwbGlkZTIuaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICByZW1vdmUocGxhY2Vob2xkZXIgPyBzbGljZShsaXN0LmNoaWxkcmVuKSA6IGxpc3QpO1xuICAgICAgcmVtb3ZlQ2xhc3MobGlzdCwgcGFnaW5hdGlvbkNsYXNzZXMpO1xuICAgICAgZW1wdHkoaXRlbXMpO1xuICAgICAgbGlzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gU3BsaWRlMi5sZW5ndGg7XG4gICAgdmFyIGNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMsXG4gICAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG4sXG4gICAgICAgIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgdmFyIG1heCA9IGhhc0ZvY3VzKCkgPyBDb250cm9sbGVyLmdldEVuZCgpICsgMSA6IGNlaWwobGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgbGlzdCA9IHBsYWNlaG9sZGVyIHx8IGNyZWF0ZShcInVsXCIsIGNsYXNzZXMucGFnaW5hdGlvbiwgRWxlbWVudHMudHJhY2sucGFyZW50RWxlbWVudCk7XG4gICAgYWRkQ2xhc3MobGlzdCwgcGFnaW5hdGlvbkNsYXNzZXMgPSBDTEFTU19QQUdJTkFUSU9OICsgXCItLVwiICsgZ2V0RGlyZWN0aW9uKCkpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBST0xFLCBcInRhYmxpc3RcIik7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIEFSSUFfTEFCRUwsIGkxOG4uc2VsZWN0KTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgQVJJQV9PUklFTlRBVElPTiwgZ2V0RGlyZWN0aW9uKCkgPT09IFRUQiA/IFwidmVydGljYWxcIiA6IFwiXCIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgdmFyIGxpID0gY3JlYXRlKFwibGlcIiwgbnVsbCwgbGlzdCk7XG4gICAgICB2YXIgYnV0dG9uID0gY3JlYXRlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMucGFnZSxcbiAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgfSwgbGkpO1xuICAgICAgdmFyIGNvbnRyb2xzID0gU2xpZGVzLmdldEluKGkpLm1hcChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLnNsaWRlLmlkO1xuICAgICAgfSk7XG4gICAgICB2YXIgdGV4dCA9ICFoYXNGb2N1cygpICYmIHBlclBhZ2UgPiAxID8gaTE4bi5wYWdlWCA6IGkxOG4uc2xpZGVYO1xuICAgICAgYmluZChidXR0b24sIFwiY2xpY2tcIiwgYXBwbHkob25DbGljaywgaSkpO1xuXG4gICAgICBpZiAob3B0aW9ucy5wYWdpbmF0aW9uS2V5Ym9hcmQpIHtcbiAgICAgICAgYmluZChidXR0b24sIFwia2V5ZG93blwiLCBhcHBseShvbktleWRvd24sIGkpKTtcbiAgICAgIH1cblxuICAgICAgc2V0QXR0cmlidXRlKGxpLCBST0xFLCBcInByZXNlbnRhdGlvblwiKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIFJPTEUsIFwidGFiXCIpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMuam9pbihcIiBcIikpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9MQUJFTCwgZm9ybWF0KHRleHQsIGkgKyAxKSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBUQUJfSU5ERVgsIC0xKTtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBsaTogbGksXG4gICAgICAgIGJ1dHRvbjogYnV0dG9uLFxuICAgICAgICBwYWdlOiBpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKHBhZ2UpIHtcbiAgICBnbyhcIj5cIiArIHBhZ2UsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duKHBhZ2UsIGUpIHtcbiAgICB2YXIgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgIHZhciBrZXkgPSBub3JtYWxpemVLZXkoZSk7XG4gICAgdmFyIGRpciA9IGdldERpcmVjdGlvbigpO1xuICAgIHZhciBuZXh0UGFnZSA9IC0xO1xuXG4gICAgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19SSUdIVCwgZmFsc2UsIGRpcikpIHtcbiAgICAgIG5leHRQYWdlID0gKytwYWdlICUgbGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX0xFRlQsIGZhbHNlLCBkaXIpKSB7XG4gICAgICBuZXh0UGFnZSA9ICgtLXBhZ2UgKyBsZW5ndGgpICUgbGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIkhvbWVcIikge1xuICAgICAgbmV4dFBhZ2UgPSAwO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIkVuZFwiKSB7XG4gICAgICBuZXh0UGFnZSA9IGxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSBpdGVtc1tuZXh0UGFnZV07XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgZm9jdXMoaXRlbS5idXR0b24pO1xuICAgICAgZ28oXCI+XCIgKyBuZXh0UGFnZSk7XG4gICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5wYWdpbmF0aW9uRGlyZWN0aW9uIHx8IG9wdGlvbnMuZGlyZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaXRlbXNbQ29udHJvbGxlci50b1BhZ2UoaW5kZXgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgcHJldiA9IGdldEF0KGdldEluZGV4KHRydWUpKTtcbiAgICB2YXIgY3VyciA9IGdldEF0KGdldEluZGV4KCkpO1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHZhciBidXR0b24gPSBwcmV2LmJ1dHRvbjtcbiAgICAgIHJlbW92ZUNsYXNzKGJ1dHRvbiwgQ0xBU1NfQUNUSVZFKTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShidXR0b24sIEFSSUFfU0VMRUNURUQpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgVEFCX0lOREVYLCAtMSk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnIpIHtcbiAgICAgIHZhciBfYnV0dG9uID0gY3Vyci5idXR0b247XG4gICAgICBhZGRDbGFzcyhfYnV0dG9uLCBDTEFTU19BQ1RJVkUpO1xuICAgICAgc2V0QXR0cmlidXRlKF9idXR0b24sIEFSSUFfU0VMRUNURUQsIHRydWUpO1xuICAgICAgc2V0QXR0cmlidXRlKF9idXR0b24sIFRBQl9JTkRFWCwgXCJcIik7XG4gICAgfVxuXG4gICAgZW1pdChFVkVOVF9QQUdJTkFUSU9OX1VQREFURUQsIHtcbiAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICBpdGVtczogaXRlbXNcbiAgICB9LCBwcmV2LCBjdXJyKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGl0ZW1zLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIGdldEF0OiBnZXRBdCxcbiAgICB1cGRhdGU6IHVwZGF0ZVxuICB9O1xufVxuXG52YXIgVFJJR0dFUl9LRVlTID0gW1wiIFwiLCBcIkVudGVyXCJdO1xuXG5mdW5jdGlvbiBTeW5jKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBpc05hdmlnYXRpb24gPSBvcHRpb25zLmlzTmF2aWdhdGlvbixcbiAgICAgIHNsaWRlRm9jdXMgPSBvcHRpb25zLnNsaWRlRm9jdXM7XG4gIHZhciBldmVudHMgPSBbXTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBTcGxpZGUyLnNwbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBpZiAoIXRhcmdldC5pc1BhcmVudCkge1xuICAgICAgICBzeW5jKFNwbGlkZTIsIHRhcmdldC5zcGxpZGUpO1xuICAgICAgICBzeW5jKHRhcmdldC5zcGxpZGUsIFNwbGlkZTIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgbmF2aWdhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KGV2ZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luYyhzcGxpZGUsIHRhcmdldCkge1xuICAgIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKHNwbGlkZSk7XG4gICAgZXZlbnQub24oRVZFTlRfTU9WRSwgZnVuY3Rpb24gKGluZGV4LCBwcmV2LCBkZXN0KSB7XG4gICAgICB0YXJnZXQuZ28odGFyZ2V0LmlzKExPT1ApID8gZGVzdCA6IGluZGV4KTtcbiAgICB9KTtcbiAgICBldmVudHMucHVzaChldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBuYXZpZ2F0ZSgpIHtcbiAgICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgICB2YXIgb24gPSBldmVudC5vbjtcbiAgICBvbihFVkVOVF9DTElDSywgb25DbGljayk7XG4gICAgb24oRVZFTlRfU0xJREVfS0VZRE9XTiwgb25LZXlkb3duKTtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfVVBEQVRFRF0sIHVwZGF0ZSk7XG4gICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIGV2ZW50LmVtaXQoRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBTcGxpZGUyLnNwbGlkZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHNldEF0dHJpYnV0ZShDb21wb25lbnRzMi5FbGVtZW50cy5saXN0LCBBUklBX09SSUVOVEFUSU9OLCBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCID8gXCJ2ZXJ0aWNhbFwiIDogXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKFNsaWRlKSB7XG4gICAgU3BsaWRlMi5nbyhTbGlkZS5pbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24oU2xpZGUsIGUpIHtcbiAgICBpZiAoaW5jbHVkZXMoVFJJR0dFUl9LRVlTLCBub3JtYWxpemVLZXkoZSkpKSB7XG4gICAgICBvbkNsaWNrKFNsaWRlKTtcbiAgICAgIHByZXZlbnQoZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR1cDogYXBwbHkoQ29tcG9uZW50czIuTWVkaWEuc2V0LCB7XG4gICAgICBzbGlkZUZvY3VzOiBpc1VuZGVmaW5lZChzbGlkZUZvY3VzKSA/IGlzTmF2aWdhdGlvbiA6IHNsaWRlRm9jdXNcbiAgICB9LCB0cnVlKSxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZW1vdW50OiByZW1vdW50XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdoZWVsKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTEyLmJpbmQ7XG5cbiAgdmFyIGxhc3RUaW1lID0gMDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy53aGVlbCkge1xuICAgICAgYmluZChDb21wb25lbnRzMi5FbGVtZW50cy50cmFjaywgXCJ3aGVlbFwiLCBvbldoZWVsLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25XaGVlbChlKSB7XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgdmFyIGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgdmFyIGJhY2t3YXJkcyA9IGRlbHRhWSA8IDA7XG4gICAgICB2YXIgdGltZVN0YW1wID0gdGltZU9mKGUpO1xuXG4gICAgICB2YXIgX21pbiA9IG9wdGlvbnMud2hlZWxNaW5UaHJlc2hvbGQgfHwgMDtcblxuICAgICAgdmFyIHNsZWVwID0gb3B0aW9ucy53aGVlbFNsZWVwIHx8IDA7XG5cbiAgICAgIGlmIChhYnMoZGVsdGFZKSA+IF9taW4gJiYgdGltZVN0YW1wIC0gbGFzdFRpbWUgPiBzbGVlcCkge1xuICAgICAgICBTcGxpZGUyLmdvKGJhY2t3YXJkcyA/IFwiPFwiIDogXCI+XCIpO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgIH1cblxuICAgICAgc2hvdWxkUHJldmVudChiYWNrd2FyZHMpICYmIHByZXZlbnQoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChiYWNrd2FyZHMpIHtcbiAgICByZXR1cm4gIW9wdGlvbnMucmVsZWFzZVdoZWVsIHx8IFNwbGlkZTIuc3RhdGUuaXMoTU9WSU5HKSB8fCBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEFkamFjZW50KGJhY2t3YXJkcykgIT09IC0xO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnRcbiAgfTtcbn1cblxudmFyIFNSX1JFTU9WQUxfREVMQVkgPSA5MDtcblxuZnVuY3Rpb24gTGl2ZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTMgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTMub247XG5cbiAgdmFyIHRyYWNrID0gQ29tcG9uZW50czIuRWxlbWVudHMudHJhY2s7XG4gIHZhciBlbmFibGVkID0gb3B0aW9ucy5saXZlICYmICFvcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgdmFyIHNyID0gY3JlYXRlKFwic3BhblwiLCBDTEFTU19TUik7XG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChTUl9SRU1PVkFMX0RFTEFZLCBhcHBseSh0b2dnbGUsIGZhbHNlKSk7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIGRpc2FibGUoIUNvbXBvbmVudHMyLkF1dG9wbGF5LmlzUGF1c2VkKCkpO1xuICAgICAgc2V0QXR0cmlidXRlKHRyYWNrLCBBUklBX0FUT01JQywgdHJ1ZSk7XG4gICAgICBzci50ZXh0Q29udGVudCA9IFwiXFx1MjAyNlwiO1xuICAgICAgb24oRVZFTlRfQVVUT1BMQVlfUExBWSwgYXBwbHkoZGlzYWJsZSwgdHJ1ZSkpO1xuICAgICAgb24oRVZFTlRfQVVUT1BMQVlfUEFVU0UsIGFwcGx5KGRpc2FibGUsIGZhbHNlKSk7XG4gICAgICBvbihbRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXSwgYXBwbHkodG9nZ2xlLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGFjdGl2ZSkge1xuICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9CVVNZLCBhY3RpdmUpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYXBwZW5kKHRyYWNrLCBzcik7XG4gICAgICBpbnRlcnZhbC5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoc3IpO1xuICAgICAgaW50ZXJ2YWwuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICByZW1vdmVBdHRyaWJ1dGUodHJhY2ssIFtBUklBX0xJVkUsIEFSSUFfQVRPTUlDLCBBUklBX0JVU1ldKTtcbiAgICByZW1vdmUoc3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZShkaXNhYmxlZCkge1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUodHJhY2ssIEFSSUFfTElWRSwgZGlzYWJsZWQgPyBcIm9mZlwiIDogXCJwb2xpdGVcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG59XG5cbnZhciBDb21wb25lbnRDb25zdHJ1Y3RvcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgTWVkaWE6IE1lZGlhLFxuICBEaXJlY3Rpb246IERpcmVjdGlvbixcbiAgRWxlbWVudHM6IEVsZW1lbnRzLFxuICBTbGlkZXM6IFNsaWRlcyxcbiAgTGF5b3V0OiBMYXlvdXQsXG4gIENsb25lczogQ2xvbmVzLFxuICBNb3ZlOiBNb3ZlLFxuICBDb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBBcnJvd3M6IEFycm93cyxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBDb3ZlcjogQ292ZXIsXG4gIFNjcm9sbDogU2Nyb2xsLFxuICBEcmFnOiBEcmFnLFxuICBLZXlib2FyZDogS2V5Ym9hcmQsXG4gIExhenlMb2FkOiBMYXp5TG9hZCxcbiAgUGFnaW5hdGlvbjogUGFnaW5hdGlvbixcbiAgU3luYzogU3luYyxcbiAgV2hlZWw6IFdoZWVsLFxuICBMaXZlOiBMaXZlXG59KTtcbnZhciBJMThOID0ge1xuICBwcmV2OiBcIlByZXZpb3VzIHNsaWRlXCIsXG4gIG5leHQ6IFwiTmV4dCBzbGlkZVwiLFxuICBmaXJzdDogXCJHbyB0byBmaXJzdCBzbGlkZVwiLFxuICBsYXN0OiBcIkdvIHRvIGxhc3Qgc2xpZGVcIixcbiAgc2xpZGVYOiBcIkdvIHRvIHNsaWRlICVzXCIsXG4gIHBhZ2VYOiBcIkdvIHRvIHBhZ2UgJXNcIixcbiAgcGxheTogXCJTdGFydCBhdXRvcGxheVwiLFxuICBwYXVzZTogXCJQYXVzZSBhdXRvcGxheVwiLFxuICBjYXJvdXNlbDogXCJjYXJvdXNlbFwiLFxuICBzbGlkZTogXCJzbGlkZVwiLFxuICBzZWxlY3Q6IFwiU2VsZWN0IGEgc2xpZGUgdG8gc2hvd1wiLFxuICBzbGlkZUxhYmVsOiBcIiVzIG9mICVzXCJcbn07XG52YXIgREVGQVVMVFMgPSB7XG4gIHR5cGU6IFwic2xpZGVcIixcbiAgcm9sZTogXCJyZWdpb25cIixcbiAgc3BlZWQ6IDQwMCxcbiAgcGVyUGFnZTogMSxcbiAgY2xvbmVTdGF0dXM6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgcGFnaW5hdGlvbktleWJvYXJkOiB0cnVlLFxuICBpbnRlcnZhbDogNWUzLFxuICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgcmVzZXRQcm9ncmVzczogdHJ1ZSxcbiAgZWFzaW5nOiBcImN1YmljLWJlemllcigwLjI1LCAxLCAwLjUsIDEpXCIsXG4gIGRyYWc6IHRydWUsXG4gIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgdHJpbVNwYWNlOiB0cnVlLFxuICBmb2N1c2FibGVOb2RlczogXCJhLCBidXR0b24sIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBpZnJhbWVcIixcbiAgbGl2ZTogdHJ1ZSxcbiAgY2xhc3NlczogQ0xBU1NFUyxcbiAgaTE4bjogSTE4TixcbiAgcmVkdWNlZE1vdGlvbjoge1xuICAgIHNwZWVkOiAwLFxuICAgIHJld2luZFNwZWVkOiAwLFxuICAgIGF1dG9wbGF5OiBcInBhdXNlXCJcbiAgfVxufTtcblxuZnVuY3Rpb24gRmFkZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLm9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRUZSRVNIXSwgaW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIFNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgU2xpZGUuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVYKC1cIiArIDEwMCAqIFNsaWRlLmluZGV4ICsgXCIlKVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGluZGV4LCBkb25lKSB7XG4gICAgU2xpZGVzLnN0eWxlKFwidHJhbnNpdGlvblwiLCBcIm9wYWNpdHkgXCIgKyBvcHRpb25zLnNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nKTtcbiAgICBuZXh0VGljayhkb25lKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjYW5jZWw6IG5vb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2xpZGUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXIsXG4gICAgICBTY3JvbGwgPSBDb21wb25lbnRzMi5TY3JvbGw7XG4gIHZhciBsaXN0ID0gQ29tcG9uZW50czIuRWxlbWVudHMubGlzdDtcbiAgdmFyIHRyYW5zaXRpb24gPSBhcHBseShzdHlsZSwgbGlzdCwgXCJ0cmFuc2l0aW9uXCIpO1xuICB2YXIgZW5kQ2FsbGJhY2s7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgRXZlbnRJbnRlcmZhY2UoU3BsaWRlMikuYmluZChsaXN0LCBcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gbGlzdCAmJiBlbmRDYWxsYmFjaykge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGluZGV4LCBkb25lKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gTW92ZS50b1Bvc2l0aW9uKGluZGV4LCB0cnVlKTtcbiAgICB2YXIgcG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIHNwZWVkID0gZ2V0U3BlZWQoaW5kZXgpO1xuXG4gICAgaWYgKGFicyhkZXN0aW5hdGlvbiAtIHBvc2l0aW9uKSA+PSAxICYmIHNwZWVkID49IDEpIHtcbiAgICAgIGlmIChvcHRpb25zLnVzZVNjcm9sbCkge1xuICAgICAgICBTY3JvbGwuc2Nyb2xsKGRlc3RpbmF0aW9uLCBzcGVlZCwgZmFsc2UsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbihcInRyYW5zZm9ybSBcIiArIHNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nKTtcbiAgICAgICAgTW92ZS50cmFuc2xhdGUoZGVzdGluYXRpb24sIHRydWUpO1xuICAgICAgICBlbmRDYWxsYmFjayA9IGRvbmU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIE1vdmUuanVtcChpbmRleCk7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRyYW5zaXRpb24oXCJcIik7XG4gICAgU2Nyb2xsLmNhbmNlbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlZWQoaW5kZXgpIHtcbiAgICB2YXIgcmV3aW5kU3BlZWQgPSBvcHRpb25zLnJld2luZFNwZWVkO1xuXG4gICAgaWYgKFNwbGlkZTIuaXMoU0xJREUpICYmIHJld2luZFNwZWVkKSB7XG4gICAgICB2YXIgcHJldiA9IENvbnRyb2xsZXIuZ2V0SW5kZXgodHJ1ZSk7XG4gICAgICB2YXIgZW5kID0gQ29udHJvbGxlci5nZXRFbmQoKTtcblxuICAgICAgaWYgKHByZXYgPT09IDAgJiYgaW5kZXggPj0gZW5kIHx8IHByZXYgPj0gZW5kICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXdpbmRTcGVlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zcGVlZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufVxuXG52YXIgX1NwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9TcGxpZGUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhpcy5ldmVudCA9IEV2ZW50SW50ZXJmYWNlKCk7XG4gICAgdGhpcy5Db21wb25lbnRzID0ge307XG4gICAgdGhpcy5zdGF0ZSA9IFN0YXRlKENSRUFURUQpO1xuICAgIHRoaXMuc3BsaWRlcyA9IFtdO1xuICAgIHRoaXMuX28gPSB7fTtcbiAgICB0aGlzLl9FID0ge307XG4gICAgdmFyIHJvb3QgPSBpc1N0cmluZyh0YXJnZXQpID8gcXVlcnkoZG9jdW1lbnQsIHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgYXNzZXJ0KHJvb3QsIHJvb3QgKyBcIiBpcyBpbnZhbGlkLlwiKTtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIG9wdGlvbnMgPSBtZXJnZSh7XG4gICAgICBsYWJlbDogZ2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUwpIHx8IFwiXCIsXG4gICAgICBsYWJlbGxlZGJ5OiBnZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTExFREJZKSB8fCBcIlwiXG4gICAgfSwgREVGQVVMVFMsIF9TcGxpZGUuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG1lcmdlKG9wdGlvbnMsIEpTT04ucGFyc2UoZ2V0QXR0cmlidXRlKHJvb3QsIERBVEFfQVRUUklCVVRFKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFzc2VydChmYWxzZSwgXCJJbnZhbGlkIEpTT05cIik7XG4gICAgfVxuXG4gICAgdGhpcy5fbyA9IE9iamVjdC5jcmVhdGUobWVyZ2Uoe30sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfU3BsaWRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChFeHRlbnNpb25zLCBUcmFuc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIENvbXBvbmVudHMyID0gdGhpcy5Db21wb25lbnRzO1xuICAgIGFzc2VydChzdGF0ZS5pcyhbQ1JFQVRFRCwgREVTVFJPWUVEXSksIFwiQWxyZWFkeSBtb3VudGVkIVwiKTtcbiAgICBzdGF0ZS5zZXQoQ1JFQVRFRCk7XG4gICAgdGhpcy5fQyA9IENvbXBvbmVudHMyO1xuICAgIHRoaXMuX1QgPSBUcmFuc2l0aW9uIHx8IHRoaXMuX1QgfHwgKHRoaXMuaXMoRkFERSkgPyBGYWRlIDogU2xpZGUpO1xuICAgIHRoaXMuX0UgPSBFeHRlbnNpb25zIHx8IHRoaXMuX0U7XG4gICAgdmFyIENvbnN0cnVjdG9ycyA9IGFzc2lnbih7fSwgQ29tcG9uZW50Q29uc3RydWN0b3JzLCB0aGlzLl9FLCB7XG4gICAgICBUcmFuc2l0aW9uOiB0aGlzLl9UXG4gICAgfSk7XG4gICAgZm9yT3duKENvbnN0cnVjdG9ycywgZnVuY3Rpb24gKENvbXBvbmVudCwga2V5KSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gQ29tcG9uZW50KF90aGlzLCBDb21wb25lbnRzMiwgX3RoaXMuX28pO1xuICAgICAgQ29tcG9uZW50czJba2V5XSA9IGNvbXBvbmVudDtcbiAgICAgIGNvbXBvbmVudC5zZXR1cCAmJiBjb21wb25lbnQuc2V0dXAoKTtcbiAgICB9KTtcbiAgICBmb3JPd24oQ29tcG9uZW50czIsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5tb3VudCAmJiBjb21wb25lbnQubW91bnQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoRVZFTlRfTU9VTlRFRCk7XG4gICAgYWRkQ2xhc3ModGhpcy5yb290LCBDTEFTU19JTklUSUFMSVpFRCk7XG4gICAgc3RhdGUuc2V0KElETEUpO1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUFEWSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN5bmMgPSBmdW5jdGlvbiBzeW5jKHNwbGlkZSkge1xuICAgIHRoaXMuc3BsaWRlcy5wdXNoKHtcbiAgICAgIHNwbGlkZTogc3BsaWRlXG4gICAgfSk7XG4gICAgc3BsaWRlLnNwbGlkZXMucHVzaCh7XG4gICAgICBzcGxpZGU6IHRoaXMsXG4gICAgICBpc1BhcmVudDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXMoSURMRSkpIHtcbiAgICAgIHRoaXMuX0MuU3luYy5yZW1vdW50KCk7XG5cbiAgICAgIHNwbGlkZS5Db21wb25lbnRzLlN5bmMucmVtb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nbyA9IGZ1bmN0aW9uIGdvKGNvbnRyb2wpIHtcbiAgICB0aGlzLl9DLkNvbnRyb2xsZXIuZ28oY29udHJvbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub24gPSBmdW5jdGlvbiBvbihldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5ldmVudC5vbihldmVudHMsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50cykge1xuICAgIHRoaXMuZXZlbnQub2ZmKGV2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzJGV2ZW50O1xuXG4gICAgKF90aGlzJGV2ZW50ID0gdGhpcy5ldmVudCkuZW1pdC5hcHBseShfdGhpcyRldmVudCwgW2V2ZW50XS5jb25jYXQoc2xpY2UoYXJndW1lbnRzLCAxKSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzbGlkZXMsIGluZGV4KSB7XG4gICAgdGhpcy5fQy5TbGlkZXMuYWRkKHNsaWRlcywgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShtYXRjaGVyKSB7XG4gICAgdGhpcy5fQy5TbGlkZXMucmVtb3ZlKG1hdGNoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzID0gZnVuY3Rpb24gaXModHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vLnR5cGUgPT09IHR5cGU7XG4gIH07XG5cbiAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIGlmIChjb21wbGV0ZWx5ID09PSB2b2lkIDApIHtcbiAgICAgIGNvbXBsZXRlbHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBldmVudCA9IHRoaXMuZXZlbnQsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChzdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgRXZlbnRJbnRlcmZhY2UodGhpcykub24oRVZFTlRfUkVBRFksIHRoaXMuZGVzdHJveS5iaW5kKHRoaXMsIGNvbXBsZXRlbHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT3duKHRoaXMuX0MsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmRlc3Ryb3kgJiYgY29tcG9uZW50LmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGV2ZW50LmVtaXQoRVZFTlRfREVTVFJPWSk7XG4gICAgICBldmVudC5kZXN0cm95KCk7XG4gICAgICBjb21wbGV0ZWx5ICYmIGVtcHR5KHRoaXMuc3BsaWRlcyk7XG4gICAgICBzdGF0ZS5zZXQoREVTVFJPWUVEKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoX1NwbGlkZSwgW3tcbiAgICBrZXk6IFwib3B0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9DLk1lZGlhLnNldChvcHRpb25zLCB0cnVlLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fQy5TbGlkZXMuZ2V0TGVuZ3RoKHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX0MuQ29udHJvbGxlci5nZXRJbmRleCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfU3BsaWRlO1xufSgpO1xuXG52YXIgU3BsaWRlID0gX1NwbGlkZTtcblNwbGlkZS5kZWZhdWx0cyA9IHt9O1xuU3BsaWRlLlNUQVRFUyA9IFNUQVRFUztcbnZhciBDTEFTU19SRU5ERVJFRCA9IFwiaXMtcmVuZGVyZWRcIjtcbnZhciBSRU5ERVJFUl9ERUZBVUxUX0NPTkZJRyA9IHtcbiAgbGlzdFRhZzogXCJ1bFwiLFxuICBzbGlkZVRhZzogXCJsaVwiXG59O1xuXG52YXIgU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZShpZCwgb3B0aW9ucykge1xuICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnJ1bGUgPSBmdW5jdGlvbiBydWxlKHNlbGVjdG9yLCBwcm9wLCB2YWx1ZSwgYnJlYWtwb2ludCkge1xuICAgIGJyZWFrcG9pbnQgPSBicmVha3BvaW50IHx8IFwiZGVmYXVsdFwiO1xuICAgIHZhciBzZWxlY3RvcnMgPSB0aGlzLnN0eWxlc1ticmVha3BvaW50XSA9IHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdIHx8IHt9O1xuICAgIHZhciBzdHlsZXMgPSBzZWxlY3RvcnNbc2VsZWN0b3JdID0gc2VsZWN0b3JzW3NlbGVjdG9yXSB8fCB7fTtcbiAgICBzdHlsZXNbcHJvcF0gPSB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8yLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gXCJcIjtcblxuICAgIGlmICh0aGlzLnN0eWxlcy5kZWZhdWx0KSB7XG4gICAgICBjc3MgKz0gdGhpcy5idWlsZFNlbGVjdG9ycyh0aGlzLnN0eWxlcy5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLm1lZGlhUXVlcnkgPT09IFwibWluXCIgPyArbiAtICttIDogK20gLSArbjtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICBpZiAoYnJlYWtwb2ludCAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgY3NzICs9IFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogXCIgKyBicmVha3BvaW50ICsgXCJweCkge1wiO1xuICAgICAgICBjc3MgKz0gX3RoaXMyLmJ1aWxkU2VsZWN0b3JzKF90aGlzMi5zdHlsZXNbYnJlYWtwb2ludF0pO1xuICAgICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzcztcbiAgfTtcblxuICBfcHJvdG8yLmJ1aWxkU2VsZWN0b3JzID0gZnVuY3Rpb24gYnVpbGRTZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICBmb3JPd24oc2VsZWN0b3JzLCBmdW5jdGlvbiAoc3R5bGVzLCBzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAoXCIjXCIgKyBfdGhpczMuaWQgKyBcIiBcIiArIHNlbGVjdG9yKS50cmltKCk7XG4gICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7XCI7XG4gICAgICBmb3JPd24oc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcbiAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgY3NzICs9IHByb3AgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZTtcbn0oKTtcblxudmFyIFNwbGlkZVJlbmRlcmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3BsaWRlUmVuZGVyZXIoY29udGVudHMsIG9wdGlvbnMsIGNvbmZpZywgZGVmYXVsdHMpIHtcbiAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuYnJlYWtwb2ludHMgPSBbXTtcbiAgICBtZXJnZShERUZBVUxUUywgZGVmYXVsdHMgfHwge30pO1xuICAgIG1lcmdlKG1lcmdlKHRoaXMub3B0aW9ucywgREVGQVVMVFMpLCBvcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgdGhpcy5jb25maWcgPSBhc3NpZ24oe30sIFJFTkRFUkVSX0RFRkFVTFRfQ09ORklHLCBjb25maWcgfHwge30pO1xuICAgIHRoaXMuaWQgPSB0aGlzLmNvbmZpZy5pZCB8fCB1bmlxdWVJZChcInNwbGlkZVwiKTtcbiAgICB0aGlzLlN0eWxlID0gbmV3IFN0eWxlKHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24obnVsbCwgbnVsbCwgdGhpcy5vcHRpb25zKTtcbiAgICBhc3NlcnQodGhpcy5jb250ZW50cy5sZW5ndGgsIFwiUHJvdmlkZSBhdCBsZWFzdCAxIGNvbnRlbnQuXCIpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgU3BsaWRlUmVuZGVyZXIuY2xlYW4gPSBmdW5jdGlvbiBjbGVhbihzcGxpZGUpIHtcbiAgICB2YXIgX0V2ZW50SW50ZXJmYWNlMTQgPSBFdmVudEludGVyZmFjZShzcGxpZGUpLFxuICAgICAgICBvbiA9IF9FdmVudEludGVyZmFjZTE0Lm9uO1xuXG4gICAgdmFyIHJvb3QgPSBzcGxpZGUucm9vdDtcbiAgICB2YXIgY2xvbmVzID0gcXVlcnlBbGwocm9vdCwgXCIuXCIgKyBDTEFTU19DTE9ORSk7XG4gICAgb24oRVZFTlRfTU9VTlRFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlKGNoaWxkKHJvb3QsIFwic3R5bGVcIikpO1xuICAgIH0pO1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICB9O1xuXG4gIHZhciBfcHJvdG8zID0gU3BsaWRlUmVuZGVyZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5wYXJzZUJyZWFrcG9pbnRzKCk7XG4gICAgdGhpcy5pbml0U2xpZGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclJvb3RTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVHJhY2tTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyU2xpZGVTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdFN0eWxlcygpO1xuICB9O1xuXG4gIF9wcm90bzMuaW5pdFNsaWRlcyA9IGZ1bmN0aW9uIGluaXRTbGlkZXMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBwdXNoKHRoaXMuc2xpZGVzLCB0aGlzLmNvbnRlbnRzLm1hcChmdW5jdGlvbiAoY29udGVudCwgaW5kZXgpIHtcbiAgICAgIGNvbnRlbnQgPSBpc1N0cmluZyhjb250ZW50KSA/IHtcbiAgICAgICAgaHRtbDogY29udGVudFxuICAgICAgfSA6IGNvbnRlbnQ7XG4gICAgICBjb250ZW50LnN0eWxlcyA9IGNvbnRlbnQuc3R5bGVzIHx8IHt9O1xuICAgICAgY29udGVudC5hdHRycyA9IGNvbnRlbnQuYXR0cnMgfHwge307XG5cbiAgICAgIF90aGlzNC5jb3Zlcihjb250ZW50KTtcblxuICAgICAgdmFyIGNsYXNzZXMgPSBfdGhpczQub3B0aW9ucy5jbGFzc2VzLnNsaWRlICsgXCIgXCIgKyAoaW5kZXggPT09IDAgPyBDTEFTU19BQ1RJVkUgOiBcIlwiKTtcbiAgICAgIGFzc2lnbihjb250ZW50LmF0dHJzLCB7XG4gICAgICAgIGNsYXNzOiAoY2xhc3NlcyArIFwiIFwiICsgKGNvbnRlbnQuYXR0cnMuY2xhc3MgfHwgXCJcIikpLnRyaW0oKSxcbiAgICAgICAgc3R5bGU6IF90aGlzNC5idWlsZFN0eWxlcyhjb250ZW50LnN0eWxlcylcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMuaXNMb29wKCkpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDbG9uZXModGhpcy5zbGlkZXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyUm9vdFN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyUm9vdFN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWYyWzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMlsxXTtcblxuICAgICAgX3RoaXM1LlN0eWxlLnJ1bGUoXCIgXCIsIFwibWF4LXdpZHRoXCIsIHVuaXQob3B0aW9ucy53aWR0aCksIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyVHJhY2tTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclRyYWNrU3R5bGVzKCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdmFyIFN0eWxlMiA9IHRoaXMuU3R5bGU7XG4gICAgdmFyIHNlbGVjdG9yID0gXCIuXCIgKyBDTEFTU19UUkFDSztcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmM1swXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjNbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM2LnJlc29sdmUoXCJwYWRkaW5nTGVmdFwiKSwgX3RoaXM2LmNzc1BhZGRpbmcob3B0aW9ucywgZmFsc2UpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM2LnJlc29sdmUoXCJwYWRkaW5nUmlnaHRcIiksIF90aGlzNi5jc3NQYWRkaW5nKG9wdGlvbnMsIHRydWUpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJoZWlnaHRcIiwgX3RoaXM2LmNzc1RyYWNrSGVpZ2h0KG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3Rlckxpc3RTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3Rlckxpc3RTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgU3R5bGUyID0gdGhpcy5TdHlsZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5cIiArIENMQVNTX0xJU1Q7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjRbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWY0WzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwidHJhbnNmb3JtXCIsIF90aGlzNy5idWlsZFRyYW5zbGF0ZShvcHRpb25zKSwgd2lkdGgpO1xuXG4gICAgICBpZiAoIV90aGlzNy5jc3NTbGlkZUhlaWdodChvcHRpb25zKSkge1xuICAgICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJhc3BlY3QtcmF0aW9cIiwgX3RoaXM3LmNzc0FzcGVjdFJhdGlvKG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3RlclNsaWRlU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTbGlkZVN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIHZhciBTdHlsZTIgPSB0aGlzLlN0eWxlO1xuICAgIHZhciBzZWxlY3RvciA9IFwiLlwiICsgQ0xBU1NfU0xJREU7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjVbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWY1WzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwid2lkdGhcIiwgX3RoaXM4LmNzc1NsaWRlV2lkdGgob3B0aW9ucyksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImhlaWdodFwiLCBfdGhpczguY3NzU2xpZGVIZWlnaHQob3B0aW9ucykgfHwgXCIxMDAlXCIsIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczgucmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpLCB1bml0KG9wdGlvbnMuZ2FwKSB8fCBcIjBweFwiLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciArIFwiID4gaW1nXCIsIFwiZGlzcGxheVwiLCBvcHRpb25zLmNvdmVyID8gXCJub25lXCIgOiBcImlubGluZVwiLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIGJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkRGlyZWN0aW9uID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24ucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uLm9yaWVudDtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFsdWVzLnB1c2godGhpcy5jc3NPZmZzZXRDbG9uZXMob3B0aW9ucykpO1xuICAgIHZhbHVlcy5wdXNoKHRoaXMuY3NzT2Zmc2V0R2FwcyhvcHRpb25zKSk7XG5cbiAgICBpZiAodGhpcy5pc0NlbnRlcihvcHRpb25zKSkge1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCgtNTApLCBcIiVcIikpO1xuICAgICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCB0aGlzLmNzc09mZnNldENlbnRlcihvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIoQm9vbGVhbikubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlXCIgKyByZXNvbHZlKFwiWFwiKSArIFwiKFwiICsgdmFsdWUgKyBcIilcIjtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc09mZnNldENsb25lcyA9IGZ1bmN0aW9uIGNzc09mZnNldENsb25lcyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJERpcmVjdGlvbjIgPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbjIucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uMi5vcmllbnQ7XG4gICAgdmFyIGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcblxuICAgIGlmICh0aGlzLmlzRml4ZWRXaWR0aChvcHRpb25zKSkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZS52YWx1ZSxcbiAgICAgICAgICB1bml0MiA9IF90aGlzJHBhcnNlQ3NzVmFsdWUudW5pdDtcblxuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUpICogY2xvbmVDb3VudCwgdW5pdDIpO1xuICAgIH1cblxuICAgIHZhciBwZXJjZW50ID0gMTAwICogY2xvbmVDb3VudCAvIG9wdGlvbnMucGVyUGFnZTtcbiAgICByZXR1cm4gb3JpZW50KHBlcmNlbnQpICsgXCIlXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NPZmZzZXRDZW50ZXIgPSBmdW5jdGlvbiBjc3NPZmZzZXRDZW50ZXIob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyREaXJlY3Rpb24zID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24zLnJlc29sdmUsXG4gICAgICAgIG9yaWVudCA9IF90aGlzJERpcmVjdGlvbjMub3JpZW50O1xuXG4gICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTIgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTIudmFsdWUsXG4gICAgICAgICAgdW5pdDIgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMi51bml0O1xuXG4gICAgICByZXR1cm4gW3RoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgLyAyKSwgdW5pdDIpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2UsXG4gICAgICAgIGdhcCA9IG9wdGlvbnMuZ2FwO1xuICAgIHZhbHVlcy5wdXNoKG9yaWVudCg1MCAvIHBlclBhZ2UpICsgXCIlXCIpO1xuXG4gICAgaWYgKGdhcCkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUzID0gdGhpcy5wYXJzZUNzc1ZhbHVlKGdhcCksXG4gICAgICAgICAgX3ZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTMudmFsdWUsXG4gICAgICAgICAgX3VuaXQgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMy51bml0O1xuXG4gICAgICB2YXIgZ2FwT2Zmc2V0ID0gKF92YWx1ZSAvIHBlclBhZ2UgLSBfdmFsdWUpIC8gMjtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwT2Zmc2V0KSwgX3VuaXQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzT2Zmc2V0R2FwcyA9IGZ1bmN0aW9uIGNzc09mZnNldEdhcHMob3B0aW9ucykge1xuICAgIHZhciBjbG9uZUNvdW50ID0gdGhpcy5nZXRDbG9uZUNvdW50KCk7XG5cbiAgICBpZiAoY2xvbmVDb3VudCAmJiBvcHRpb25zLmdhcCkge1xuICAgICAgdmFyIG9yaWVudCA9IHRoaXMuRGlyZWN0aW9uLm9yaWVudDtcblxuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWU0ID0gdGhpcy5wYXJzZUNzc1ZhbHVlKG9wdGlvbnMuZ2FwKSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHBhcnNlQ3NzVmFsdWU0LnZhbHVlLFxuICAgICAgICAgIHVuaXQyID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTQudW5pdDtcblxuICAgICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KHZhbHVlICogY2xvbmVDb3VudCksIHVuaXQyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgICB2YXIgZ2FwcyA9IGNsb25lQ291bnQgLyBwZXJQYWdlO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwcyAqIHZhbHVlKSwgdW5pdDIpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIF9wcm90bzMucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUocHJvcCkge1xuICAgIHJldHVybiBjYW1lbFRvS2ViYWIodGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShwcm9wKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NQYWRkaW5nID0gZnVuY3Rpb24gY3NzUGFkZGluZyhvcHRpb25zLCByaWdodCkge1xuICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgIHZhciBwcm9wID0gdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShyaWdodCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLCB0cnVlKTtcbiAgICByZXR1cm4gcGFkZGluZyAmJiB1bml0KHBhZGRpbmdbcHJvcF0gfHwgKGlzT2JqZWN0KHBhZGRpbmcpID8gMCA6IHBhZGRpbmcpKSB8fCBcIjBweFwiO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzVHJhY2tIZWlnaHQgPSBmdW5jdGlvbiBjc3NUcmFja0hlaWdodChvcHRpb25zKSB7XG4gICAgdmFyIGhlaWdodCA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIGhlaWdodCA9IHRoaXMuY3NzSGVpZ2h0KG9wdGlvbnMpO1xuICAgICAgYXNzZXJ0KGhlaWdodCwgJ1wiaGVpZ2h0XCIgaXMgbWlzc2luZy4nKTtcbiAgICAgIGhlaWdodCA9IFwiY2FsYyhcIiArIGhlaWdodCArIFwiIC0gXCIgKyB0aGlzLmNzc1BhZGRpbmcob3B0aW9ucywgZmFsc2UpICsgXCIgLSBcIiArIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCB0cnVlKSArIFwiKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NIZWlnaHQgPSBmdW5jdGlvbiBjc3NIZWlnaHQob3B0aW9ucykge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlV2lkdGggPSBmdW5jdGlvbiBjc3NTbGlkZVdpZHRoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hdXRvV2lkdGggPyBcIlwiIDogdW5pdChvcHRpb25zLmZpeGVkV2lkdGgpIHx8ICh0aGlzLmlzVmVydGljYWwoKSA/IFwiXCIgOiB0aGlzLmNzc1NsaWRlU2l6ZShvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZUhlaWdodCA9IGZ1bmN0aW9uIGNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmZpeGVkSGVpZ2h0KSB8fCAodGhpcy5pc1ZlcnRpY2FsKCkgPyBvcHRpb25zLmF1dG9IZWlnaHQgPyBcIlwiIDogdGhpcy5jc3NTbGlkZVNpemUob3B0aW9ucykgOiB0aGlzLmNzc0hlaWdodChvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZVNpemUgPSBmdW5jdGlvbiBjc3NTbGlkZVNpemUob3B0aW9ucykge1xuICAgIHZhciBnYXAgPSB1bml0KG9wdGlvbnMuZ2FwKTtcbiAgICByZXR1cm4gXCJjYWxjKCgxMDAlXCIgKyAoZ2FwICYmIFwiICsgXCIgKyBnYXApICsgXCIpL1wiICsgKG9wdGlvbnMucGVyUGFnZSB8fCAxKSArIChnYXAgJiYgXCIgLSBcIiArIGdhcCkgKyBcIilcIjtcbiAgfTtcblxuICBfcHJvdG8zLmNzc0FzcGVjdFJhdGlvID0gZnVuY3Rpb24gY3NzQXNwZWN0UmF0aW8ob3B0aW9ucykge1xuICAgIHZhciBoZWlnaHRSYXRpbyA9IG9wdGlvbnMuaGVpZ2h0UmF0aW87XG4gICAgcmV0dXJuIGhlaWdodFJhdGlvID8gXCJcIiArIDEgLyBoZWlnaHRSYXRpbyA6IFwiXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZENzc1ZhbHVlID0gZnVuY3Rpb24gYnVpbGRDc3NWYWx1ZSh2YWx1ZSwgdW5pdDIpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlICsgdW5pdDI7XG4gIH07XG5cbiAgX3Byb3RvMy5wYXJzZUNzc1ZhbHVlID0gZnVuY3Rpb24gcGFyc2VDc3NWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xuICAgICAgdmFyIHVuaXQyID0gdmFsdWUucmVwbGFjZSgvXFxkKihcXC5cXGQqKT8vLCBcIlwiKSB8fCBcInB4XCI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICB1bml0OiB1bml0MlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgdW5pdDogXCJweFwiXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8zLnBhcnNlQnJlYWtwb2ludHMgPSBmdW5jdGlvbiBwYXJzZUJyZWFrcG9pbnRzKCkge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgdmFyIGJyZWFrcG9pbnRzID0gdGhpcy5vcHRpb25zLmJyZWFrcG9pbnRzO1xuICAgIHRoaXMuYnJlYWtwb2ludHMucHVzaChbXCJkZWZhdWx0XCIsIHRoaXMub3B0aW9uc10pO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRzKSB7XG4gICAgICBmb3JPd24oYnJlYWtwb2ludHMsIGZ1bmN0aW9uIChvcHRpb25zLCB3aWR0aCkge1xuICAgICAgICBfdGhpczkuYnJlYWtwb2ludHMucHVzaChbd2lkdGgsIG1lcmdlKG1lcmdlKHt9LCBfdGhpczkub3B0aW9ucyksIG9wdGlvbnMpXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5pc0ZpeGVkV2lkdGggPSBmdW5jdGlvbiBpc0ZpeGVkV2lkdGgob3B0aW9ucykge1xuICAgIHJldHVybiAhIW9wdGlvbnNbdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShcImZpeGVkV2lkdGhcIildO1xuICB9O1xuXG4gIF9wcm90bzMuaXNMb29wID0gZnVuY3Rpb24gaXNMb29wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudHlwZSA9PT0gTE9PUDtcbiAgfTtcblxuICBfcHJvdG8zLmlzQ2VudGVyID0gZnVuY3Rpb24gaXNDZW50ZXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmZvY3VzID09PSBcImNlbnRlclwiKSB7XG4gICAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlID09PSBTTElERSkge1xuICAgICAgICByZXR1cm4gIXRoaXMub3B0aW9ucy50cmltU3BhY2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9wcm90bzMuaXNWZXJ0aWNhbCA9IGZ1bmN0aW9uIGlzVmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkQ2xhc3NlcyA9IGZ1bmN0aW9uIGJ1aWxkQ2xhc3NlcygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gW0NMQVNTX1JPT1QsIENMQVNTX1JPT1QgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIENMQVNTX1JPT1QgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnICYmIENMQVNTX1JPT1QgKyBcIi0tZHJhZ2dhYmxlXCIsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uICYmIENMQVNTX1JPT1QgKyBcIi0tbmF2XCIsIENMQVNTX0FDVElWRSwgIXRoaXMuY29uZmlnLmhpZGRlbiAmJiBDTEFTU19SRU5ERVJFRF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRBdHRycyA9IGZ1bmN0aW9uIGJ1aWxkQXR0cnMoYXR0cnMpIHtcbiAgICB2YXIgYXR0ciA9IFwiXCI7XG4gICAgZm9yT3duKGF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgYXR0ciArPSB2YWx1ZSA/IFwiIFwiICsgY2FtZWxUb0tlYmFiKGtleSkgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiIDogXCJcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYXR0ci50cmltKCk7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZFN0eWxlcyA9IGZ1bmN0aW9uIGJ1aWxkU3R5bGVzKHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IFwiXCI7XG4gICAgZm9yT3duKHN0eWxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHN0eWxlICs9IFwiIFwiICsgY2FtZWxUb0tlYmFiKGtleSkgKyBcIjpcIiArIHZhbHVlICsgXCI7XCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlLnRyaW0oKTtcbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlclNsaWRlcyA9IGZ1bmN0aW9uIHJlbmRlclNsaWRlcygpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgdGFnID0gdGhpcy5jb25maWcuc2xpZGVUYWc7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLm1hcChmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgcmV0dXJuIFwiPFwiICsgdGFnICsgXCIgXCIgKyBfdGhpczEwLmJ1aWxkQXR0cnMoY29udGVudC5hdHRycykgKyBcIj5cIiArIChjb250ZW50Lmh0bWwgfHwgXCJcIikgKyBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuY292ZXIgPSBmdW5jdGlvbiBjb3Zlcihjb250ZW50KSB7XG4gICAgdmFyIHN0eWxlcyA9IGNvbnRlbnQuc3R5bGVzLFxuICAgICAgICBfY29udGVudCRodG1sID0gY29udGVudC5odG1sLFxuICAgICAgICBodG1sID0gX2NvbnRlbnQkaHRtbCA9PT0gdm9pZCAwID8gXCJcIiA6IF9jb250ZW50JGh0bWw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvdmVyICYmICF0aGlzLm9wdGlvbnMubGF6eUxvYWQpIHtcbiAgICAgIHZhciBzcmMgPSBodG1sLm1hdGNoKC88aW1nLio/c3JjXFxzKj1cXHMqKFsnXCJdKSguKz8pXFwxLio/Pi8pO1xuXG4gICAgICBpZiAoc3JjICYmIHNyY1syXSkge1xuICAgICAgICBzdHlsZXMuYmFja2dyb3VuZCA9IFwiY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoJ1wiICsgc3JjWzJdICsgXCInKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmdlbmVyYXRlQ2xvbmVzID0gZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZXMoY29udGVudHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzO1xuICAgIHZhciBjb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuICAgIHZhciBzbGlkZXMgPSBjb250ZW50cy5zbGljZSgpO1xuXG4gICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgcHVzaChzbGlkZXMsIHNsaWRlcyk7XG4gICAgfVxuXG4gICAgcHVzaChzbGlkZXMuc2xpY2UoLWNvdW50KS5yZXZlcnNlKCksIHNsaWRlcy5zbGljZSgwLCBjb3VudCkpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRlbnQsIGluZGV4KSB7XG4gICAgICB2YXIgYXR0cnMgPSBhc3NpZ24oe30sIGNvbnRlbnQuYXR0cnMsIHtcbiAgICAgICAgY2xhc3M6IGNvbnRlbnQuYXR0cnMuY2xhc3MgKyBcIiBcIiArIGNsYXNzZXMuY2xvbmVcbiAgICAgIH0pO1xuICAgICAgdmFyIGNsb25lID0gYXNzaWduKHt9LCBjb250ZW50LCB7XG4gICAgICAgIGF0dHJzOiBhdHRyc1xuICAgICAgfSk7XG4gICAgICBpbmRleCA8IGNvdW50ID8gY29udGVudHMudW5zaGlmdChjbG9uZSkgOiBjb250ZW50cy5wdXNoKGNsb25lKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLmdldENsb25lQ291bnQgPSBmdW5jdGlvbiBnZXRDbG9uZUNvdW50KCkge1xuICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgaWYgKG9wdGlvbnMuY2xvbmVzKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNsb25lcztcbiAgICAgIH1cblxuICAgICAgdmFyIHBlclBhZ2UgPSBtYXguYXBwbHkodm9pZCAwLCB0aGlzLmJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMyID0gX3JlZjZbMV07XG4gICAgICAgIHJldHVybiBvcHRpb25zMi5wZXJQYWdlO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIHBlclBhZ2UgKiAoKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyQXJyb3dzID0gZnVuY3Rpb24gcmVuZGVyQXJyb3dzKCkge1xuICAgIHZhciBodG1sID0gXCJcIjtcbiAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwiXCIgKyB0aGlzLm9wdGlvbnMuY2xhc3Nlcy5hcnJvd3MgKyBcIlxcXCI+XCI7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93KHRydWUpO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvdyhmYWxzZSk7XG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyQXJyb3cgPSBmdW5jdGlvbiByZW5kZXJBcnJvdyhwcmV2KSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNsYXNzZXMgPSBfdGhpcyRvcHRpb25zLmNsYXNzZXMsXG4gICAgICAgIGkxOG4gPSBfdGhpcyRvcHRpb25zLmkxOG47XG4gICAgdmFyIGF0dHJzID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXMuYXJyb3cgKyBcIiBcIiArIChwcmV2ID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0KSxcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBhcmlhTGFiZWw6IHByZXYgPyBpMThuLnByZXYgOiBpMThuLm5leHRcbiAgICB9O1xuICAgIHJldHVybiBcIjxidXR0b24gXCIgKyB0aGlzLmJ1aWxkQXR0cnMoYXR0cnMpICsgXCI+PHN2ZyB4bWxucz1cXFwiXCIgKyBYTUxfTkFNRV9TUEFDRSArIFwiXFxcIiB2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiIHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgaGVpZ2h0PVxcXCJcIiArIFNJWkUgKyBcIlxcXCI+PHBhdGggZD1cXFwiXCIgKyAodGhpcy5vcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPjwvc3ZnPjwvYnV0dG9uPlwiO1xuICB9O1xuXG4gIF9wcm90bzMuaHRtbCA9IGZ1bmN0aW9uIGh0bWwoKSB7XG4gICAgdmFyIF90aGlzJGNvbmZpZyA9IHRoaXMuY29uZmlnLFxuICAgICAgICByb290Q2xhc3MgPSBfdGhpcyRjb25maWcucm9vdENsYXNzLFxuICAgICAgICBsaXN0VGFnID0gX3RoaXMkY29uZmlnLmxpc3RUYWcsXG4gICAgICAgIGFycm93cyA9IF90aGlzJGNvbmZpZy5hcnJvd3MsXG4gICAgICAgIGJlZm9yZVRyYWNrID0gX3RoaXMkY29uZmlnLmJlZm9yZVRyYWNrLFxuICAgICAgICBhZnRlclRyYWNrID0gX3RoaXMkY29uZmlnLmFmdGVyVHJhY2ssXG4gICAgICAgIHNsaWRlciA9IF90aGlzJGNvbmZpZy5zbGlkZXIsXG4gICAgICAgIGJlZm9yZVNsaWRlciA9IF90aGlzJGNvbmZpZy5iZWZvcmVTbGlkZXIsXG4gICAgICAgIGFmdGVyU2xpZGVyID0gX3RoaXMkY29uZmlnLmFmdGVyU2xpZGVyO1xuICAgIHZhciBodG1sID0gXCJcIjtcbiAgICBodG1sICs9IFwiPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmlkICsgXCJcXFwiIGNsYXNzPVxcXCJcIiArIHRoaXMuYnVpbGRDbGFzc2VzKCkgKyBcIiBcIiArIChyb290Q2xhc3MgfHwgXCJcIikgKyBcIlxcXCI+XCI7XG4gICAgaHRtbCArPSBcIjxzdHlsZT5cIiArIHRoaXMuU3R5bGUuYnVpbGQoKSArIFwiPC9zdHlsZT5cIjtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGh0bWwgKz0gYmVmb3JlU2xpZGVyIHx8IFwiXCI7XG4gICAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwic3BsaWRlX19zbGlkZXJcXFwiPlwiO1xuICAgIH1cblxuICAgIGh0bWwgKz0gYmVmb3JlVHJhY2sgfHwgXCJcIjtcblxuICAgIGlmIChhcnJvd3MpIHtcbiAgICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvd3MoKTtcbiAgICB9XG5cbiAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwic3BsaWRlX190cmFja1xcXCI+XCI7XG4gICAgaHRtbCArPSBcIjxcIiArIGxpc3RUYWcgKyBcIiBjbGFzcz1cXFwic3BsaWRlX19saXN0XFxcIj5cIjtcbiAgICBodG1sICs9IHRoaXMucmVuZGVyU2xpZGVzKCk7XG4gICAgaHRtbCArPSBcIjwvXCIgKyBsaXN0VGFnICsgXCI+XCI7XG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIGh0bWwgKz0gYWZ0ZXJUcmFjayB8fCBcIlwiO1xuXG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgICAgaHRtbCArPSBhZnRlclNsaWRlciB8fCBcIlwiO1xuICAgIH1cblxuICAgIGh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcblxuICByZXR1cm4gU3BsaWRlUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydCB7IENMQVNTRVMsIENMQVNTX0FDVElWRSwgQ0xBU1NfQVJST1csIENMQVNTX0FSUk9XUywgQ0xBU1NfQVJST1dfTkVYVCwgQ0xBU1NfQVJST1dfUFJFViwgQ0xBU1NfQ0xPTkUsIENMQVNTX0NPTlRBSU5FUiwgQ0xBU1NfRk9DVVNfSU4sIENMQVNTX0lOSVRJQUxJWkVELCBDTEFTU19MSVNULCBDTEFTU19MT0FESU5HLCBDTEFTU19ORVhULCBDTEFTU19PVkVSRkxPVywgQ0xBU1NfUEFHSU5BVElPTiwgQ0xBU1NfUEFHSU5BVElPTl9QQUdFLCBDTEFTU19QUkVWLCBDTEFTU19QUk9HUkVTUywgQ0xBU1NfUFJPR1JFU1NfQkFSLCBDTEFTU19ST09ULCBDTEFTU19TTElERSwgQ0xBU1NfU1BJTk5FUiwgQ0xBU1NfU1IsIENMQVNTX1RPR0dMRSwgQ0xBU1NfVE9HR0xFX1BBVVNFLCBDTEFTU19UT0dHTEVfUExBWSwgQ0xBU1NfVFJBQ0ssIENMQVNTX1ZJU0lCTEUsIERFRkFVTFRTLCBFVkVOVF9BQ1RJVkUsIEVWRU5UX0FSUk9XU19NT1VOVEVELCBFVkVOVF9BUlJPV1NfVVBEQVRFRCwgRVZFTlRfQVVUT1BMQVlfUEFVU0UsIEVWRU5UX0FVVE9QTEFZX1BMQVksIEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcsIEVWRU5UX0NMSUNLLCBFVkVOVF9ERVNUUk9ZLCBFVkVOVF9EUkFHLCBFVkVOVF9EUkFHR0VELCBFVkVOVF9EUkFHR0lORywgRVZFTlRfRU5EX0lOREVYX0NIQU5HRUQsIEVWRU5UX0hJRERFTiwgRVZFTlRfSU5BQ1RJVkUsIEVWRU5UX0xBWllMT0FEX0xPQURFRCwgRVZFTlRfTU9VTlRFRCwgRVZFTlRfTU9WRSwgRVZFTlRfTU9WRUQsIEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCwgRVZFTlRfT1ZFUkZMT1csIEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwgRVZFTlRfUEFHSU5BVElPTl9VUERBVEVELCBFVkVOVF9SRUFEWSwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfUkVTSVpFLCBFVkVOVF9SRVNJWkVELCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1NDUk9MTEVELCBFVkVOVF9TSElGVEVELCBFVkVOVF9TTElERV9LRVlET1dOLCBFVkVOVF9VUERBVEVELCBFVkVOVF9WSVNJQkxFLCBFdmVudEJpbmRlciwgRXZlbnRJbnRlcmZhY2UsIEZBREUsIExPT1AsIExUUiwgUlRMLCBSZXF1ZXN0SW50ZXJ2YWwsIFNMSURFLCBTVEFUVVNfQ0xBU1NFUywgU3BsaWRlLCBTcGxpZGVSZW5kZXJlciwgU3RhdGUsIFRUQiwgVGhyb3R0bGUsIFNwbGlkZSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9wcmVsb2FkZXIuanNcIjtcbmltcG9ydCBcIi4vanMvYmFja2Ryb3AuanNcIjtcbmltcG9ydCBcIi4vanMvbGFuZy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9wcm9kdWN0LmpzXCI7XG5pbXBvcnQgXCIuL2pzL3BhcnRuZXJzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2FkdmFudGFnZS5qc1wiO1xuaW1wb3J0IFwiLi9qcy9wb3B1cC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9oZWFkZXIuanNcIjtcbmltcG9ydCBcIi4vanMvc3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb29raWVzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL3Byb2Nlc3MuanNcIjtcbiJdLCJuYW1lcyI6WyJpdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImVsIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiY2hpbGQiLCJfY2hpbGQkY2xhc3NMaXN0IiwiaGVhZGVyIiwibWVudUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJlbGVtZW50IiwibmF2SXRlbSIsIm9wZW5CYWNrZHJvcCIsIndhdGNoU2NyZWVuSGVpZ2h0IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3dZIiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5uZXJIZWlnaHQiLCJhZGQiLCJjb29raWVWYWx1ZSIsImNvb2tpZSIsInJlcGxhY2UiLCJjb29raWVzQnRuIiwiY29va2llc1JlZiIsInRyYW5zZm9ybSIsInNldFRpbWVvdXQiLCJkaXNwbGF5IiwiY29va2llc1BvcHVwQmciLCJjb29raWVzUG9wdXAiLCJjb29raWVzT3BlblBvcHVwQnRuIiwiY29va2llc0Nsb3NlUG9wdXBCdG4iLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImxhc3RTY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJidXR0b25MYW5nIiwiZW5TdmciLCJhclN2ZyIsIlNwbGlkZSIsInNwbGlkZU9wdGlvbnMiLCJ0eXBlIiwicGFnaW5hdGlvbiIsImFycm93cyIsImxhenlMb2FkIiwicGVyUGFnZSIsInNwZWVkIiwiZ2FwIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImRyYWciLCJrZXlib2FyZCIsIm1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRlc3Ryb3kiLCJzcGxpZGUiLCJtb3VudCIsInBvcHVwQmciLCJwb3B1cCIsIm9wZW5Qb3B1cEJ1dHRvbnMiLCJjbG9zZVBvcHVwQnV0dG9uIiwidGFyZ2V0IiwicHJlbG9hZGVyUmVmIiwiZGVsYXkiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInByb2Nlc3NMaW5lIiwicG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbmRleCIsInpJbmRleCIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudEl0ZW0iLCJ3cmFwSXRlbSIsIm9ic2VydiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJpdGVtc0FjdGl2ZSIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlcyIsInN0YXRpc3RpY0l0ZW1zIiwiYW5pbWF0ZU51bWJlcnMiLCJlbmRWYWx1ZSIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJzdGFydFZhbHVlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzdGVwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsImNsZWFySW50ZXJ2YWwiLCJhbmltYXRpb25IYXNTdGFydGVkIiwiaGFuZGxlU2Nyb2xsIiwic3RhdGlzdGljU2VjdGlvbiIsInN0YXRpc3RpY1NlY3Rpb25Qb3NpdGlvbiIsIndpbmRvd0hlaWdodCIsInN0YXRpc3RpY1NlY3Rpb25Cb3R0b21Qb3NpdGlvbiIsImJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=