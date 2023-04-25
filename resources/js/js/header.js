const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // прокрутка вниз, убираем фиксацию
    header.classList.remove("fixed");
    //     // прокрутка вверх, добавляем фиксацию
    header.classList.add("hide");
  } else {
    // прокрутка вверх, добавляем фиксацию
    header.classList.add("fixed");
  }

  lastScroll = currentScroll;
});
