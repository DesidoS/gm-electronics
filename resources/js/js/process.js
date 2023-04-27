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
      setTimeout(() => {
        item.classList.add("show");
      }, delay);
    });
  }
});
