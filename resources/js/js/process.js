const processLine = document.querySelector(".process__line");
const items = document.querySelectorAll(".process__item");

window.addEventListener("scroll", () => {
  const position = processLine.getBoundingClientRect().top;

  if (position < window.innerHeight * 0.8) {
    processLine.classList.add("show");

    items.forEach((item, index) => {
      let delay;
      switch (index) {
        case 0:
          delay = 200;
          break;
        case 1:
          delay = 200 * index + (index === 1 ? 600 : 0);
          break;
        case 2:
        case 3:
          delay = 1000 + 200 * (index - 2) + 400;
          break;
        case 4:
        case 5:
          delay = 2000 + 200 * (index - 4) + 400;
          break;
        case 6:
          delay = 5500;
          break;
        default:
          delay = 0;
          break;
      }
      setTimeout(() => {
        item.classList.add("show");
      }, delay);
    });
  }
});
