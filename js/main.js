// ── Page Loader ────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('page-loader').classList.add('hidden'), 800);
});

// ── Header scroll shadow ───────────────────────────
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hero Slider ────────────────────────────────────
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
let current  = 0, timer;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), 5000);
}

document.getElementById('prev-btn').addEventListener('click', () => { goTo(current - 1); startTimer(); });
document.getElementById('next-btn').addEventListener('click', () => { goTo(current + 1); startTimer(); });
dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.slide); startTimer(); }));
startTimer();

// ── Kolam dividers ─────────────────────────────────
const kolam = document.getElementById('kolam-tpl');
document.querySelectorAll('.kolam-slot').forEach(el => {
  el.replaceWith(kolam.content.cloneNode(true));
});

// ── Scroll reveal ──────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Horizontal scroll row ──────────────────────────
const scrollRow = document.getElementById('scroll-products');
document.getElementById('scroll-left') .addEventListener('click', () => scrollRow.scrollBy({ left: -680, behavior: 'smooth' }));
document.getElementById('scroll-right').addEventListener('click', () => scrollRow.scrollBy({ left:  680, behavior: 'smooth' }));

// ── Wishlist toggle ────────────────────────────────
document.querySelectorAll('.wishlist-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const on = btn.textContent === '♥';
    btn.textContent  = on ? '♡' : '♥';
    btn.style.color  = on ? '' : '#c0392b';
  });
});

// ── Feather icons ──────────────────────────────────
if (typeof feather !== 'undefined') feather.replace();
