// ================================
// PORTFOLIO JAVASCRIPT
// ================================

// Welcome message in the browser console
console.log("Welcome to Pooja Mangalya's Cloud & DevOps Portfolio!");


// ================================
// SCROLL ANIMATION
// ================================

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
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
