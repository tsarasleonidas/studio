const breakPoint = 760;
let mainMenu, burgerIcon;
window.addEventListener('load', init);

function init() {
  const mainMenu = document.querySelector("header nav#main-menu");
  const burgerIcon = document.querySelector("header nav#burger-menu");
  if (!burgerIcon) return;
  burgerIcon.addEventListener("click", () => {
    mainMenu.classList.toggle("block");
    burgerIcon.textContent = (burgerIcon.textContent === "⛌") ? "☰" : "⛌";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > breakPoint) {
      mainMenu.classList.remove("block");
      burgerIcon.textContent = "☰";
    }
  });
}