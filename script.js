// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .policy-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form functionality (if you want to add a contact form later)
function handleContactForm(event) {
    event.preventDefault();
    // Add contact form handling logic here
    console.log('Contact form submitted');
}

// Pricing card hover effects
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('featured')) {
            card.style.transform = 'scale(1.05)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Service card click effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
        }, 150);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Back to top functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #d4a574;
    color: #1a1a1a;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'scale(1.1)';
    backToTopButton.style.background = '#c1965f';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'scale(1)';
    backToTopButton.style.background = '#d4a574';
});

// Portfolio Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Portfolio item hover effects
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add subtle animation to piano keys when hovering music item
            if (item.classList.contains('music-item')) {
                const keys = item.querySelectorAll('.key');
                keys.forEach((key, index) => {
                    setTimeout(() => {
                        key.style.animation = 'keyPress 0.3s ease';
                    }, index * 50);
                });
            }
            
            // Add animation to web preview elements
            if (item.classList.contains('web-item')) {
                const previewElements = item.querySelectorAll('.preview-header, .preview-nav, .preview-card');
                previewElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.animation = 'pulse 0.5s ease';
                    }, index * 100);
                });
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // Reset animations
            const animatedElements = item.querySelectorAll('.key, .preview-header, .preview-nav, .preview-card');
            animatedElements.forEach(element => {
                element.style.animation = '';
            });
        });
    });
    
    // Audio player functionality for music item
    const audioPlayer = document.querySelector('.hidden-audio');
    if (audioPlayer) {
        const musicItem = document.querySelector('.music-item');
        if (musicItem) {
            musicItem.addEventListener('click', (e) => {
                if (!e.target.closest('audio')) {
                    if (audioPlayer.paused) {
                        audioPlayer.play();
                    } else {
                        audioPlayer.pause();
                    }
                }
            });
        }
    }
});

// Enrollment Form Type Selector
document.addEventListener('DOMContentLoaded', () => {
    const formTypeButtons = document.querySelectorAll('.form-type-btn');
    const formContainers = document.querySelectorAll('.enrollment-form-container');
    const enrollmentTitle = document.getElementById('enrollment-title');
    const enrollmentDescription = document.getElementById('enrollment-description');

    const adultContent = {
        title: 'Get Started Today',
        description: 'Fill out the enrollment form below to secure your spot and begin your personalized learning experience. Our enrollment process is quick and easy!'
    };

    const guardianContent = {
        title: 'Enroll Your Child',
        description: 'Complete the enrollment form to get your child started with personalized learning. We work with students ages 5-17 and provide a safe, nurturing environment.'
    };

    formTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const formType = button.getAttribute('data-form');
            
            // Remove active class from all buttons and containers
            formTypeButtons.forEach(btn => btn.classList.remove('active'));
            formContainers.forEach(container => container.classList.remove('active'));
            
            // Add active class to clicked button and corresponding container
            button.classList.add('active');
            document.getElementById(`${formType}-form`).classList.add('active');
            
            // Update content based on form type
            if (formType === 'adult') {
                enrollmentTitle.textContent = adultContent.title;
                enrollmentDescription.textContent = adultContent.description;
            } else if (formType === 'guardian') {
                enrollmentTitle.textContent = guardianContent.title;
                enrollmentDescription.textContent = guardianContent.description;
            }
        });
    });
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

