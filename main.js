// Custom JavaScript – add interactivity here

// ======= Simple slider =======
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slides img');
  let index = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 5000);
  }
});
