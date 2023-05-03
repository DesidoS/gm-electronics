const header = {
  menuBtn: document.querySelector(".header__menu-button"),
  element: document.querySelector(".header"),
  navItem: document.querySelectorAll(".header__nav-item"),
};

function openBackdrop() {
  window.addEventListener("resize", watchScreenHeight);

  watchScreenHeight();

  header.element.classList.toggle("is-open");

  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }

  if (!header.element.classList.contains("is-open")) {
    window.removeEventListener("resize", watchScreenHeight);
    header.element.classList.remove("backdrop-scroll");
  }
}

function watchScreenHeight() {
  if (window.innerHeight > 632) return;
  header.element.classList.add("backdrop-scroll");
}

header.menuBtn.addEventListener("click", openBackdrop);
header.navItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (!header.element.classList.contains("is-open")) return;
    openBackdrop();
  })
);