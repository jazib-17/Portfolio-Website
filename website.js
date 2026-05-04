/* ============================================================
   JAZIB AHMED — website.js
   Replaced manual scroll maths with IntersectionObserver.
   All original behaviour preserved.
   ============================================================ */

// ===== Scroll-reveal via IntersectionObserver =====
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.18 }
);

document.querySelectorAll('.reveal, .nrevea, .revea').forEach((el) => {
    observer.observe(el);
});

// ===== Scroll to top on page refresh =====
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ===== Loading screen fade-out =====
window.addEventListener('load', function () {
    setTimeout(function () {
        const screen = document.getElementById('loading-screen');
        if (screen) {
            screen.style.opacity = '0';
            setTimeout(() => { screen.style.display = 'none'; }, 500);
        }
    }, 2000);
});
