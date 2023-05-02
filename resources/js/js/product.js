const items = document.querySelectorAll(".products__item");

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    items.forEach((el) => {
      if (el !== event.currentTarget) {
        if (el.style.zIndex > 1) {
          el.style.zIndex = 2;
          setTimeout(() => {
            el.style.zIndex = 1;
          }, 500);
        }
        el.classList.remove("active");
      }
    });

    const currentItem = event.currentTarget;
    currentItem.classList.toggle("active");
  });
});

const body = document.querySelector("body"),
  observ = new MutationObserver(() => {
    const itemsActive = document.querySelector(".products__item.active");
    if (itemsActive) {
      itemsActive.style.zIndex = 3;
      itemsActive.addEventListener("click", (e) => {
        setTimeout(() => {
          itemsActive.style.zIndex = 1;
        }, 500);
      });
    }
  });
observ.observe(body, { childList: true, subtree: true, attributes: true });