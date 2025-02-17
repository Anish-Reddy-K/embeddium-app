// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check on page load

// Add animate-on-scroll class to elements
document.querySelectorAll('section:not(#hero) > *').forEach(element => {
    element.classList.add('animate-on-scroll');
});

// Add this to your existing JavaScript
document.querySelector('.scroll-indicator').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add this to your main.js file

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    document.querySelector('header .header-logo').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });

    
    document.querySelector('.footer-logo-link').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });
    
    function getHeaderHeight() {
        const header = document.querySelector('header');
        return header.offsetHeight;
    }
    
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        const headerHeight = getHeaderHeight();
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    document.querySelector('.scroll-indicator').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement('about-features-ui');
    });

    document.querySelector('.last-updated').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement('changelog');
    });

    document.querySelector('a[href="#about-features-ui"]').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement('about-features-ui');
    });

});