// Global variables
let currentModule = 'welcome';
let quizScore = 0;
let currentQuestion = 0;
let startTime = Date.now();
let timerInterval;

// Quiz questions
const quizQuestions = [
    {
        question: "¿Cuál de las siguientes opciones NO describe correctamente la IA generativa?",
        options: [
            "a) Aprende patrones de datos para crear contenido nuevo",
            "b) Reemplaza totalmente el criterio humano",
            "c) Puede generar textos, imágenes o audio",
            "d) Requiere supervisión de la usuaria"
        ],
        correct: "b"
    },
    {
        question: "En un buen prompt, la instrucción 'contexto' se refiere a:",
        options: [
            "a) El tono deseado de la respuesta",
            "b) Quién eres y qué rol asume la IA",
            "c) El formato de salida",
            "d) La longitud del texto"
        ],
        correct: "b"
    },
    {
        question: "Para crear imágenes de producto profesionales con IA debes:",
        options: [
            "a) Usar prompts vagos como 'una crema bonita'",
            "b) Especificar tipo de imagen, producto, estilo y calidad",
            "c) Nunca mencionar colores o iluminación",
            "d) Aceptar la primera imagen sin iterar"
        ],
        correct: "b"
    },
    {
        question: "¿Qué criterio NO es apropiado al usar IA éticamente?",
        options: [
            "a) Revisar todas las respuestas antes de publicar",
            "b) Ser transparente sobre el uso de IA",
            "c) Compartir datos personales de clientes en prompts",
            "d) Respetar derechos de autor"
        ],
        correct: "c"
    },
    {
        question: "Según el flujo de trabajo, ¿en qué etapa sintetizarías entrevistas?",
        options: [
            "a) Ideación",
            "b) Investigación del cliente",
            "c) Síntesis de entrevistas",
            "d) Análisis competitivo"
        ],
        correct: "c"
    },
    {
        question: "Si la IA genera contenido con tono inapropiado, debes:",
        options: [
            "a) Aceptarlo tal cual",
            "b) Ajustar el prompt y revisar",
            "c) Dejar de usar IA",
            "d) Ignorar el tono"
        ],
        correct: "b"
    }
];

// Initialize function
function init() {
    startTimer();
    updateProgress();
    showModule('welcome');
    setupMobileOptimizations();
    
    document.addEventListener('keydown', handleKeyPress);
}

// Setup mobile optimizations
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
    
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Timer function
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

// Module navigation
function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
        targetModule.classList.add('active');
    }
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const navItems = document.querySelectorAll('.nav-item');
    const moduleIndex = ['welcome', 'module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'evaluation'].indexOf(moduleId);
    if (navItems[moduleIndex]) {
        navItems[moduleIndex].classList.add('active');
    }
    
    currentModule = moduleId;
    updateProgress();
    
    if (moduleId === 'module1') {
        setTimeout(() => createMythsActivity(), 100);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    localStorage.setItem('currentModule', moduleId);
    
    const nav = document.getElementById('nav');
    if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
    }
}

// Progress bar update
function updateProgress() {
    const modules = ['welcome', 'module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'evaluation'];
    const currentIndex = modules.indexOf(currentModule);
    const progress = ((currentIndex + 1) / modules.length) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('open');
    
    if (nav.classList.contains('open')) {
        document.addEventListener('click', closeMobileMenuOnClickOutside);
        document.body.style.overflow = 'hidden';
    } else {
        document.removeEventListener('click', closeMobileMenuOnClickOutside);
        document.body.style.overflow = '';
    }
}

function closeMobileMenuOnClickOutside(e) {
    const nav = document.getElementById('nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        document.body.style.overflow = '';
        document.removeEventListener('click', closeMobileMenuOnClickOutside);
    }
}

// Pre-quiz selection
function selectPreQuiz(element, value) {
    document.querySelectorAll('#welcome .quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    localStorage.setItem('aiExperience', value);
    
    let feedback = '';
    switch(value) {
        case 'nunca':
            feedback = '¡Perfecto! Este taller está diseñado especialmente para principiantes.';
            break;
        case 'conocimiento':
            feedback = 'Excelente, hoy pasaremos de la teoría a la práctica.';
            break;
        case 'ocasional':
            feedback = 'Genial, aprenderás técnicas avanzadas para mejorar tus resultados.';
            break;
        case 'frecuente':
            feedback = '¡Fantástico! Descubrirás nuevas formas de optimizar tu uso de IA.';
            break;
    }
    
    showNotification(feedback, 'success');
}

// Create myths vs reality activity
function createMythsActivity() {
    const container = document.getElementById('mythsActivity');
    if (!container) return;
    
    const myths = [
        { text: "La IA puede pensar por sí misma", type: "myth" },
        { text: "La IA aprende de patrones de datos", type: "reality" },
        { text: "La IA reemplaza completamente el criterio humano", type: "myth" },
        { text: "La IA puede generar textos y imágenes", type: "reality" },
        { text: "La IA siempre da respuestas 100% precisas", type: "myth" },
        { text: "La IA requiere supervisión humana", type: "reality" }
    ];
    
    myths.sort(() => Math.random() - 0.5);
    
    container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
            <div>
                <h4 style="color: var(--secondary); margin-bottom: 1rem;">❌ Mitos</h4>
                <div id="mythBox" class="drop-zone" style="min-height: 150px; background: #FFE8EB; padding: 1rem; border-radius: 0.5rem; border-color: var(--secondary);">
                    <p style="color: #999; text-align: center; font-size: 0.9rem;">Arrastra aquí</p>
                </div>
            </div>
            <div>
                <h4 style="color: var(--primary); margin-bottom: 1rem;">✅ Realidad</h4>
                <div id="realityBox" class="drop-zone" style="min-height: 150px; background: #E6F4F6; padding: 1rem; border-radius: 0.5rem; border-color: var(--primary);">
                    <p style="color: #999; text-align: center; font-size: 0.9rem;">Arrastra aquí</p>
                </div>
            </div>
        </div>
        <div style="margin-top: 1.5rem;">
            <h4 style="margin-bottom: 1rem;">Afirmaciones:</h4>
            <div id="statementsContainer" class="drop-zone" style="display: flex; flex-wrap: wrap; gap: 0.8rem;">
                ${myths.map((item, index) => `
                    <div class="draggable-item" 
                         draggable="true" 
                         data-type="${item.type}"
                         data-index="${index}"
                         style="background: white; cursor: move; transition: all 0.3s;">
                        ${item.text}
                    </div>
                `).join('')}
            </div>
        </div>
        <button class="btn btn-primary" onclick="checkMythsActivity()" style="margin-top: 1.5rem; width: 100%;">Verificar Respuestas</button>
        <div id="mythsFeedback" style="margin-top: 1rem;"></div>
    `;
    
    setupDragAndDrop();
}

// Setup drag and drop functionality
function setupDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    let draggedElement = null;
    
    const isTouchDevice = 'ontouchstart' in window;
    
    if (isTouchDevice) {
        setupTouchDragDrop(draggables, dropZones);
    } else {
        setupMouseDragDrop(draggables, dropZones);
    }
}

// Touch drag and drop for mobile
function setupTouchDragDrop(draggables, dropZones) {
    let activeElement = null;
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;
    
    draggables.forEach(draggable => {
        draggable.addEventListener('touchstart', (e) => {
            activeElement = e.target.closest('.draggable-item');
            const touch = e.touches[0];
            
            initialX = touch.clientX - activeElement.offsetLeft;
            initialY = touch.clientY - activeElement.offsetTop;
            
            activeElement.style.opacity = '0.7';
            activeElement.style.zIndex = '1000';
            activeElement.style.position = 'fixed';
        }, { passive: true });
        
        draggable.addEventListener('touchmove', (e) => {
            if (!activeElement) return;
            
            e.preventDefault();
            const touch = e.touches[0];
            
            currentX = touch.clientX - initialX;
            currentY = touch.clientY - initialY;
            
            activeElement.style.left = currentX + 'px';
            activeElement.style.top = currentY + 'px';
        }, { passive: false });
        
        draggable.addEventListener('touchend', (e) => {
            if (!activeElement) return;
            
            const touch = e.changedTouches[0];
            const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const dropZone = elementBelow?.closest('.drop-zone');
            
            activeElement.style.opacity = '1';
            activeElement.style.zIndex = '';
            activeElement.style.position = '';
            activeElement.style.left = '';
            activeElement.style.top = '';
            
            if (dropZone && dropZone.id !== 'statementsContainer') {
                const placeholder = dropZone.querySelector('p');
                if (placeholder && placeholder.style.color === 'rgb(153, 153, 153)') {
                    placeholder.remove();
                }
                dropZone.appendChild(activeElement);
            }
            
            activeElement = null;
        }, { passive: true });
    });
}

// Mouse drag and drop for desktop
function setupMouseDragDrop(draggables, dropZones) {
    let draggedElement = null;
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggedElement = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.target.style.opacity = '0.5';
        });
        
        draggable.addEventListener('dragend', (e) => {
            e.target.style.opacity = '1';
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            if (zone.id === 'mythBox') {
                zone.style.background = '#FFCCCC';
            } else if (zone.id === 'realityBox') {
                zone.style.background = '#CCE5E8';
            }
        });
        
        zone.addEventListener('dragleave', (e) => {
            if (zone.id === 'mythBox') {
                zone.style.background = '#FFE8EB';
            } else if (zone.id === 'realityBox') {
                zone.style.background = '#E6F4F6';
            }
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            
            if (zone.id === 'mythBox') {
                zone.style.background = '#FFE8EB';
            } else if (zone.id === 'realityBox') {
                zone.style.background = '#E6F4F6';
            }
            
            if (draggedElement) {
                const placeholder = zone.querySelector('p');
                if (placeholder && placeholder.style.color === 'rgb(153, 153, 153)') {
                    placeholder.remove();
                }
                
                zone.appendChild(draggedElement);
                draggedElement = null;
                
                setupDragAndDrop();
            }
        });
    });
}

// Check myths activity answers
function checkMythsActivity() {
    const mythBox = document.getElementById('mythBox');
    const realityBox = document.getElementById('realityBox');
    const feedback = document.getElementById('mythsFeedback');
    
    let correct = 0;
    let total = 0;
    
    mythBox.querySelectorAll('.draggable-item').forEach(item => {
        total++;
        if (item.dataset.type === 'myth') {
            correct++;
            item.style.border = '2px solid #10B981';
            item.style.background = '#D1FAE5';
        } else {
            item.style.border = '2px solid #EF4444';
            item.style.background = '#FEE2E2';
        }
    });
    
    realityBox.querySelectorAll('.draggable-item').forEach(item => {
        total++;
        if (item.dataset.type === 'reality') {
            correct++;
            item.style.border = '2px solid #10B981';
            item.style.background = '#D1FAE5';
        } else {
            item.style.border = '2px solid #EF4444';
            item.style.background = '#FEE2E2';
        }
    });
    
    if (total === 0) {
        feedback.innerHTML = '<p style="color: var(--secondary);">Por favor, arrastra las afirmaciones a las categorías correspondientes.</p>';
    } else if (correct === 6 && total === 6) {
        feedback.innerHTML = '<p style="color: #10B981; font-weight: bold; font-size: 1.1rem;">¡Excelente! Has clasificado todas las afirmaciones correctamente. 🎉</p>';
        showNotification('¡Perfecto! Entiendes bien la diferencia entre mitos y realidad de la IA.', 'success');
    } else {
        feedback.innerHTML = `<p style="color: var(--secondary);">Has acertado ${correct} de ${total}. Las respuestas incorrectas están marcadas en rojo. ¡Intenta de nuevo!</p>`;
    }
}

// Prompt builder
function generatePrompt() {
    const context = document.getElementById('promptContext').value.trim();
    const task = document.getElementById('promptTask').value.trim();
    const format = document.getElementById('promptFormat').value.trim();
    const tone = document.getElementById('promptTone').value.trim();
    
    if (!context || !task) {
        showNotification('Por favor completa al menos el contexto y la tarea', 'error');
        return;
    }
    
    let prompt = `${context}\n\n${task}`;
    if (format) prompt += `\n\nFormato: ${format}`;
    if (tone) prompt += `\n\nTono: ${tone}`;
    
    const outputDiv = document.getElementById('promptOutput');
    outputDiv.innerHTML = `
        <strong>Tu prompt generado:</strong><br><br>
        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; font-family: monospace; white-space: pre-wrap; word-break: break-word;">
            ${prompt.replace(/\n/g, '<br>')}
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="copyPrompt()" style="flex: 1; min-width: 150px;">📋 Copiar</button>
            <button class="btn btn-primary" onclick="testPrompt()" style="flex: 1; min-width: 150px;">🚀 Probar</button>
        </div>
    `;
    
    localStorage.setItem('lastPrompt', prompt);
}

// Image prompt generator
function generateImagePrompt() {
    const product = document.getElementById('imageProduct').value.trim();
    const style = document.getElementById('imageStyle').value;
    const elements = document.getElementById('imageElements').value.trim();
    const colors = document.getElementById('imageColors').value.trim();
    
    if (!product) {
        showNotification('Por favor ingresa el nombre de tu producto', 'error');
        return;
    }
    
    if (!style) {
        showNotification('Por favor selecciona un estilo', 'error');
        return;
    }
    
    let prompt = `Product photography of ${product}, ${style}`;
    
    if (elements) {
        prompt += `, ${elements}`;
    }
    
    if (colors) {
        prompt += `, ${colors}`;
    }
    
    prompt += ', high quality, professional photography, 8k, detailed';
    
    const outputDiv = document.getElementById('imagePromptOutput');
    outputDiv.innerHTML = `
        <strong>🎨 Tu prompt para generar imagen:</strong><br><br>
        <div style="background: #F9FAFB; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; font-family: monospace; white-space: pre-wrap; word-break: break-word; border-left: 4px solid var(--primary);">
            ${prompt}
        </div>
        <div style="background: #E6F4F6; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem;">
            <strong>💡 Próximos pasos:</strong><br>
            1. Copia este prompt<br>
            2. Abre Canva Magic Media, Leonardo.ai, o ChatGPT<br>
            3. Pega el prompt y genera tu imagen<br>
            4. Itera ajustando colores, elementos o estilo si es necesario
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
            <button class="btn btn-secondary" onclick="copyImagePrompt()" style="flex: 1; min-width: 150px;">📋 Copiar Prompt</button>
        </div>
    `;
    
    localStorage.setItem('lastImagePrompt', prompt);
}

// Copy image prompt to clipboard
function copyImagePrompt() {
    const promptText = localStorage.getItem('lastImagePrompt');
    if (promptText) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(promptText).then(() => {
                showNotification('¡Prompt de imagen copiado! Ahora pégalo en tu herramienta de IA favorita.', 'success');
            }).catch(() => {
                fallbackCopyToClipboard(promptText);
            });
        } else {
            fallbackCopyToClipboard(promptText);
        }
    }
}

// Copy prompt to clipboard
function copyPrompt() {
    const promptText = localStorage.getItem('lastPrompt');
    if (promptText) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(promptText).then(() => {
                showNotification('¡Prompt copiado al portapapeles!', 'success');
            }).catch(() => {
                fallbackCopyToClipboard(promptText);
            });
        } else {
            fallbackCopyToClipboard(promptText);
        }
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showNotification('¡Prompt copiado!', 'success');
    } catch (err) {
        showNotification('No se pudo copiar. Por favor copia manualmente.', 'error');
    }
    document.body.removeChild(textArea);
}

// Test prompt with simulated AI
function testPrompt() {
    const responses = [
        "¡Aquí tienes un ejemplo de respuesta generada por IA basada en tu prompt! La IA ha entendido tu contexto y está generando contenido relevante.",
        "Basándome en tus instrucciones, he creado este contenido que sigue el formato y tono especificados. ¿Necesitas ajustar algo?",
        "Esta es una simulación de cómo respondería una IA real a tu prompt. Observa cómo sigue las pautas que estableciste."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const outputDiv = document.getElementById('promptOutput');
    const currentContent = outputDiv.innerHTML;
    outputDiv.innerHTML = currentContent + `
        <div style="margin-top: 1.5rem; padding: 1rem; background: #DBEAFE; border-radius: 0.5rem; border-left: 4px solid #3B82F6;">
            <strong>🤖 Respuesta de IA simulada:</strong><br><br>
            ${randomResponse}
        </div>
    `;
}

// Customer questions generator
function generateCustomerQuestions() {
    const idea = document.getElementById('businessIdea').value.trim();
    if (!idea) {
        showNotification('Por favor ingresa tu idea de negocio', 'error');
        return;
    }
    
    const baseQuestions = [
        `¿Cuál es el precio de los productos/servicios de ${idea}?`,
        `¿Hacen envíos a toda Latinoamérica?`,
        `¿Qué métodos de pago aceptan?`,
        `¿Tienen garantía de satisfacción?`,
        `¿Cómo es el proceso de devolución?`,
        `¿Ofrecen descuentos por volumen?`,
        `¿Tienen certificaciones o permisos necesarios?`,
        `¿Cuánto tiempo llevan en el mercado?`,
        `¿Cómo puedo contactarlos para soporte?`,
        `¿Tienen testimonios de clientes anteriores?`
    ];
    
    const specificQuestions = generateIndustryQuestions(idea);
    
    const questionsHtml = `
        <h4 style="color: var(--primary); margin-bottom: 1rem;">
            Preguntas frecuentes para: <strong>${idea}</strong>
        </h4>
        <div style="display: grid; gap: 1rem;">
            <div>
                <h5 style="color: var(--secondary); margin-bottom: 0.5rem;">📌 Preguntas Generales</h5>
                <ul style="padding-left: 1.5rem; line-height: 1.8;">
                    ${baseQuestions.slice(0, 5).map(q => `<li>${q}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h5 style="color: var(--secondary); margin-bottom: 0.5rem;">🎯 Preguntas Específicas</h5>
                <ul style="padding-left: 1.5rem; line-height: 1.8;">
                    ${specificQuestions.map(q => `<li>${q}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div style="margin-top: 1.5rem; padding: 1rem; background: #FEF9C3; border-radius: 0.5rem;">
            <strong>💡 Reflexión:</strong> Estas son preguntas genéricas generadas por IA. 
            Para tu negocio específico, necesitarás validar con clientes reales y adaptar según tu mercado local.
            <br><br>
            <strong>Próximo paso:</strong> Selecciona las 5 preguntas más relevantes y úsalas para crear tu FAQ inicial.
        </div>
    `;
    
    document.getElementById('customerQuestions').innerHTML = questionsHtml;
    document.getElementById('customerQuestions').style.display = 'block';
    
    localStorage.setItem('businessIdea', idea);
}

// Generate industry-specific questions
function generateIndustryQuestions(idea) {
    const lowerIdea = idea.toLowerCase();
    let questions = [];
    
    if (lowerIdea.includes('cosmética') || lowerIdea.includes('belleza')) {
        questions = [
            '¿Los productos son cruelty-free?',
            '¿Qué ingredientes naturales utilizan?',
            '¿Son aptos para pieles sensibles?',
            '¿Tienen fecha de vencimiento?',
            '¿Ofrecen muestras gratis?'
        ];
    } else if (lowerIdea.includes('comida') || lowerIdea.includes('alimento')) {
        questions = [
            '¿Manejan opciones vegetarianas/veganas?',
            '¿Cuál es el tiempo de entrega?',
            '¿Cómo mantienen la cadena de frío?',
            '¿Tienen información nutricional?',
            '¿Manejan pedidos especiales?'
        ];
    } else if (lowerIdea.includes('ropa') || lowerIdea.includes('moda')) {
        questions = [
            '¿Tienen guía de tallas?',
            '¿Qué materiales utilizan?',
            '¿Hacen envíos internacionales?',
            '¿Tienen lookbook o catálogo?',
            '¿Ofrecen personalización?'
        ];
    } else if (lowerIdea.includes('tecnología') || lowerIdea.includes('software')) {
        questions = [
            '¿Ofrecen prueba gratuita?',
            '¿Qué soporte técnico incluye?',
            '¿Es compatible con otros sistemas?',
            '¿Tienen actualizaciones frecuentes?',
            '¿Ofrecen capacitación?'
        ];
    } else {
        questions = [
            '¿Cuál es su propuesta de valor única?',
            '¿Qué los diferencia de la competencia?',
            '¿Tienen programa de fidelidad?',
            '¿Ofrecen consultas gratuitas?',
            '¿Tienen presencia en redes sociales?'
        ];
    }
    
    return questions;
}

// Checklist toggle
function toggleCheck(element) {
    element.classList.toggle('checked');
    
    const checklist = element.closest('.checklist');
    const totalItems = checklist.querySelectorAll('.checklist-icon').length;
    const checkedItems = checklist.querySelectorAll('.checklist-icon.checked').length;
    
    if (checkedItems === totalItems) {
        showNotification('¡Excelente! Has completado toda la checklist 🎉', 'success');
    }
    
    saveChecklistProgress();
}

// Save checklist progress
function saveChecklistProgress() {
    const checklists = document.querySelectorAll('.checklist');
    const progress = {};
    
    checklists.forEach((checklist, index) => {
        const items = checklist.querySelectorAll('.checklist-icon');
        progress[`checklist_${index}`] = [];
        items.forEach((item, itemIndex) => {
            progress[`checklist_${index}`][itemIndex] = item.classList.contains('checked');
        });
    });
    
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
}

// Load checklist progress
function loadChecklistProgress() {
    const saved = localStorage.getItem('checklistProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        const checklists = document.querySelectorAll('.checklist');
        
        checklists.forEach((checklist, index) => {
            const items = checklist.querySelectorAll('.checklist-icon');
            const savedItems = progress[`checklist_${index}`];
            if (savedItems) {
                items.forEach((item, itemIndex) => {
                    if (savedItems[itemIndex]) {
                        item.classList.add('checked');
                    }
                });
            }
        });
    }
}

// Quiz functions
function checkAnswer(element, answer) {
    const question = quizQuestions[currentQuestion];
    
    document.querySelectorAll('#quizOptions .quiz-option').forEach(opt => {
        opt.onclick = null;
        opt.style.cursor = 'default';
    });
    
    if (answer === question.correct) {
        element.classList.add('correct');
        quizScore++;
        showNotification('¡Correcto! 🎉', 'success');
    } else {
        element.classList.add('incorrect');
        showNotification('Incorrecto. La respuesta correcta está marcada en verde.', 'error');
        
        document.querySelectorAll('#quizOptions .quiz-option').forEach(opt => {
            if (opt.textContent.trim().startsWith(question.correct + ')')) {
                opt.classList.add('correct');
            }
        });
    }
    
    document.getElementById('nextQuizBtn').style.display = 'block';
}

// Next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuestion];
    document.querySelector('.quiz-question').textContent = `Pregunta ${currentQuestion + 1} de ${quizQuestions.length}`;
    document.getElementById('quizQuestion').textContent = question.question;
    
    const optionsHtml = question.options.map((opt) => {
        const letter = opt.charAt(0);
        return `
            <div class="quiz-option" onclick="checkAnswer(this, '${letter}')">
                ${opt}
            </div>
        `;
    }).join('');
    
    document.getElementById('quizOptions').innerHTML = optionsHtml;
    document.getElementById('nextQuizBtn').style.display = 'none';
}

// Show quiz results
function showQuizResults() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    document.getElementById('finalScore').textContent = `${quizScore}/${quizQuestions.length}`;
    document.getElementById('evalNav').style.display = 'none';
    
    const percentage = (quizScore / quizQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 80) {
        message = '¡Excelente trabajo! Dominas los conceptos de IA.';
    } else if (percentage >= 60) {
        message = 'Buen trabajo. Considera repasar algunos módulos.';
    } else {
        message = 'Necesitas reforzar los conceptos. Revisa los módulos nuevamente.';
    }
    
    showNotification(message, percentage >= 60 ? 'success' : 'warning');
    
    localStorage.setItem('quizScore', quizScore);
    localStorage.setItem('quizCompleted', 'true');
}

// Download resources
function downloadResource(type) {
    const resources = {
        prompts: {
            name: 'prompt_library.csv',
            content: 'Nombre,Objetivo,Estructura\n"Mensaje de bienvenida","Generar mensaje para negocio","Contexto + Tarea + Tono"\n"Nombres de producto","Crear nombres creativos","Contexto + Tarea + Formato"\n"FAQ Cliente","Preguntas frecuentes","Contexto + Sector + País"'
        },
        tools: {
            name: 'tool_evaluation.csv',
            content: 'Herramienta,Costo,Ventajas,Desventajas,Accesibilidad\nChatGPT Free,$0,"Fácil de usar","Límite mensajes","Alta"\nChatGPT Plus,$20/mes,"Sin límites","Costo mensual","Alta"\nClaude,$0-20/mes,"Análisis largos","Menos conocido","Media"'
        },
        ethics: {
            name: 'ethics_checklist.pdf',
            content: 'Checklist de Ética y Privacidad\n\n1. Privacidad: No compartir datos personales\n2. Transparencia: Informar uso de IA\n3. Revisión: Verificar respuestas\n4. Sesgos: Evaluar y ajustar\n5. Derechos de autor: Respetar propiedad intelectual\n6. Expectativas: Ser clara sobre capacidades'
        },
        workflow: {
            name: 'workflow_templates.pdf',
            content: 'Plantillas de Flujos de Trabajo\n\n1. Ideación → Investigación → Síntesis → Análisis\n2. Entrada → Procesamiento IA → Validación → Salida\n3. Problema → Solución IA → Implementación → Medición'
        },
        images: {
            name: 'image_prompts_guide.pdf',
            content: 'Guía de Prompts para Imágenes de Producto\n\nEstructura:\n[Tipo] + [Producto] + [Estilo] + [Elementos] + [Iluminación] + [Colores] + [Calidad]\n\nEjemplos:\n1. Product photography of handmade soap, minimalist, white background, flowers, soft light, pastel colors, 8k\n2. Lifestyle image of coffee mug, natural setting, wooden table, morning light, warm tones, professional\n3. Flat lay of skincare products, top view, marble surface, gold accents, bright natural light, high quality'
        }
    };
    
    const resource = resources[type];
    if (resource) {
        const blob = new Blob([resource.content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = resource.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification(`Descargando: ${resource.name}`, 'success');
    }
}

// Download certificate
function downloadCertificate() {
    const name = prompt('Ingresa tu nombre completo para el certificado:');
    if (name) {
        const date = new Date().toLocaleDateString('es-ES');
        const certificateText = `
CERTIFICADO DE FINALIZACIÓN

MujerTech - Women Business & AI

Se certifica que

${name.toUpperCase()}

ha completado exitosamente el
Taller Introductorio de Women Business & AI
Programa MujerTech

Fecha: ${date}
Puntuación: ${quizScore}/${quizQuestions.length}

¡Felicitaciones por dar el primer paso hacia la transformación digital de tu negocio!

www.mujertech.org
        `;
        
        const blob = new Blob([certificateText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Certificado_MujerTech_${name.replace(/\s/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification('¡Certificado MujerTech generado exitosamente!', 'success');
    }
}

// Show feedback form
function showFeedback() {
    const feedback = prompt('¿Cómo fue tu experiencia? ¿Qué podemos mejorar?');
    if (feedback) {
        localStorage.setItem('userFeedback', feedback);
        showNotification('¡Gracias por tu feedback! Lo usaremos para mejorar el taller.', 'success');
    }
}

// Show example
function showExample(type) {
    const examples = {
        marketing: {
            title: 'Marketing Digital con IA',
            content: 'Usa IA para crear posts virales, campañas de email personalizadas, y copy que convierte. Ahorra hasta 5 horas semanales en creación de contenido.'
        },
        research: {
            title: 'Investigación de Mercado',
            content: 'Analiza tendencias, identifica nichos rentables, y descubre qué buscan tus clientes. La IA procesa miles de datos en segundos.'
        },
        customer: {
            title: 'Servicio al Cliente Automatizado',
            content: 'Crea respuestas instantáneas a preguntas frecuentes, chatbots inteligentes, y mejora la satisfacción del cliente 24/7.'
        },
        product: {
            title: 'Desarrollo de Producto con IA',
            content: 'Genera nombres memorables, descripciones que venden, y propuestas de valor únicas. Valida ideas antes de invertir.'
        }
    };
    
    const example = examples[type];
    if (example) {
        showNotification(`${example.title}\n\n${example.content}`, 'info');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 2000;
        animation: slideDown 0.3s ease;
        max-width: calc(100% - 2rem);
        text-align: center;
        white-space: pre-line;
    `;
    
    switch(type) {
        case 'success':
            notification.style.background = '#10B981';
            notification.style.color = 'white';
            break;
        case 'error':
            notification.style.background = '#EF4444';
            notification.style.color = 'white';
            break;
        case 'warning':
            notification.style.background = '#F59E0B';
            notification.style.color = 'white';
            break;
        default:
            notification.style.background = '#232443';
            notification.style.color = 'white';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Keyboard navigation
function handleKeyPress(e) {
    if (window.innerWidth <= 768) return;
    
    const modules = ['welcome', 'module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'evaluation'];
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
            const nav = document.getElementById('nav');
            if (nav && nav.classList.contains('open')) {
                nav.classList.remove('open');
                document.body.style.overflow = '';
            }
            break;
    }
}

// Load saved progress
function loadProgress() {
    const savedModule = localStorage.getItem('currentModule');
    if (savedModule) {
        showModule(savedModule);
    }
    
    loadChecklistProgress();
    
    const savedBusinessIdea = localStorage.getItem('businessIdea');
    if (savedBusinessIdea) {
        const businessIdeaInput = document.getElementById('businessIdea');
        if (businessIdeaInput) {
            businessIdeaInput.value = savedBusinessIdea;
        }
    }
}

// Add CSS animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
window.addEventListener('load', () => {
    init();
    loadProgress();
});

// Save progress before leaving
window.addEventListener('beforeunload', () => {
    saveChecklistProgress();
});

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);