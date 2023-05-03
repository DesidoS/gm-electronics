const items = document.querySelectorAll(".products__item");

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    items.forEach((el) => {
      if (el !== event.currentTarget) {
        if (el.style.zIndex > 1) {
          el.style.zIndex = 2;
          setTimeout(() => {
            el.style.zIndex = "";
          }, 500);
        }
        el.classList.remove("active");
        el.firstElementChild.classList.remove("active");
      }
    });

    const currentItem = event.currentTarget;
    const wrapItem = event.currentTarget.children[0];
    currentItem.classList.toggle("active");
    wrapItem.classList.toggle("active");
    currentItem.style.zIndex = 2;
  });
});

const body = document.querySelector("body"),
  observ = new MutationObserver(() => {
    const itemsActive = document.querySelector(".products__item.active");
    if (itemsActive) {
      itemsActive.style.zIndex = 3;
      itemsActive.addEventListener("click", (e) => {
        setTimeout(() => {
          itemsActive.style.zIndex = "";
        }, 500);
      });
    }
  });
observ.observe(body, { childList: true, subtree: true, attributes: true });
