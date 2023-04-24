import Splide from "@splidejs/splide";

const splideOptions = {
  type: "loop",
  pagination: false,
  arrows: false,
  lazyLoad: "nearby",
  perPage: 2,
  speed: 500,
  gap: 30,
  drag: true,
  keyboard: true,
  mediaQuery: "min",
  breakpoints: {
    1200: {
      destroy: true,
    },
  },
};

const splide = new Splide(".splide", splideOptions).mount();
