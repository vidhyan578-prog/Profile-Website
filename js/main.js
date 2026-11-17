
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");
});


/* =====================================
   PROFESSIONAL JOURNEY
===================================== */

// SHOW MORE / SHOW LESS

const journeyToggleButtons = document.querySelectorAll(".journey-toggle");

journeyToggleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const description = button.previousElementSibling;

        const isExpanded = description.classList.toggle("expanded");

        button.textContent = isExpanded ? "Show Less −" : "Show More +";

        button.setAttribute("aria-expanded", isExpanded);

    });

});






// SCROLL-TRIGGERED ANIMATION

const journeyItems = document.querySelectorAll(".journey-item");

const journeyObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("journey-visible");

            journeyObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

journeyItems.forEach((item) => {

    journeyObserver.observe(item);

});
