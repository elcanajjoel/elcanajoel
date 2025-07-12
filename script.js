// Create scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    observer.observe(section);
});

// Update scroll progress and header
window.addEventListener('scroll', () => {
    // Update scroll progress bar
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;

    // Header scroll effect
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect for project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    project.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Simple form handler (no backend, just demo)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});

// Show thank you message on successful form submission
document.querySelector('form').addEventListener('submit', function() {
    const thankYouMessage = document.getElementById('thankyou-message');
    if (thankYouMessage) {
        thankYouMessage.classList.add('visible');
        setTimeout(() => {
            thankYouMessage.classList.remove('visible');
        }, 5000);
    }
});
