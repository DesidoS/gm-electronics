if (!window.matchMedia("(min-width: 1025px)").matches) {
  const header = {
    menuBtn: document.querySelector(".header__menu-button"),
    element: document.querySelector(".header"),
    navList: document.querySelector(".header__nav-list"),
    navItem: document.querySelectorAll(".header__nav-item"),
    navMenu: document.querySelector(".header__menu"),
    contact: document.querySelector(".header__contact"),
    menuClose: document.querySelector(".header__menu-close"),
    langBtn: document.querySelector(".header__lang-button"),
    logo: document.querySelector(".header__logo-svg"),
    logoFooter: document.querySelector(".header__logo-svg--footer"),
  };

  function openBackdrop() {
    window.addEventListener("resize", watchScreenHeight);

    watchScreenHeight();

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    }

    header.langBtn.classList.toggle("is-open");
    header.element.classList.toggle("is-open");
    header.logo.classList.toggle("is-open");
    header.logoFooter.classList.toggle("is-open");
    header.navList.classList.toggle("is-open");
    header.contact.classList.toggle("is-open");
    header.navMenu.classList.toggle("is-open");
    header.menuClose.classList.toggle("is-open");

    if (!header.element.classList.contains("is-open")) {
      window.removeEventListener("resize", watchScreenHeight);
      header.element.classList.remove("beckdrop-scroll");
    }
  }

  function watchScreenHeight() {
    if (window.innerHeight > 698) return;
    header.element.classList.add("beckdrop-scroll");
  }

  header.menuBtn.addEventListener("click", openBackdrop);
  header.navItem.forEach((el) => el.addEventListener("click", openBackdrop));
}
