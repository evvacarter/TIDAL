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
// footer page code start from here 
document.addEventListener('DOMContentLoaded', () => {
    const copyEl = document.querySelector('.copy-text');
    if (copyEl) {
        const currentYear = new Data().getFullYear();
        copyEl.innerHTML = `copy; ${currentYear} TIDAL. All right reserved.`;
    }
    const footerAnchors = document.querySelectorAll('.f-links a, .f-logo, .bar-links a');
    footerAnchors.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelectorAll(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                document.querySelectorAll('.f-links a').forEach(a => a.classList.remove('active-target'));
                if (link.closest('.f-links')) {
                    link.classList.add('active-target');
                }
            }
        }
        });
    });
    const cards = document.querySelectorAll('.f-card');
    const isTouchDevice = 'onTouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
        cards.forEach(cards => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                card.style.transform = `perspective(800px) roatateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY. toFixed(2)}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            });
        });
    }
});