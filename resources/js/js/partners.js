import Splide from "@splidejs/splide";

const splideOptions = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: 30,
  pagination: false,
  arrows: false,
  drag: true,
  keyboard: true,
  mediaQuery: "min",
  breakpoints: {
    1025: {
      destroy: true,
    },
    320: {
      perPage: 1,
    },
  },
};

const splide = new Splide(".splide", splideOptions).mount();
