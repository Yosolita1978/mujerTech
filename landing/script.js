// Countdown Timer
function initCountdown() {
    const targetDate = new Date('2025-12-02T18:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<p style="font-size: 1.5rem;">¡El taller ha comenzado!</p>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth Scroll to Registration
function scrollToRegistration() {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
        registrationSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// FAQ Toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Form Validation and Submission
function initFormHandling() {
    const form = document.getElementById('registrationForm');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            business: document.getElementById('business').value,
            experience: document.getElementById('experience').value,
            paymentPlan: document.getElementById('paymentPlan').value,
            timestamp: new Date().toISOString()
        };

        submitRegistration(formData);
    });
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const business = document.getElementById('business').value.trim();
    const experience = document.getElementById('experience').value;
    const terms = document.getElementById('terms').checked;

    if (!name || name.length < 3) {
        showNotification('Por favor ingresa tu nombre completo', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return false;
    }

    if (!phone || phone.length < 10) {
        showNotification('Por favor ingresa un número de WhatsApp válido', 'error');
        return false;
    }

    if (!business || business.length < 3) {
        showNotification('Por favor describe tu negocio o emprendimiento', 'error');
        return false;
    }

    if (!experience) {
        showNotification('Por favor selecciona tu nivel de experiencia con IA', 'error');
        return false;
    }

    if (!terms) {
        showNotification('Debes aceptar recibir información del taller', 'error');
        return false;
    }

    return true;
}

function submitRegistration(formData) {
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Procesando...';
    submitButton.style.opacity = '0.7';

    setTimeout(() => {
        console.log('Datos de inscripción al taller:', formData);
        
        localStorage.setItem('mujertech_workshop_registration', JSON.stringify(formData));
        
        showSuccessMessage(formData.email);
        
        updateSpotsLeft();
        
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.style.opacity = '1';
        
        sendWhatsAppNotification(formData);
    }, 2000);
}

function showSuccessMessage(email) {
    const form = document.querySelector('.registration-form');
    const successMessage = document.getElementById('successMessage');
    const confirmedEmail = document.getElementById('confirmedEmail');
    
    if (form && successMessage && confirmedEmail) {
        form.style.display = 'none';
        confirmedEmail.textContent = email;
        successMessage.style.display = 'block';
        
        showNotification('¡Cupo reservado! Revisa tu email para más detalles.', 'success');
        
        setTimeout(() => {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

function sendWhatsAppNotification(formData) {
    const message = encodeURIComponent(
        `¡Nueva inscripción al Taller MujerTech!\n\n` +
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `WhatsApp: ${formData.phone}\n` +
        `Negocio: ${formData.business}\n` +
        `Experiencia IA: ${formData.experience}\n` +
        `Fecha: 2 de Diciembre, 6:00 PM`
    );
    
    console.log('Mensaje para WhatsApp:', message);
}

function updateSpotsLeft() {
    const spotsLeftElements = document.querySelectorAll('#spotsLeft');
    const currentSpots = parseInt(localStorage.getItem('mujertech_spots_left') || '15');
    const newSpots = Math.max(0, currentSpots - 1);
    
    localStorage.setItem('mujertech_spots_left', newSpots.toString());
    
    spotsLeftElements.forEach(element => {
        element.textContent = newSpots;
        element.style.animation = 'pulse 0.5s';
    });
}

function initSpotsCounter() {
    const savedSpots = localStorage.getItem('mujertech_spots_left');
    if (savedSpots) {
        const spotsLeftElements = document.querySelectorAll('#spotsLeft');
        spotsLeftElements.forEach(element => {
            element.textContent = savedSpots;
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification-toast');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.textContent = message;
    
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#2c8e9c'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideInDown 0.3s ease;
        max-width: 90%;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Scroll Animations
function initScrollAnimations() {
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

    const animatedElements = document.querySelectorAll(
        '.problem-card, .module-card, .testimonial-card, .bonus-card, .pricing-card'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Track User Behavior
function trackUserBehavior() {
    let timeOnPage = 0;
    const startTime = Date.now();
    
    setInterval(() => {
        timeOnPage = Math.floor((Date.now() - startTime) / 1000);
        localStorage.setItem('mujertech_time_on_page', timeOnPage);
    }, 5000);

    const ctaButtons = document.querySelectorAll('.cta-button, .plan-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('CTA clicked:', buttonText, 'Time on page:', timeOnPage, 'seconds');
            
            const clicks = JSON.parse(localStorage.getItem('mujertech_cta_clicks') || '[]');
            clicks.push({
                button: buttonText,
                timestamp: new Date().toISOString(),
                timeOnPage: timeOnPage
            });
            localStorage.setItem('mujertech_cta_clicks', JSON.stringify(clicks));
        });
    });

    window.addEventListener('beforeunload', function() {
        const finalTime = Math.floor((Date.now() - startTime) / 1000);
        console.log('User spent', finalTime, 'seconds on page');
    });
}

// Workshop Information Logger
function logWorkshopInfo() {
    console.log('Workshop Info:');
    console.log('Date: December 2, 2025');
    console.log('Time: 6:00 PM - 8:00 PM');
    console.log('Duration: 2 hours');
    console.log('Cost: FREE');
    console.log('Spots available: 20');
}

// Email Input Enhancement
function enhanceEmailInput() {
    const emailInput = document.getElementById('email');
    if (!emailInput) return;

    emailInput.addEventListener('blur', function() {
        const email = this.value.trim().toLowerCase();
        
        const commonDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];
        const emailParts = email.split('@');
        
        if (emailParts.length === 2) {
            const domain = emailParts[1];
            
            commonDomains.forEach(commonDomain => {
                if (levenshteinDistance(domain, commonDomain) === 1) {
                    const suggestion = `${emailParts[0]}@${commonDomain}`;
                    if (confirm(`¿Quisiste decir ${suggestion}?`)) {
                        this.value = suggestion;
                    }
                }
            });
        }
    });
}

function levenshteinDistance(str1, str2) {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
}

// Phone Input Formatting
function formatPhoneInput() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0 && !value.startsWith('57')) {
            value = '57' + value;
        }
        
        if (value.length > 12) {
            value = value.slice(0, 12);
        }
        
        if (value.length >= 2) {
            value = '+' + value.slice(0, 2) + ' ' + value.slice(2);
        }
        
        e.target.value = value;
    });
}

// Add CSS animations dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInDown {
            from {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutUp {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initFormHandling();
    initSpotsCounter();
    initScrollAnimations();
    trackUserBehavior();
    logWorkshopInfo();
    enhanceEmailInput();
    formatPhoneInput();
    addAnimationStyles();
    
    console.log('MujerTech Landing Page initialized');
    console.log('Workshop date:', 'December 2, 2025 - 6:00 PM');
});

// Handle page visibility for countdown accuracy
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        initCountdown();
    }
});

// Prevent form resubmission on page reload
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        const form = document.getElementById('registrationForm');
        if (form) {
            form.reset();
        }
    }
});