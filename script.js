// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        if(mobileMenu.classList.contains('show')) mobileMenu.classList.remove('show');
    });
});

// Contact form
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
    contactForm.reset();
    setTimeout(() => formMessage.textContent = '', 5000);
});
