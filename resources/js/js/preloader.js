const preloaderRef = document.querySelector(".preloader");
let delay = window.innerWidth > 1025 ? 500 : 5500;
document.body.style.overflow = "hidden";
setTimeout(() => {
  document.querySelector(".preloader").style.transform = "translateY(-500%)";
  document.body.style.overflow = "";
}, delay);
setTimeout(() => {
  document.querySelector(".preloader").classList.add("active");
}, delay + 500);