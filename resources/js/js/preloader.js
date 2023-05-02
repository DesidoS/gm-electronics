const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", function () {
  let delay = window.innerWidth > 1025 ? 500 : 500;
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    preloader.style.transform = "translateY(-500%)";
    document.body.style.overflow = "";
  }, delay);
  setTimeout(function () {
    preloader.style.display = "none";
  }, delay + 500);
});
