/* ==================================================
   NEXYRA - JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================
       ANNÉE AUTOMATIQUE DU FOOTER
    ================================================ */

    const yearElement = document.querySelector(".footer-bottom span");

    if (yearElement) {
        yearElement.textContent =
            `© ${new Date().getFullYear()} Nexyra. Tous droits réservés.`;
    }


    /* ================================================
       ANIMATION D'APPARITION AU SCROLL
    ================================================ */

    const elements = document.querySelectorAll(
        ".service-card, .portfolio-item, .offer, .section-title, .about-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach((element) => {
        element.classList.add("hidden");
        observer.observe(element);
    });


    /* ================================================
       LIENS DU MENU
    ================================================ */

    const navigationLinks = document.querySelectorAll(
        '.nav a, .header-button, .button, .contact-button, .dark-button, .offer-button'
    );

    navigationLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const target = link.getAttribute("href");

            if (!target || !target.startsWith("#")) {
                return;
            }

            const section = document.querySelector(target);

            if (!section) {
                return;
            }

            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ================================================
       HEADER AU SCROLL
    ================================================ */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* ================================================
       ANIMATION DU LOGO
    ================================================ */

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.addEventListener("mouseenter", () => {
            logo.style.letterSpacing = "1px";
        });

        logo.addEventListener("mouseleave", () => {
            logo.style.letterSpacing = "-1px";
        });

    }


    /* ================================================
       EFFET SUR LES CARTES DE SERVICES
    ================================================ */

    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -5;
            const rotateY = ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* ================================================
       BOUTON "RETOUR EN HAUT"
    ================================================ */

    const topButton = document.querySelector(
        '.footer-bottom a[href="#accueil"]'
    );

    if (topButton) {

        topButton.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================================================
       CONSOLE NEXYRA
    ================================================ */

    console.log(
        "%c NEXYRA ",
        "background:#ffd400;color:#080808;font-size:20px;font-weight:bold;padding:8px;"
    );

    console.log(
        "Bienvenue dans le code de Nexyra."
    );

});