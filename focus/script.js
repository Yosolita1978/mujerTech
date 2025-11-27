// ============================================
// MUJERTECH - TALLER INTRODUCTORIO DE IA
// Script Principal - Versión Rediseñada
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentModule = 'presessionCheck';
let startTime = Date.now();
let timerInterval;
let presessionCompleted = localStorage.getItem('presessionCompleted') === 'true';

// Selecciones del usuario para el constructor de prompts
let selectedNeed = null;
let selectedTone = null;
let selectedBackground = null;
let selectedColors = null;

// Módulos en orden
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

// Nombres de los módulos para mostrar
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

// Respuestas correctas del quiz de mitos
const mythAnswers = {
    1: 'mentira',  // "La IA puede pensar por sí misma" - MENTIRA
    2: 'verdad',   // "La IA puede ayudarme a escribir" - VERDAD
    3: 'mentira'   // "Todo lo que dice la IA es 100% correcto" - MENTIRA
};

// Glosario de términos
const glossaryTerms = [
    { 
        term: 'App', 
        definition: 'Un programa que vive en tu celular. Ejemplo: WhatsApp es una app.' 
    },
    { 
        term: 'Botón', 
        definition: 'Un cuadro en la pantalla que hace algo cuando lo tocas.' 
    },
    { 
        term: 'ChatGPT', 
        definition: 'Una app de inteligencia artificial que te ayuda a escribir textos. Es gratis.' 
    },
    { 
        term: 'Canva', 
        definition: 'Una app para crear imágenes y diseños bonitos. Tiene versión gratis.' 
    },
    { 
        term: 'Copiar', 
        definition: 'Guardar un texto para usarlo en otro lugar. Tocas y mantienes, luego eliges "Copiar".' 
    },
    { 
        term: 'Descargar', 
        definition: 'Guardar algo de internet en tu celular.' 
    },
    { 
        term: 'IA', 
        definition: 'Inteligencia Artificial. Programas de computadora muy inteligentes que pueden crear textos, imágenes y más.' 
    },
    { 
        term: 'Imagen generada', 
        definition: 'Una imagen creada por la IA, no es una foto real tomada con cámara.' 
    },
    { 
        term: 'Internet', 
        definition: 'La red que conecta computadoras y celulares en todo el mundo. Necesitas internet para usar ChatGPT y Canva.' 
    },
    { 
        term: 'Pegar', 
        definition: 'Poner el texto que copiaste en un lugar nuevo. Tocas y mantienes donde quieres pegar.' 
    },
    { 
        term: 'Prompt', 
        definition: 'El mensaje que le escribes a la IA para pedirle algo. Como cuando le pides algo a alguien por WhatsApp.' 
    },
    { 
        term: 'Redes sociales', 
        definition: 'Apps donde compartes fotos y mensajes con otras personas. Ejemplo: WhatsApp, Instagram, Facebook.' 
    },
    { 
        term: 'Tono', 
        definition: 'La forma en que "suena" un texto. Puede ser amigable, profesional, divertido, etc.' 
    }
];

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
    startTimer();
    
    // Si ya completó la pre-sesión, saltar directamente al welcome
    if (presessionCompleted) {
        showModule('welcome');
    } else {
        showModule('presessionCheck');
    }
    
    // Inicializar glosario
    renderGlossary();
    
    // Configurar optimizaciones móviles
    setupMobileOptimizations();
}

function setupMobileOptimizations() {
    // Prevenir zoom en doble tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    // Ajustar altura para móviles
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
    // Ocultar todos los módulos
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    
    // Mostrar el módulo seleccionado
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
        targetModule.classList.add('active');
    }
    
    currentModule = moduleId;
    updateProgress();
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Guardar progreso
    localStorage.setItem('currentModule', moduleId);
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const progressPercent = document.getElementById('progressPercent');
    const currentSection = document.getElementById('currentSection');
    
    // Calcular índice (excluyendo presessionCheck y presession del conteo visual)
    const displayModules = modules.filter(m => m !== 'presessionCheck' && m !== 'presession');
    let currentIndex = displayModules.indexOf(currentModule);
    
    // Si está en presession o presessionCheck, mostrar como bloque 0
    if (currentModule === 'presessionCheck' || currentModule === 'presession') {
        currentIndex = -1;
    }
    
    const totalModules = displayModules.length;
    const progress = currentIndex >= 0 ? ((currentIndex + 1) / totalModules) * 100 : 0;
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    if (progressText) {
        if (currentIndex >= 0) {
            progressText.textContent = `Bloque ${currentIndex + 1} de ${totalModules}`;
        } else {
            progressText.textContent = 'Preparación';
        }
    }
    
    if (progressPercent) {
        progressPercent.textContent = Math.round(progress) + '%';
    }
    
    if (currentSection) {
        currentSection.textContent = moduleNames[currentModule] || '';
    }
}

// ============================================
// PRE-SESIÓN
// ============================================

function startPresession() {
    showModule('presession');
    // Mostrar el primer paso
    showPreStep(1);
}

function skipPresession() {
    localStorage.setItem('presessionCompleted', 'true');
    presessionCompleted = true;
    showModule('welcome');
}

function showPreStep(stepNumber) {
    // Ocultar todos los pasos
    document.querySelectorAll('.presession-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Mostrar el paso seleccionado
    const targetStep = document.getElementById(`preStep${stepNumber}`);
    if (targetStep) {
        targetStep.classList.add('active');
    }
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
    
    if (feedbackArea) {
        feedbackArea.classList.add('show');
    }
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
// EXPERIENCIA PREVIA (WELCOME)
// ============================================

function selectExperience(element, value) {
    // Quitar selección anterior
    document.querySelectorAll('.experience-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Marcar selección actual
    element.classList.add('selected');
    
    // Guardar
    localStorage.setItem('aiExperience', value);
    
    // Feedback según la selección
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
    
    // Deshabilitar botones
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });
    
    const isCorrect = answer === mythAnswers[questionNumber];
    
    // Mostrar feedback
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
    // Quitar selección anterior
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Marcar selección
    element.classList.add('selected');
    selectedNeed = need;
}

function selectTone(element, tone) {
    // Quitar selección anterior
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Marcar selección
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
    
    // Mapeo de necesidades
    const needTexts = {
        'social': '3 ideas de publicaciones para mis redes sociales',
        'mensaje': 'un mensaje para enviar a mis clientes',
        'nombre': '5 nombres creativos para un nuevo producto'
    };
    
    // Mapeo de tonos
    const toneTexts = {
        'amigable': 'amigable y cercano, como si le hablara a una amiga',
        'profesional': 'profesional y confiable',
        'divertido': 'divertido y alegre'
    };
    
    // Generar prompt
    const prompt = `Tengo un negocio de ${business}.

Necesito ${needTexts[selectedNeed]}.

Usa un tono ${toneTexts[selectedTone]}.`;
    
    // Mostrar resultado
    const resultDiv = document.getElementById('generatedPrompt');
    const textDiv = document.getElementById('generatedText');
    
    textDiv.textContent = prompt;
    resultDiv.classList.add('show');
    
    // Guardar para copiar
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
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedBackground = background;
}

function selectColors(element, colors) {
    element.parentElement.querySelectorAll('.builder-option').forEach(btn => {
        btn.classList.remove('selected');
    });
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
    
    // Mapeo de fondos
    const backgroundTexts = {
        'mesa': 'sobre una mesa de madera',
        'blanco': 'con fondo blanco limpio',
        'naturaleza': 'rodeado de plantas verdes'
    };
    
    // Mapeo de colores
    const colorTexts = {
        'pastel': 'colores suaves y pastel',
        'brillantes': 'colores brillantes y alegres',
        'naturales': 'colores naturales y tierra'
    };
    
    // Generar prompt de imagen
    const prompt = `Foto de ${product} ${backgroundTexts[selectedBackground]}, ${colorTexts[selectedColors]}, luz natural suave, foto profesional, alta calidad`;
    
    // Mostrar resultado
    const resultDiv = document.getElementById('generatedImagePrompt');
    const textDiv = document.getElementById('generatedImageText');
    
    textDiv.textContent = prompt;
    resultDiv.classList.add('show');
    
    // Guardar para copiar
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
        navigator.clipboard.writeText(text).catch(() => {
            fallbackCopyToClipboard(text);
        });
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
// CERTIFICADO
// ============================================

function downloadCertificate() {
    const nameInput = document.getElementById('certificateName');
    const name = nameInput?.value?.trim();
    
    if (!name) {
        showNotification('Por favor escribe tu nombre', 'error');
        return;
    }
    
    showNotification('Generando tu certificado... ⏳', 'info');
    
    const date = new Date().toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    // Crear HTML del certificado
    const certificateHTML = `
        <div style="
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            padding: 50px 40px;
            text-align: center;
            font-family: Georgia, 'Times New Roman', serif;
            background: linear-gradient(135deg, #fffcf9 0%, #f0f9fa 100%);
            border: 4px solid #2c8e9c;
            border-radius: 15px;
            box-sizing: border-box;
        ">
            <div style="margin-bottom: 20px;">
                <span style="font-size: 50px;">🏆</span>
            </div>
            
            <h1 style="
                color: #2c8e9c;
                font-size: 32px;
                margin: 0 0 10px 0;
                letter-spacing: 3px;
            ">CERTIFICADO</h1>
            
            <h2 style="
                color: #232443;
                font-size: 24px;
                margin: 0 0 5px 0;
            ">MujerTech</h2>
            
            <p style="
                color: #6B7280;
                font-size: 14px;
                margin: 0 0 30px 0;
            ">Women Business & AI</p>
            
            <div style="
                border-top: 2px solid #E5E7EB;
                border-bottom: 2px solid #E5E7EB;
                padding: 25px 0;
                margin: 20px 0;
            ">
                <p style="
                    color: #6B7280;
                    font-size: 14px;
                    margin: 0 0 15px 0;
                ">Se certifica que</p>
                
                <h2 style="
                    color: #232443;
                    font-size: 28px;
                    margin: 0 0 15px 0;
                    text-transform: uppercase;
                ">${name}</h2>
                
                <p style="
                    color: #6B7280;
                    font-size: 14px;
                    margin: 0 0 10px 0;
                ">ha completado exitosamente el</p>
                
                <h3 style="
                    color: #ff6978;
                    font-size: 20px;
                    margin: 0;
                ">TALLER INTRODUCTORIO DE IA<br>PARA EMPRENDEDORAS</h3>
            </div>
            
            <div style="
                background: rgba(44, 142, 156, 0.1);
                padding: 15px;
                border-radius: 10px;
                margin: 20px 0;
            ">
                <p style="
                    color: #232443;
                    font-size: 13px;
                    margin: 0;
                    line-height: 1.8;
                ">
                    ✓ Fundamentos de IA &nbsp;&nbsp;
                    ✓ Creación de prompts &nbsp;&nbsp;
                    ✓ Herramientas de IA<br>
                    ✓ Generación de imágenes &nbsp;&nbsp;
                    ✓ Uso ético y responsable
                </p>
            </div>
            
            <p style="
                color: #232443;
                font-size: 14px;
                margin: 25px 0 5px 0;
            ">Fecha: <strong>${date}</strong></p>
            
            <p style="
                color: #6B7280;
                font-size: 12px;
                margin: 0 0 20px 0;
            ">Duración: 2 horas</p>
            
            <p style="
                color: #2c8e9c;
                font-size: 14px;
                margin: 20px 0 0 0;
            ">www.mujertech.org</p>
        </div>
    `;
    
    // Crear elemento temporal
    const element = document.createElement('div');
    element.innerHTML = certificateHTML;
    element.style.position = 'fixed';
    element.style.left = '0';
    element.style.top = '0';
    element.style.width = '800px';
    element.style.padding = '20px';
    element.style.background = 'white';
    element.style.zIndex = '99999';
    document.body.appendChild(element);
    
    // Generar PDF
    const opt = {
        margin: 10,
        filename: `Certificado_MujerTech_${name.replace(/\s/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'landscape' 
        }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
        element.remove();
        showNotification('¡Certificado descargado! 🎉', 'success');
    }).catch(err => {
        element.remove();
        console.error('Error generando PDF:', err);
        showNotification('Error al generar. Intenta de nuevo.', 'error');
    });
}

// ============================================
// NOTIFICACIONES
// ============================================

function showNotification(message, type = 'info') {
    // Remover notificación existente
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// CARGAR PROGRESO GUARDADO
// ============================================

function loadProgress() {
    // Verificar si hay un módulo guardado
    const savedModule = localStorage.getItem('currentModule');
    
    if (presessionCompleted && savedModule && modules.includes(savedModule)) {
        // Si ya completó la pre-sesión y hay progreso guardado
        if (savedModule !== 'presessionCheck' && savedModule !== 'presession') {
            showModule(savedModule);
        }
    }
}

// ============================================
// EVENTOS DE TECLADO (para desktop)
// ============================================

function handleKeyPress(e) {
    // Solo en desktop
    if (window.innerWidth <= 768) return;
    
    const currentIndex = modules.indexOf(currentModule);
    
    switch(e.key) {
        case 'ArrowRight':
            if (currentIndex < modules.length - 1) {
                showModule(modules[currentIndex + 1]);
            }
            break;
        case 'ArrowLeft':
            if (currentIndex > 0) {
                showModule(modules[currentIndex - 1]);
            }
            break;
        case 'Escape':
            closeGlossary();
            break;
    }
}

// ============================================
// INICIALIZACIÓN AL CARGAR
// ============================================

window.addEventListener('load', () => {
    init();
    loadProgress();
});

// Guardar progreso al salir
window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentModule', currentModule);
});

// Teclado
document.addEventListener('keydown', handleKeyPress);

// Cerrar glosario con clic fuera
document.addEventListener('click', (e) => {
    const panel = document.getElementById('glossaryPanel');
    const overlay = document.getElementById('glossaryOverlay');
    
    if (e.target === overlay) {
        closeGlossary();
    }
});