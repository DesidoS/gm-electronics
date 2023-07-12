const preloaderRef = document.querySelector(".preloader");
let delay = window.innerWidth > 1024 ? 500 : 2800;

setTimeout(() => {
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
setTimeout(() => {
    document.querySelector(".preloader").classList.add("active");
}, delay + 500);
