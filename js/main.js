
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


// HOBBIES LIGHTBOX / MODAL

const hobbyCards = document.querySelectorAll(".hobby-card");
const hobbyModal = document.getElementById("hobbyModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalHobbyTitle");
const modalDescription = document.getElementById("modalHobbyDescription");

const modalClose = document.getElementById("modalClose");


// OPEN MODAL

hobbyCards.forEach((card) => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;

        hobbyModal.classList.add("active");
        hobbyModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        modalClose.focus();

    });

});


// CLOSE MODAL FUNCTION

function closeHobbyModal() {

    hobbyModal.classList.remove("active");
    hobbyModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// CLOSE USING CLOSE BUTTON

modalClose.addEventListener("click", closeHobbyModal);


// CLOSE WHEN CLICKING OUTSIDE THE MODAL

hobbyModal.addEventListener("click", (event) => {

    if (event.target === hobbyModal) {
        closeHobbyModal();
    }

});


// CLOSE USING ESCAPE KEY

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" &&
        hobbyModal.classList.contains("active")) {

        closeHobbyModal();

    }

});
// BACK TO TOP BUTTON
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* ==============================
   FAMILY CARD FLIP
============================== */

const familySectionCards = document.querySelectorAll(".family-card");

familySectionCards.forEach((card) => {

    card.addEventListener("click", () => {

        const isFlipped = card.classList.toggle("is-flipped");

        card.setAttribute("aria-pressed", isFlipped);

    });

});
