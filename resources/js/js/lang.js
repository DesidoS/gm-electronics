const buttonLang = document.querySelector(".header__lang-button");
const enSvg = document.querySelector(".header__lang-svg--en");
const arSvg = document.querySelector(".header__lang-svg--ar");

buttonLang.addEventListener("click", () => {
  enSvg.classList.toggle("enActive");
  arSvg.classList.toggle("arActive");
});
