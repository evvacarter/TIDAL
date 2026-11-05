document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = mobileNav.classList.toggle("active");
            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !mobileNav.contains(event.target)
            ) {
                mobileNav.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                mobileNav.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
    const desktopLinks = document.querySelectorAll(".desktop-nav .nav-link");
        desktopLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                desktopLinks.forEach(function (item) {
                    item.classList.remove("active");
                });
                link.classList.add("active");
            });
        });
    const interactiveCards = document.querySelectorAll(".feature-card, .explore-panel");
interactiveCards.forEach(function (card) {
    card.addEventListener("mousemove", function (event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});