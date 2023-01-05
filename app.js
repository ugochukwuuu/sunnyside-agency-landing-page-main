const hamburgerButton = document.querySelector(".hamburger-button");
const mobileMenuContainer = document.querySelector(".mobile-nav-container");
hamburgerButton.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("slide");
});
