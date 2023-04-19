const items = document.querySelectorAll(".products__item");

items.forEach((item) => {
  item.addEventListener("click", (event) => {
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

    if (event.currentTarget.classList.contains("active")) {
      const [_, productsDescription, productsIcon] = event.currentTarget.children;
      productsDescription.classList.add("active");
      productsIcon.classList.add("active");
    }
  });
});

