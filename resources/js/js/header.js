if (!window.matchMedia("(min-width: 1025px)").matches) {
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 83 && currentScroll > lastScroll) {
      header.classList.remove("fixed");
      header.classList.add("hide");
    } else {
      header.classList.add("fixed");
    }
    lastScroll = currentScroll;
  });
}
