const visiblity = nav.getAttribute("data-visible") === "true";

// if the nav is closed, open it
if (!visiblity) {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
} else {
    // if the nav is open, close it
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
}
