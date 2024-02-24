// Assuming you have the necessary elements defined
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.getElementById("primary-navigation");

navToggle.addEventListener("click", function () {
  const visibility = nav.getAttribute("data-visible") === "true";

  // Toggle visibility
  nav.setAttribute("data-visible", visibility ? "false" : "true");
  navToggle.setAttribute("aria-expanded", visibility ? "false" : "true");
});



