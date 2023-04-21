const items = document.querySelectorAll(".advantage__item");

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
      const [, , advantageIcon, advantageDescription] =
        event.currentTarget.children;
      advantageDescription.classList.add("active");
      advantageIcon.classList.add("active");
    }
  });
});
