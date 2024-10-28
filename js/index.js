const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  if (navMenu.classList.contains("visible")) {
    navMenu.classList.remove("visible");
    navMenu.classList.add("hidden");
  } else {
    navMenu.classList.add("visible");
    navMenu.classList.remove("hidden");
  }
});
