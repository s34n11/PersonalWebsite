
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("navigation-menu");

function setMenuOpen(isOpen) {
    dropdownMenu.hidden = !isOpen;
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(dropdownMenu.hidden);
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu-container")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});
