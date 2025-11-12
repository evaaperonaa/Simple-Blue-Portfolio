const socialsSection = document.getElementById('socials-section');
const emailSection = document.getElementById('email-section');
const toggleToEmail = document.getElementById('toggle-to-email');
const toggleToSocials = document.getElementById('toggle-to-socials');

// Función para mostrar la sección de email (formulario)
toggleToEmail.addEventListener('click', () => {
    socialsSection.classList.remove('active');
    emailSection.classList.add('active');
});

// Función para mostrar la sección de socials
toggleToSocials.addEventListener('click', () => {
    emailSection.classList.remove('active');
    socialsSection.classList.add('active');
});


