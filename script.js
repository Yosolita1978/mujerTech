// ===== AIRTABLE CONFIG =====
const AIRTABLE_BASE_ID = 'appITRc0fXCObK11r';
const AIRTABLE_TABLE_NAME = 'Interested';

// ===== Mobile Menu =====
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    });
}

// ===== Registration Form =====
const registroForm = document.getElementById('registroForm');
const formStatus = document.getElementById('formStatus');

if (registroForm) {
    registroForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('emailInput').value.trim();
        
        if (!email) {
            showStatus('Por favor ingresa tu correo', 'error');
            return;
        }

        showStatus('Registrando...', 'loading');

        try {
            const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CONFIG.AIRTABLE_API}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [{
                        fields: {
                            'fldgNG4UY79DZGz5a': email,
                            'fldD3Z5xBWgWf7eeJ': new Date().toISOString().split('T')[0],
                            'fldIrilOKjUUa4faZ': 'LandingPage'
                        }
                    }]
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                showStatus('¡Listo! Te avisaremos pronto 🎉', 'success');
                registroForm.reset();
            } else {
                console.error('Airtable error:', data);
                throw new Error(data.error?.message || 'Error en el registro');
            }
        } catch (error) {
            console.error('Registration error:', error);
            showStatus('Hubo un error. Por favor intenta de nuevo.', 'error');
        }
    });
}

function showStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
}