const header = {
  menuBtn: document.querySelector(".header__menu-button"),
  element: document.querySelector(".header"),
  navItem: document.querySelectorAll(".header__nav-item"),
};

function openBackdrop() {
  window.addEventListener("resize", watchScreenHeight);

  watchScreenHeight();

  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }

  header.element.classList.toggle("is-open");

  if (!header.element.classList.contains("is-open")) {
    window.removeEventListener("resize", watchScreenHeight);
    header.element.classList.remove("beckdrop-scroll");
  }
}

function watchScreenHeight() {
  if (window.innerHeight > 632) return;
  header.element.classList.add("beckdrop-scroll");
}

header.menuBtn.addEventListener("click", openBackdrop);
header.navItem.forEach((el) => el.addEventListener("click", openBackdrop));