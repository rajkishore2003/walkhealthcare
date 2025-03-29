// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Form Validation and Submission
const appointmentForm = document.getElementById('appointmentForm');
const contactForm = document.getElementById('contactForm');

// Appointment Form Validation
appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const formData = new FormData(this);
    let isValid = true;
    
    formData.forEach((value, key) => {
        if (!value) {
            isValid = false;
            const input = this.querySelector(`[name="${key}"]`);
            if (input) {
                input.classList.add('error');
            }
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Appointment request submitted successfully! We will contact you shortly.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Contact Form Validation
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const formData = new FormData(this);
    let isValid = true;
    
    formData.forEach((value, key) => {
        if (!value) {
            isValid = false;
            const input = this.querySelector(`[name="${key}"]`);
            if (input) {
                input.classList.add('error');
            }
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Message sent successfully! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Remove error class on input focus
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.remove('error');
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Animate on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .doctor-card, .appointment-form, .contact-form');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener('DOMContentLoaded', function() {
    initializeHeroSlider();
});

function initializeHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.hero-slider .prev');
    const nextButton = document.querySelector('.hero-slider .next');
    let currentSlide = 0;

    // Show first slide
    slides[currentSlide].classList.add('active');

    // Auto advance slides
    setInterval(nextSlide, 5000);

    // Navigation buttons
    prevButton.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    nextButton.addEventListener('click', nextSlide);

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
} 