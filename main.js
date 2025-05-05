/* ======= Slider amélioré ======= */
document.addEventListener('DOMContentLoaded', () => {
  const slides   = document.querySelectorAll('.slides img');
  const prevBtn  = document.querySelector('.slider-btn.prev');
  const nextBtn  = document.querySelector('.slider-btn.next');
  let index = 0, timer;

  const show = i => {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  };
  const next = () => { index = (index + 1) % slides.length; show(index); };
  const prev = () => { index = (index - 1 + slides.length) % slides.length; show(index); };

  nextBtn.addEventListener('click', () => { next(); reset(); });
  prevBtn.addEventListener('click', () => { prev(); reset(); });

  function auto(){ timer = setInterval(next, 5000); }
  function reset(){ clearInterval(timer); auto(); }
  auto();
});

/* ======= Fade‑in on scroll (IntersectionObserver) ======= */
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);            // fade‑in une seule fois
    }
  });
},{threshold:0.2});
faders.forEach(el => observer.observe(el));
