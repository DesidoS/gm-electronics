const buttonLang = document.querySelector(".header__lang-button");
const enSvg = document.querySelector(".header__lang-svg--img--en");
const arSvg = document.querySelector(".header__lang-svg--img--ar");

buttonLang.addEventListener("click", () => {
  enSvg.classList.toggle("enActive");
  arSvg.classList.toggle("arActive");
});
