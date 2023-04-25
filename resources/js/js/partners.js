import Splide from "@splidejs/splide";

const splideOptions = {
  type: "loop",
  pagination: false,
  arrows: false,
  lazyLoad: "nearby",
  perPage: 1,
  speed: 500,
  gap: 30,
  autoplay: true,
  interval: 3000,
  drag: true,
  keyboard: true,
  mediaQuery: "min",
  breakpoints: {
    1200: {
      destroy: true,
    },
    768: {
      perPage: 2,
    },
  },
};

const splide = new Splide(".splide", splideOptions).mount();
