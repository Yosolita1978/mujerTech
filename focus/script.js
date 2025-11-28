// ============================================
// MUJERTECH - TALLER INTRODUCTORIO DE IA
// Script Principal
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentModule = 'presessionCheck';
let startTime = Date.now();
let timerInterval;
let presessionCompleted = localStorage.getItem('presessionCompleted') === 'true';

let selectedNeed = null;
let selectedTone = null;
let selectedBackground = null;
let selectedColors = null;

const modules = [
    'presessionCheck',
    'presession', 
    'welcome', 
    'module1', 
    'module2', 
    'module3', 
    'module4', 
    'module5', 
    'module6'
];

const moduleNames = {
    'presessionCheck': 'Inicio',
    'presession': 'Práctica básica',
    'welcome': 'Bienvenida',
    'module1': 'Qué es la IA',
    'module2': 'Cómo hablarle a la IA',
    'module3': 'Herramientas',
    'module4': 'Crear imágenes',
    'module5': 'Cuidados importantes',
    'module6': '¡Felicitaciones!'
};

const mythAnswers = {
    1: 'mentira',
    2: 'verdad',
    3: 'mentira'
};

const glossaryTerms = [
    { term: 'App', definition: 'Un programa que vive en tu celular. Ejemplo: WhatsApp es una app.' },
    { term: 'Botón', definition: 'Un cuadro en la pantalla que hace algo cuando lo tocas.' },
    { term: 'ChatGPT', definition: 'Una app de inteligencia artificial que te ayuda a escribir textos. Es gratis.' },
    { term: 'Canva', definition: 'Una app para crear imágenes y diseños bonitos. Tiene versión gratis.' },
    { term: 'Copiar', definition: 'Guardar un texto para usarlo en otro lugar. Tocas y mantienes, luego eliges "Copiar".' },
    { term: 'Descargar', definition: 'Guardar algo de internet en tu celular.' },
    { term: 'IA', definition: 'Inteligencia Artificial. Programas de computadora muy inteligentes que pueden crear textos, imágenes y más.' },
    { term: 'Imagen generada', definition: 'Una imagen creada por la IA, no es una foto real tomada con cámara.' },
    { term: 'Internet', definition: 'La red que conecta computadoras y celulares en todo el mundo. Necesitas internet para usar ChatGPT y Canva.' },
    { term: 'Pegar', definition: 'Poner el texto que copiaste en un lugar nuevo. Tocas y mantienes donde quieres pegar.' },
    { term: 'Prompt', definition: 'El mensaje que le escribes a la IA para pedirle algo. Como cuando le pides algo a alguien por WhatsApp.' },
    { term: 'Redes sociales', definition: 'Apps donde compartes fotos y mensajes con otras personas. Ejemplo: WhatsApp, Instagram, Facebook.' },
    { term: 'Tono', definition: 'La forma en que "suena" un texto. Puede ser amigable, profesional, divertido, etc.' }
];

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
    startTimer();
    
    if (presessionCompleted) {
        showModule('welcome');
    } else {
        showModule('presessionCheck');
    }
    
    renderGlossary();
    setupMobileOptimizations();
}

function setupMobileOptimizations() {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
}

// ============================================
// TIMER
// ============================================

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = `${minutes}:${seconds}`;
        }
    }, 1000);
}

// ============================================
// NAVEGACIÓN DE MÓDULOS
// ============================================

function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
        targetModule.classList.add('active');
    }
    
    currentModule = moduleId;
    updateProgress();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.setItem('currentModule', moduleId);
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const progressPercent = document.getElementById('progressPercent');
    const currentSection = document.getElementById('currentSection');
    
    const displayModules = modules.filter(m => m !== 'presessionCheck' && m !== 'presession');
    let currentIndex = displayModules.indexOf(currentModule);
    
    if (currentModule === 'presessionCheck' || currentModule === 'presession') {
        currentIndex = -1;
    }
    
    const totalModules = displayModules.length;
    const progress = currentIndex >= 0 ? ((currentIndex + 1) / totalModules) * 100 : 0;
    
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) {
        progressText.textContent = currentIndex >= 0 ? `Bloque ${currentIndex + 1} de ${totalModules}` : 'Preparación';
    }
    if (progressPercent) progressPercent.textContent = Math.round(progress) + '%';
    if (currentSection) currentSection.textContent = moduleNames[currentModule] || '';
}

// ============================================
// PRE-SESIÓN
// ============================================

function startPresession() {
    showModule('presession');
    showPreStep(1);
}

function skipPresession() {
    localStorage.setItem('presessionCompleted', 'true');
    presessionCompleted = true;
    showModule('welcome');
}

function showPreStep(stepNumber) {
    document.querySelectorAll('.presession-step').forEach(step => step.classList.remove('active'));
    const targetStep = document.getElementById(`preStep${stepNumber}`);
    if (targetStep) targetStep.classList.add('active');
}

function nextPreStep(stepNumber) {
    showPreStep(stepNumber);
}

function completePractice(practiceNumber) {
    const feedbackArea = document.getElementById(`feedback${practiceNumber}`);
    const button = document.getElementById(`practiceBtn${practiceNumber}`);
    
    if (button) {
        button.classList.add('success');
        button.textContent = '¡LISTO! ✓';
        button.disabled = true;
    }
    if (feedbackArea) feedbackArea.classList.add('show');
}

function checkInput(inputNumber) {
    const input = document.getElementById(`practiceInput${inputNumber}`);
    const feedbackArea = document.getElementById(`feedback${inputNumber + 1}`);
    if (input && input.value.length > 0 && feedbackArea) {
        feedbackArea.classList.add('show');
    }
}

function completePresession() {
    localStorage.setItem('presessionCompleted', 'true');
    presessionCompleted = true;
    showModule('welcome');
    showNotification('¡Muy bien! Ya estás lista para el taller 🎉', 'success');
}

// ============================================
// GLOSARIO
// ============================================

function openGlossary() {
    document.getElementById('glossaryOverlay').classList.add('active');
    document.getElementById('glossaryPanel').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGlossary() {
    document.getElementById('glossaryOverlay').classList.remove('active');
    document.getElementById('glossaryPanel').classList.remove('active');
    document.body.style.overflow = '';
}

function renderGlossary(filter = '') {
    const content = document.getElementById('glossaryContent');
    if (!content) return;
    
    const filtered = glossaryTerms.filter(t => 
        t.term.toLowerCase().includes(filter.toLowerCase()) ||
        t.definition.toLowerCase().includes(filter.toLowerCase())
    );
    
    if (filtered.length === 0) {
        content.innerHTML = '<p class="glossary-empty">No se encontraron palabras</p>';
        return;
    }
    
    content.innerHTML = filtered.map(t => `
        <div class="glossary-item">
            <h4>${t.term}</h4>
            <p>${t.definition}</p>
        </div>
    `).join('');
}

function filterGlossary(value) {
    renderGlossary(value);
}

// ============================================
// EXPERIENCIA PREVIA
// ============================================

function selectExperience(element, value) {
    document.querySelectorAll('.experience-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    localStorage.setItem('aiExperience', value);
    
    const messages = {
        'nunca': '¡Perfecto! Este taller está hecho para ti. Vamos paso a paso.',
        'poco': 'Muy bien, hoy vas a pasar de la teoría a la práctica.',
        'algo': 'Genial, vas a aprender trucos para mejorar tus resultados.',
        'mucho': '¡Excelente! Descubrirás nuevas formas de usar la IA.'
    };
    
    showNotification(messages[value], 'success');
}

// ============================================
// QUIZ DE MITOS
// ============================================

function checkMyth(questionNumber, answer) {
    const feedbackDiv = document.getElementById(`mythFeedback${questionNumber}`);
    const questionDiv = document.getElementById(`mythQ${questionNumber}`);
    const buttons = questionDiv.querySelectorAll('.quiz-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });
    
    const isCorrect = answer === mythAnswers[questionNumber];
    
    if (isCorrect) {
        feedbackDiv.innerHTML = `
            <div class="feedback-correct">
                <span class="feedback-icon">✅</span>
                <p>¡Correcto!</p>
            </div>
        `;
        feedbackDiv.classList.add('show', 'correct');
    } else {
        const explanations = {
            1: 'La IA no piensa de verdad. Solo imita patrones que aprendió.',
            2: 'Sí puede ayudarte a escribir, es una de sus mejores funciones.',
            3: 'La IA puede equivocarse. Siempre debes revisar lo que te da.'
        };
        
        feedbackDiv.innerHTML = `
            <div class="feedback-incorrect">
                <span class="feedback-icon">❌</span>
                <p>${explanations[questionNumber]}</p>
            </div>
        `;
        feedbackDiv.classList.add('show', 'incorrect');
    }
}

// ============================================
// CONSTRUCTOR DE PROMPTS (TEXTO)
// ============================================

function selectNeed(element, need) {
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedNeed = need;
}

function selectTone(element, tone) {
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedTone = tone;
}

function generateUserPrompt() {
    const business = document.getElementById('userBusiness').value.trim();
    
    if (!business) {
        showNotification('Por favor escribe qué vendes o haces', 'error');
        return;
    }
    if (!selectedNeed) {
        showNotification('Por favor elige qué necesitas', 'error');
        return;
    }
    if (!selectedTone) {
        showNotification('Por favor elige un tono', 'error');
        return;
    }
    
    const needTexts = {
        'social': '3 ideas de publicaciones para mis redes sociales',
        'mensaje': 'un mensaje para enviar a mis clientes',
        'nombre': '5 nombres creativos para un nuevo producto'
    };
    
    const toneTexts = {
        'amigable': 'amigable y cercano, como si le hablara a una amiga',
        'profesional': 'profesional y confiable',
        'divertido': 'divertido y alegre'
    };
    
    const prompt = `Tengo un negocio de ${business}.

Necesito ${needTexts[selectedNeed]}.

Usa un tono ${toneTexts[selectedTone]}.`;
    
    const resultDiv = document.getElementById('generatedPrompt');
    const textDiv = document.getElementById('generatedText');
    
    textDiv.textContent = prompt;
    resultDiv.classList.add('show');
    localStorage.setItem('lastGeneratedPrompt', prompt);
    showNotification('¡Tu mensaje está listo! 🎉', 'success');
}

function copyGeneratedPrompt() {
    const prompt = localStorage.getItem('lastGeneratedPrompt');
    if (prompt) {
        copyToClipboard(prompt);
        showNotification('¡Copiado! Ahora pégalo en ChatGPT', 'success');
    }
}

// ============================================
// CONSTRUCTOR DE PROMPTS (IMAGEN)
// ============================================

function selectBackground(element, background) {
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedBackground = background;
}

function selectColors(element, colors) {
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedColors = colors;
}

function generateImagePrompt() {
    const product = document.getElementById('imageProduct').value.trim();
    
    if (!product) {
        showNotification('Por favor escribe qué producto quieres mostrar', 'error');
        return;
    }
    if (!selectedBackground) {
        showNotification('Por favor elige dónde está el producto', 'error');
        return;
    }
    if (!selectedColors) {
        showNotification('Por favor elige los colores', 'error');
        return;
    }
    
    const backgroundTexts = {
        'mesa': 'sobre una mesa de madera',
        'blanco': 'con fondo blanco limpio',
        'naturaleza': 'rodeado de plantas verdes'
    };
    
    const colorTexts = {
        'pastel': 'colores suaves y pastel',
        'brillantes': 'colores brillantes y alegres',
        'naturales': 'colores naturales y tierra'
    };
    
    const prompt = `Foto de ${product} ${backgroundTexts[selectedBackground]}, ${colorTexts[selectedColors]}, luz natural suave, foto profesional, alta calidad`;
    
    const resultDiv = document.getElementById('generatedImagePrompt');
    const textDiv = document.getElementById('generatedImageText');
    
    textDiv.textContent = prompt;
    resultDiv.classList.add('show');
    localStorage.setItem('lastGeneratedImagePrompt', prompt);
    showNotification('¡Tu descripción está lista! 🎨', 'success');
}

function copyImagePrompt() {
    const prompt = localStorage.getItem('lastGeneratedImagePrompt');
    if (prompt) {
        copyToClipboard(prompt);
        showNotification('¡Copiado! Ahora pégalo en Canva', 'success');
    }
}

// ============================================
// COPIAR TEXTO
// ============================================

function copyText(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const text = element.textContent || element.innerText;
        copyToClipboard(text);
        showNotification('¡Copiado! 📋', 'success');
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopyToClipboard(text));
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Error al copiar:', err);
    }
    
    document.body.removeChild(textArea);
}

// ============================================
// CERTIFICADO (Canvas)
// ============================================

function downloadCertificate() {
    const nameInput = document.getElementById('certificateName');
    const name = nameInput?.value?.trim();
    
    if (!name) {
        showNotification('Por favor escribe tu nombre', 'error');
        return;
    }
    
    showNotification('Generando tu certificado... ⏳', 'info');
    
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size (landscape, good for sharing)
    canvas.width = 1200;
    canvas.height = 850;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#fffcf9');
    gradient.addColorStop(1, '#f0f9fa');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#2c8e9c';
    ctx.lineWidth = 12;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = '#ff6978';
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Trophy emoji
    ctx.font = '80px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🏆', canvas.width / 2, 130);
    
    // Title: CERTIFICADO
    ctx.font = 'bold 48px Georgia';
    ctx.fillStyle = '#2c8e9c';
    ctx.fillText('CERTIFICADO', canvas.width / 2, 200);
    
    // Brand: MujerTech
    ctx.font = 'bold 36px Georgia';
    ctx.fillStyle = '#232443';
    ctx.fillText('MujerTech', canvas.width / 2, 250);
    
    // Tagline
    ctx.font = '18px Arial';
    ctx.fillStyle = '#6B7280';
    ctx.fillText('Women Business & AI', canvas.width / 2, 280);
    
    // Decorative line
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 310);
    ctx.lineTo(canvas.width - 200, 310);
    ctx.stroke();
    
    // "Se certifica que"
    ctx.font = '20px Arial';
    ctx.fillStyle = '#6B7280';
    ctx.fillText('Se certifica que', canvas.width / 2, 360);
    
    // User name
    ctx.font = 'bold 42px Georgia';
    ctx.fillStyle = '#232443';
    ctx.fillText(name.toUpperCase(), canvas.width / 2, 420);
    
    // "ha completado..."
    ctx.font = '20px Arial';
    ctx.fillStyle = '#6B7280';
    ctx.fillText('ha completado exitosamente el', canvas.width / 2, 470);
    
    // Course name
    ctx.font = 'bold 28px Georgia';
    ctx.fillStyle = '#ff6978';
    ctx.fillText('TALLER INTRODUCTORIO DE IA', canvas.width / 2, 520);
    ctx.fillText('PARA EMPRENDEDORAS', canvas.width / 2, 555);
    
    // Decorative line
    ctx.strokeStyle = '#E5E7EB';
    ctx.beginPath();
    ctx.moveTo(200, 590);
    ctx.lineTo(canvas.width - 200, 590);
    ctx.stroke();
    
    // Skills box background
    ctx.fillStyle = 'rgba(44, 142, 156, 0.1)';
    ctx.fillRect(150, 610, canvas.width - 300, 80);
    
    // Skills
    ctx.font = '16px Arial';
    ctx.fillStyle = '#232443';
    const skills = '✓ Fundamentos de IA   ✓ Creación de prompts   ✓ Herramientas de IA   ✓ Generación de imágenes   ✓ Uso ético';
    ctx.fillText(skills, canvas.width / 2, 655);
    
    // Date
    const date = new Date().toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    ctx.font = '18px Arial';
    ctx.fillStyle = '#232443';
    ctx.fillText(`Fecha: ${date}`, canvas.width / 2, 730);
    
    // Duration
    ctx.font = '16px Arial';
    ctx.fillStyle = '#6B7280';
    ctx.fillText('Duración: 2 horas', canvas.width / 2, 755);
    
    // Website
    ctx.font = '18px Arial';
    ctx.fillStyle = '#2c8e9c';
    ctx.fillText('www.mujertech.org', canvas.width / 2, 800);
    
    // Download the image
    const link = document.createElement('a');
    link.download = `Certificado_MujerTech_${name.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showNotification('¡Certificado descargado! 🎉', 'success');
}

// ============================================
// NOTIFICACIONES
// ============================================

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// CARGAR PROGRESO
// ============================================

function loadProgress() {
    const savedModule = localStorage.getItem('currentModule');
    
    if (presessionCompleted && savedModule && modules.includes(savedModule)) {
        if (savedModule !== 'presessionCheck' && savedModule !== 'presession') {
            showModule(savedModule);
        }
    }
}

// ============================================
// EVENTOS DE TECLADO
// ============================================

function handleKeyPress(e) {
    if (window.innerWidth <= 768) return;
    
    const currentIndex = modules.indexOf(currentModule);
    
    switch(e.key) {
        case 'ArrowRight':
            if (currentIndex < modules.length - 1) showModule(modules[currentIndex + 1]);
            break;
        case 'ArrowLeft':
            if (currentIndex > 0) showModule(modules[currentIndex - 1]);
            break;
        case 'Escape':
            closeGlossary();
            break;
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

window.addEventListener('load', () => {
    init();
    loadProgress();
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentModule', currentModule);
});

document.addEventListener('keydown', handleKeyPress);

document.addEventListener('click', (e) => {
    const overlay = document.getElementById('glossaryOverlay');
    if (e.target === overlay) closeGlossary();
});