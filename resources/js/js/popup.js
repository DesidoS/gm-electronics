const popupBg = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup");
const openPopupButtons = document.querySelectorAll(".open-popup");
const closePopupButton = document.querySelector(".close-popup");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (window.innerHeight < 632) {
      popup.classList.add("scroll");
    }

    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});
