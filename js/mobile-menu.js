(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const ScrollToTop = document.querySelector("[data-scroll]");
  const NotScrollBody = document.querySelector("[data-not-scroll-body]");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    ScrollToTop.classList.toggle("is-open");
    NotScrollBody.classList.toggle("not-scroll");
  });
})();
