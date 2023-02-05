window.addEventListener("load", () => {
  window.addEventListener("scroll", addSticky);

  function addSticky(event) {
    const headerPage = document.querySelector("header");
    const getLineDec = document.querySelector(".line-nav");
    const logo = document.querySelector(".logo");

    if (window.scrollY > 0) {
      headerPage.classList.add("sticky");

      updateLineNavLink(getLineDec);
    } else if (window.scrollY == 0 || window.scrollY < 0) {
      headerPage.classList.remove("sticky");

      updateLineNavLink(getLineDec);
    }

    updateLineNavLink(getLineDec);
  }

  function updateLineNavLink(itemLine) {
    const lineDec = itemLine;

    const navLinks = [...document.querySelectorAll(".nav-link")];
    navLinks.forEach((item) => {
      const { top: topNavLink, height: heightNavLink } =
        item.getBoundingClientRect();
      const margin = 20;

      lineDec.style.top = `${topNavLink + heightNavLink}px`;

      if (window.scrollY == 0) {
        lineDec.style.top = `${topNavLink + heightNavLink + margin}px`;
      }
    });
  }
});
