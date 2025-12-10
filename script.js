// Donation button functionality
document.addEventListener('DOMContentLoaded', function() {
    const donateBtn = document.getElementById('donate-btn');
    const readMoreBtn = document.getElementById('read-more-btn');
    
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            window.open('https://givebutter.com/donatetosvetpeace', '_blank');
            console.log('Donation button clicked');
        });
    }

    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            // Navigate to the about page
            window.location.href = 'about.html';
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple fade-in animation for content sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe hero additional media blocks so they reveal on scroll
    const additionalMedia = document.querySelectorAll('.additional-videos .video-container');
    additionalMedia.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add a simple hover effect to steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Toggle reading lists in courses section
    const readingToggles = document.querySelectorAll('.reading-toggle');
    readingToggles.forEach(toggle => {
        const listId = toggle.getAttribute('aria-controls');
        const readingList = document.getElementById(listId);

        if (!readingList) {
            return;
        }

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', (!isExpanded).toString());

            if (isExpanded) {
                readingList.setAttribute('hidden', '');
                toggle.textContent = 'View reading list';
            } else {
                readingList.removeAttribute('hidden');
                toggle.textContent = 'Hide reading list';
            }
        });
    });

    // Toggle course accordions
    const courseAccordions = document.querySelectorAll('.course-accordion-header');
    courseAccordions.forEach(header => {
        const contentId = header.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = header.querySelector('.accordion-icon');

        if (!content) {
            return;
        }

        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', (!isExpanded).toString());

            if (isExpanded) {
                content.setAttribute('hidden', '');
                icon.textContent = '+';
            } else {
                content.removeAttribute('hidden');
                icon.textContent = '−';
            }
        });
    });
}); 