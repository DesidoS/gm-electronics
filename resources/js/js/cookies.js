const cookiesBtn = document.querySelector(".cookies__button");
const cookiesRef = document.querySelector(".cookies");

cookiesBtn.addEventListener("click", () => {
  cookiesRef.style.transform = "translateY(100%)";
  setTimeout(() => {
    cookiesRef.style.display = "none";
  }, 1000);
});

const cookiesPopupBg = document.querySelector(".cookies__popup__bg");
const cookiesPopup = document.querySelector(".cookies__popup");
const cookiesOpenPopupButtons = document.querySelectorAll(
  ".cookies__open-popup"
);
const cookiesClosePopupButton = document.querySelector(".cookies__close-popup");

cookiesOpenPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.style.overflow = "hidden";

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

cookiesClosePopupButton.addEventListener("click", () => {
  document.body.style.overflow = "";
  cookiesPopupBg.classList.remove("active");
  cookiesPopup.classList.remove("active");
});
