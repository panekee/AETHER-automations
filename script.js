// AETHER Automation - JavaScript

// Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Fade-in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const formMessage = document.getElementById('form-message');
            
            // Reset previous messages
            formMessage.classList.remove('success', 'error', 'hidden');
            
            // Basic validation
            let isValid = true;
            let errorMessage = '';
            
            if (!name.value.trim()) {
                isValid = false;
                errorMessage = 'El nom és obligatori.';
                name.focus();
            } else if (!email.value.trim() || !isValidEmail(email.value)) {
                isValid = false;
                errorMessage = 'Introdueix un email vàlid.';
                email.focus();
            } else if (!message.value.trim()) {
                isValid = false;
                errorMessage = 'El missatge és obligatori.';
                message.focus();
            }
            
            if (!isValid) {
                formMessage.textContent = errorMessage;
                formMessage.classList.add('error');
                formMessage.classList.remove('hidden');
                return;
            }
            
            // If using EmailJS (uncomment and configure)
            /*
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function() {
                    formMessage.textContent = 'Missatge enviat correctament! Et contactarem aviat.';
                    formMessage.classList.add('success');
                    formMessage.classList.remove('hidden');
                    contactForm.reset();
                }, function(error) {
                    formMessage.textContent = 'Error en enviar el missatge. Torna-ho a intentar.';
                    formMessage.classList.add('error');
                    formMessage.classList.remove('hidden');
                });
            */
            
            // Envío real con Formspree
            // IMPORTANTE: sustituye YOUR_FORM_ID por tu Form ID real en contacte.html y aquí si quieres forzarlo.
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    formMessage.textContent = 'Missatge enviat correctament! Et contactarem aviat.';
                    formMessage.classList.add('success');
                    formMessage.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    throw new Error('Error en enviar el missatge');
                }
            })
            .catch(error => {
                formMessage.textContent = 'Error en enviar el missatge. Torna-ho a intentar.';
                formMessage.classList.add('error');
                formMessage.classList.remove('hidden');
            });
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);
}

