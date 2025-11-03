// Historic Tours of Texas - Main JavaScript File
// Handles navigation, form interactions, and dynamic content

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initForms();
    initAnimations();
    initScrollEffects();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navLinks.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // Reset hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
}

// Form handling
function initForms() {
    const contactForm = document.querySelector('.contact-form');
    const bookingForms = document.querySelectorAll('.booking-form');
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || this.querySelector('input[name="name"]').value;
            const email = formData.get('email') || this.querySelector('input[name="email"]').value;
            const message = formData.get('message') || this.querySelector('textarea[name="message"]').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
        });
    }
    
    // Booking forms for tours
    bookingForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const tourName = this.dataset.tourName || 'selected tour';
            const name = this.querySelector('input[name="name"]')?.value;
            const email = this.querySelector('input[name="email"]')?.value;
            const date = this.querySelector('input[name="date"]')?.value;
            
            if (!name || !email || !date) {
                showNotification('Please fill in all booking details', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            showNotification(`Booking request for ${tourName} received! We'll contact you soon.`, 'success');
            this.reset();
        });
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        maxWidth: '300px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'info':
        default:
            notification.style.backgroundColor = '#17a2b8';
            break;
    }
    
    // Add to page and animate in
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Animations on scroll
function initAnimations() {
    // Intersection Observer for fade-in animations
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
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.tour-card, .about-content, .contact-form, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Scroll effects
function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    // Hide/show header on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                header.style.boxShadow = '0 4px 20px rgba(27, 67, 50, 0.2)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(27, 67, 50, 0.1)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Tour card interactions
function initTourCards() {
    const tourCards = document.querySelectorAll('.tour-card');
    
    tourCards.forEach(card => {
        card.addEventListener('click', function() {
            const tourName = this.querySelector('h3').textContent;
            const tourDescription = this.querySelector('p').textContent;
            const tourPrice = this.querySelector('.tour-price').textContent;
            
            // Create modal with tour details
            showTourModal(tourName, tourDescription, tourPrice);
        });
    });
}

// Tour modal functionality
function showTourModal(name, description, price) {
    // Remove existing modal
    const existingModal = document.querySelector('.tour-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'tour-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h2>${name}</h2>
            <p>${description}</p>
            <div class="modal-price">${price}</div>
            <form class="booking-form" data-tour-name="${name}">
                <div class="form-group">
                    <label for="modal-name">Your Name</label>
                    <input type="text" id="modal-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="modal-email">Email Address</label>
                    <input type="email" id="modal-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="modal-date">Preferred Date</label>
                    <input type="date" id="modal-date" name="date" required>
                </div>
                <button type="submit" class="btn">Book This Tour</button>
            </form>
        </div>
    `;
    
    // Style modal
    Object.assign(modal.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });
    
    const overlay = modal.querySelector('.modal-overlay');
    Object.assign(overlay.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        cursor: 'pointer'
    });
    
    const modalContent = modal.querySelector('.modal-content');
    Object.assign(modalContent.style, {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '15px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        animation: 'fadeInUp 0.3s ease'
    });
    
    const closeBtn = modal.querySelector('.modal-close');
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontSize: '2rem',
        cursor: 'pointer',
        color: '#666'
    });
    
    // Add to page
    document.body.appendChild(modal);
    
    // Event listeners
    const closeModal = () => modal.remove();
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Handle form submission
    const form = modal.querySelector('.booking-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form handling is done in initForms()
        closeModal();
    });
}

// Dashboard functionality
function initDashboard() {
    // Simulate real-time updates for dashboard stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const updateNumber = () => {
            currentValue += increment;
            if (currentValue < finalValue) {
                stat.textContent = Math.floor(currentValue);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = finalValue;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
}

// Initialize tour cards and dashboard if on appropriate pages
if (document.querySelector('.tour-card')) {
    initTourCards();
}

if (document.querySelector('.dashboard')) {
    initDashboard();
}

// Utility function to format dates
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
