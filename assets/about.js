// Scroll fade-in
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(fader => observer.observe(fader));

  // Skills cards escalonadas
  const skillCards = document.querySelectorAll('.fade-in-card');
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        skillCards.forEach((card, index) => {
          setTimeout(() => card.classList.add('visible'), index * 150);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if(skillCards.length > 0) cardObserver.observe(skillCards[0].parentElement);

  // Parallax hero image
  const heroImage = document.querySelector('.about-image img');
  window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    heroImage.style.transform = `translateY(${offset * 0.2}px)`; 
  });
});