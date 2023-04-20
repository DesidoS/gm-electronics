import Splide from "@splidejs/splide";

const splideOptions = {
  type: "loop",
  pagination: false,
  arrows: false,
  autoWidth: true,
  lazyLoad: "nearby",
  perPage: 1,
  speed: 500,
  gap: 30,
  drag: true,
  keyboard: true,
  mediaQuery: "min",
  breakpoints: {
    1200: {
      destroy: true,
    },
    320: {
      perPage: 1,
    },
  },
};

const splide = new Splide(".splide", splideOptions).mount();
