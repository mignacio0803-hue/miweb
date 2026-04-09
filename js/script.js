// NAVBAR SCROLL
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

// STORYTELLING
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Solicitud enviada correctamente 🚀");
});