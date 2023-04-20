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
        Array.from(child.children).forEach((child) => {
          child.classList?.remove("active");
        });
      });
    });

    if (event.currentTarget.classList.contains("active")) {
      const [_, productsDescription, productsIcon] =
        event.currentTarget.children[0].children;
      productsDescription.classList.add("active");
      productsIcon.classList.add("active");
    }
  });
});

const body = document.querySelector("body"),
  observ = new MutationObserver(() => {
    const itemsActive = document.querySelector(".products__item.active");
    if (itemsActive) {
      itemsActive.style.zIndex = 2;
      itemsActive.addEventListener("click", (e) => {
        setTimeout(() => {
          itemsActive.style.zIndex = 1;
        }, 1000);
      });
    }
  });
observ.observe(body, { childList: true, subtree: true, attributes: true });
