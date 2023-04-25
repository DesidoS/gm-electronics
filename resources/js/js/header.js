const header = document.querySelector("header");
const html = document.querySelector("html");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.classList.remove("fixed");
    header.classList.add("hide");
  } else {
    header.classList.add("fixed");
  }

  lastScroll = currentScroll;
});
