const statisticItems = document.querySelectorAll(".statistic__item--title");

function animateNumbers() {
  statisticItems.forEach((item) => {
    const endValue = parseInt(item.textContent);
    let startValue = 0;
    const animationDuration = 1000;
    const step = (endValue / animationDuration) * 10;
    let delay = window.innerWidth < 1025 ? 1500 : 1000;
    const timer = setInterval(() => {
      item.textContent = Math.floor(startValue);
      setTimeout(() => {
        startValue += step;
        if (startValue >= endValue) {
          clearInterval(timer);
          item.textContent = endValue;
        }
      }, delay);
    }, 10);
  });
}

let animationHasStarted = false;
function handleScroll() {
  const statisticSection = document.querySelector(".statistic");
  const statisticSectionPosition = statisticSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (statisticSectionPosition < windowHeight && !animationHasStarted) {
    const statisticSectionBottomPosition =
      statisticSection.getBoundingClientRect().bottom;
    if (statisticSectionBottomPosition > 0) {
      animateNumbers();
      animationHasStarted = true;
    }
  }
}

window.addEventListener("scroll", handleScroll);
