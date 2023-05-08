const cookieValue = document.cookie.replace(
  /(?:(?:^|.*;\s*)cookieConsent\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (!cookieValue) {
  const cookiesBtn = document.querySelector(".cookies__button");
  const cookiesRef = document.querySelector(".cookies");

  cookiesRef.classList.add("active");

  cookiesBtn.addEventListener("click", () => {
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    cookiesRef.style.transform = "translateY(100%)";
    setTimeout(() => {
      cookiesRef.style.display = "none";
    }, 1000);
  });

  const cookiesPopupBg = document.querySelector(".cookies__popup__bg");
  const cookiesPopup = document.querySelector(".cookies__popup");
  const cookiesOpenPopupBtn = document.querySelectorAll(".cookies__open-popup");
  const cookiesClosePopupBtn = document.querySelector(".cookies__close-popup");

  cookiesOpenPopupBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      document.body.style.overflow = "hidden";

      if (window.innerHeight < 632) {
        cookiesPopup.classList.add("scroll");
      }
      if (window.innerWidth < 904) {
        cookiesPopup.classList.add("scroll");
      }

      cookiesPopupBg.classList.add("active");
      cookiesPopup.classList.add("active");
    });
  });

  cookiesClosePopupBtn.addEventListener("click", () => {
    document.body.style.overflow = "";
    cookiesPopupBg.classList.remove("active");
    cookiesPopup.classList.remove("active");
  });
}
