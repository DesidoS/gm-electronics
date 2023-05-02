const items = document.querySelectorAll(".advantage__item");

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (window.innerWidth > 1024) return;
    items.forEach((el) => {
      if (el !== event.currentTarget) {
        el.classList.remove("active");
      }
    });

    event.currentTarget.classList.toggle("active");

    items.forEach((item) => {
      Array.from(item.children).forEach((child) => {
        child.classList?.remove("active");
      });
    });
  });
});
