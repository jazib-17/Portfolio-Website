/* ============================================================
   JAZIB AHMED — website.js
   ============================================================ */

// ===== Scroll-reveal =====
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); });
    },
    { threshold: 0.15 }
);
document.querySelectorAll('.reveal, .nrevea, .revea').forEach((el) => observer.observe(el));


// ===== Carousel =====
function initCarousel(el) {
    const track  = el.querySelector('.carousel-track');
    const images = Array.from(track.querySelectorAll('img'));
    const dotsEl = el.querySelector('.carousel-dots');
    const total  = images.length;
    let   cur    = 0;

    // build dots
    images.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
    });

    function goTo(n) {
        cur = (n + total) % total;
        track.style.transform = `translateX(-${cur * 100}%)`;
        dotsEl.querySelectorAll('.dot').forEach((d, i) =>
            d.classList.toggle('active', i === cur)
        );
    }

    el.querySelector('.prev').addEventListener('click', () => goTo(cur - 1));
    el.querySelector('.next').addEventListener('click', () => goTo(cur + 1));

    // touch/swipe support
    let touchStartX = 0;
    el.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend',   (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? cur + 1 : cur - 1);
    });
}

document.querySelectorAll('.img-carousel').forEach(initCarousel);


// ===== Scroll to top on refresh =====
window.onbeforeunload = () => window.scrollTo(0, 0);


// ===== Loading screen fade-out =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const screen = document.getElementById('loading-screen');
        if (screen) {
            screen.style.opacity = '0';
            setTimeout(() => { screen.style.display = 'none'; }, 500);
        }
    }, 2000);
});
