
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

// Professional Journey - Scroll Reveal

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
