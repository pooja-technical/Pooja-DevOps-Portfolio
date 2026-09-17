/* =========================================================
   POOJA MANGALYA — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* =========================
   SCROLL ANIMATION
   ========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach((section) => {
    observer.observe(section);
});


/* =========================
   TERMINAL TYPING EFFECT
   ========================= */

const typingElement = document.querySelector(".typing-text");

const commands = [
    "whoami",
    "cloud engineer --learning",
    "docker ps",
    "terraform plan",
    "git push origin main"
];

let commandIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeCommand() {

    if (!typingElement) return;

    const currentCommand = commands[commandIndex];

    if (!deleting) {

        typingElement.textContent =
            currentCommand.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentCommand.length) {

            deleting = true;

            setTimeout(typeCommand, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentCommand.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            commandIndex =
                (commandIndex + 1) % commands.length;

        }

    }

    setTimeout(
        typeCommand,
        deleting ? 50 : 90
    );
}


typeCommand();


/* =========================
   PROJECT CARD INTERACTION
   ========================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================
   CURRENT YEAR
   ========================= */

console.log(
    "☁ Pooja Mangalya — Cloud & DevOps Portfolio loaded successfully."
);
