"use strict";



document.addEventListener("DOMContentLoaded", () => {

    /*=========================================================
      ELEMENT SELECTORS
    =========================================================*/

    // Navbar
    const navbar = document.querySelector(".portfolio-navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".glass-menu a");

    // Brand
    const brand = document.querySelector(".brand");

    // Mobile Menu
    const mobileMenu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".menu-btn");

    // Hero Buttons
    const portfolioButton = document.querySelector(".button.type1");
    const hireButtons = document.querySelectorAll(".btn-23");

    // Contact
    const emailInput = document.getElementById("email-input");
    const bookCallButton = document.querySelector(".btn-orange");

    // Blog
    const viewAllButton = document.querySelector(
        'button[aria-label="View all blog posts"]'
    );

    // Service Cards
    const serviceCards = document.querySelectorAll(".service-card");

    // Portfolio Images
    const portfolioImages = document.querySelectorAll(".portfolio-img");

    // Footer Social Cards
    const socialCards = document.querySelectorAll(".main .card");

    // Every Section
    const sections = document.querySelectorAll("section, footer");

    /*=========================================================
      PLACEHOLDER LINKS
      Replace "#" with your own links later.
    =========================================================*/

    const PLACEHOLDER_LINKS = {

        portfolio: "https://github.com/Lawrence-dev256",

        hire: "https://adewaletomisin35@gmail.com",

        instagram: "#",

        twitter: "https://x.com/thelawrett?s=21",

        facebook: "https://web.facebook.com/profile.php?id=61570767509752",

        whatsapp: "https://wa.me/2349068956341",

        google: "https://adewaletomisin35@gmail.com",

        discord: "https://discord.com/channels/@me",

        github: "https://github.com/Lawrence-dev256",

        telegram: "https://t.me/Lawrence_dev03",

        Linkedin: "http://linkedin.com/in/lawrence-d-dev-b467b032a",

        viewAll: "blog.html",

        brand: "#home"



    };

    /*=========================================================
      BRAND CLICK
    =========================================================*/

    if (brand) {

        brand.addEventListener("click", (event) => {

            event.preventDefault();

            window.location.href = PLACEHOLDER_LINKS.brand;

        });

    }

    /*=========================================================
      SMOOTH SCROLL
    =========================================================*/

    function smoothScroll(targetID) {

        const target = document.querySelector(targetID);

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    /*=========================================================
      DESKTOP NAVIGATION
    =========================================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const target = link.getAttribute("href");

            if (!target.startsWith("#")) return;

            event.preventDefault();

            smoothScroll(target);

        });

    });

    /*=========================================================
      MOBILE NAVIGATION
    =========================================================*/

    mobileLinks.forEach(link => {

        link.addEventListener("click", event => {

            const target = link.getAttribute("href");

            event.preventDefault();

            smoothScroll(target);

            if (mobileMenu &&
                bootstrap.Collapse.getInstance(mobileMenu)) {

                bootstrap.Collapse
                    .getInstance(mobileMenu)
                    .hide();

            }

        });

    });

    /*=========================================================
      ACTIVE NAVIGATION
    =========================================================*/

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            const href = link.getAttribute("href").replace("#", "");

            if (href === currentSection) {

                link.classList.add("active-link");

            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();

    /*=========================================================
      HERO PORTFOLIO BUTTON
    =========================================================*/

    if (portfolioButton) {

        portfolioButton.addEventListener("click", () => {

            window.location.href = PLACEHOLDER_LINKS.portfolio;

        });

    }

    /*=========================================================
      HIRE BUTTONS
    =========================================================*/

    hireButtons.forEach(button => {

        button.addEventListener("click", () => {

            window.location.href = PLACEHOLDER_LINKS.hire;

        });

    });

    /*=========================================================
      VIEW ALL BLOG BUTTON
    =========================================================*/

    if (viewAllButton) {

        viewAllButton.addEventListener("click", () => {

            window.location.href = PLACEHOLDER_LINKS.viewAll;

        });

    }

    /*=========================================================
      BOOK CALL BUTTON
    =========================================================*/

    if (bookCallButton) {

        bookCallButton.addEventListener("click", () => {

            const email = emailInput.value.trim();

            if (email === "") {

                alert("Please enter your email address.");

                emailInput.focus();

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                emailInput.focus();

                return;

            }

            window.location.href = "https://adewaletomisin35@gmail.com";

        });

    }

    /*=========================================================
      SOCIAL MEDIA PLACEHOLDERS
    =========================================================*/

    socialCards.forEach((card, index) => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            switch (index) {

                case 0:
                    window.location.href = PLACEHOLDER_LINKS.instagram;
                    break;

                case 1:
                    window.location.href = PLACEHOLDER_LINKS.twitter;
                    break;

                case 2:
                    window.location.href = PLACEHOLDER_LINKS.facebook;
                    break;

                case 3:
                    window.location.href = PLACEHOLDER_LINKS.whatsapp;
                    break;

                case 4:
                    window.location.href = PLACEHOLDER_LINKS.google;
                    break;
                
                case 5:
                    window.location.href = PLACEHOLDER_LINKS.discord
                    break;
                
                case 6:
                    window.location.href = PLACEHHOLDER_LINKS.github
                    break;

                case 7:
                    window.location.href = PLACEHHOLDER_LINKS.telegram
                    break;

                case 8:
                    window.location.href = PLACEHHOLDER_LINKS.Linkedin
                    break;   

            }

        });

    });

    /*=========================================================
      SERVICE CARD CLICK
    =========================================================*/

    serviceCards.forEach(card => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            // Replace later
            window.location.href = "#";

        });

    });

    /*=========================================================
      PORTFOLIO IMAGE CLICK
    =========================================================*/

    portfolioImages.forEach(image => {

        image.style.cursor = "pointer";

        image.addEventListener("click", () => {

            window.location.href = PLACEHOLDER_LINKS.portfolio;

        });

    });

    /*=========================================================
      INITIALIZE AOS
    =========================================================*/

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,

            once: true,

            easing: "ease-in-out"

        });

    }

});

    /*=========================================================
      COUNTER ANIMATION
    =========================================================*/

    const counterElements = document.querySelectorAll(
        ".client-stat h4, .experience h4, .counter-box h3"
    );

    let counterStarted = false;

    function animateCounter(element) {

        const text = element.textContent.trim();

        const number = parseInt(text.replace(/\D/g, ""));

        if (isNaN(number)) return;

        const suffix = text.replace(/[0-9]/g, "");

        let current = 1;

        const duration = 2000;

        const increment = Math.max(1, Math.ceil(number / 100));

        const timer = setInterval(() => {

            current += increment;

            if (current >= number) {

                current = number;

                clearInterval(timer);

            }

            element.textContent = current + suffix;

        }, duration / 100);

    }

    function startCounters() {

        if (counterStarted) return;

        counterStarted = true;

        counterElements.forEach(counter => {

            animateCounter(counter);

        });

    }

    /*=========================================================
      OBSERVER FOR COUNTERS
    =========================================================*/

    const counterSection = document.querySelector(".hire-section");

    if (counterSection) {

        const counterObserver = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounters();

                        counterObserver.disconnect();

                    }

                });

            },

            {

                threshold: 0.35

            }

        );

        counterObserver.observe(counterSection);

    }

    /*=========================================================
      CLIENT SERVED & YEARS
      (Hero Section Counters)
    =========================================================*/

    const heroCounters = document.querySelector(".hero");

    if (heroCounters) {

        const heroObserver = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    document
                        .querySelectorAll(".client-stat h4, .experience h4")
                        .forEach(counter => {

                            animateCounter(counter);

                        });

                    heroObserver.disconnect();

                });

            },

            {

                threshold: 0.25

            }

        );

        heroObserver.observe(heroCounters);

    }

    /*=========================================================
      NAVBAR SCROLL EFFECT
    =========================================================*/

    function navbarScrollEffect() {

        if (window.scrollY > 60) {

            navbar.style.transition = "0.35s ease";

            navbar.style.background = "#050505";

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.45)";

        } else {

            navbar.style.background = "#070707";

            navbar.style.boxShadow =
                "#ed5a3a 0px 19px 38px, rgba(0,0,0,.22) 0px 15px 12px";

        }

    }

    window.addEventListener("scroll", navbarScrollEffect);

    navbarScrollEffect();

    /*=========================================================
      ACTIVE SERVICE CARD
    =========================================================*/

    serviceCards.forEach(card => {

        card.addEventListener("click", () => {

            serviceCards.forEach(item => {

                item.classList.remove("active");

            });

            card.classList.add("active");

        });

    });

    /*=========================================================
      PORTFOLIO IMAGE EFFECT
    =========================================================*/

    portfolioImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.03)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "";

        });

    });

    /*=========================================================
      BLOG CARD CLICK
    =========================================================*/

    const blogCards = document.querySelectorAll(".blog-card");

    blogCards.forEach(card => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            window.location.href = "#";

        });

    });

    /*=========================================================
      TESTIMONIAL CARDS
    =========================================================*/

    const testimonialCards =
        document.querySelectorAll(".testimonial-card");

    testimonialCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "0.35s ease";

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*=========================================================
      CONTACT INPUT ENTER KEY
    =========================================================*/

    if (emailInput) {

        emailInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                event.preventDefault();

                bookCallButton.click();

            }

        });

    }

    /*=========================================================
      PREVENT EMPTY LINKS
    =========================================================*/

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

        });

    });

    /*=========================================================
      WINDOW RESIZE
    =========================================================*/

    window.addEventListener("resize", () => {

        updateActiveNavigation();

    });

    /*=========================================================
      PAGE LOADED
    =========================================================*/

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });

 