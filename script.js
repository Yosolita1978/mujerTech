const weeklyContent = [
    {
        number: 1,
        title: "Encontrando tu 'Por Qué'",
        objectives: [
            "Identificar motivaciones y valores personales",
            "Conectar la misión personal con la visión del negocio",
            "Entender cómo el propósito influye en la marca y la toma de decisiones"
        ],
        activities: [
            "Ejercicio de vision board (digital o físico)",
            "Discusión grupal sobre 'Por qué quiero iniciar este negocio'",
            "Mapear habilidades personales con objetivos de negocio"
        ],
        homework: "Escribir una página con la declaración 'Mi Por Qué' conectando la historia personal con el negocio",
        tools: "Canva (vision boards), Google Docs (escritura de declaración)",
        tip: "Fomenta la conexión emocional: las mujeres se comprometen con su por qué antes que con su qué."
    },
    {
        number: 2,
        title: "Fundamentos del Modelo de Negocio",
        objectives: [
            "Comprender los componentes de un modelo de negocio",
            "Aprender sobre segmentos de clientes, canales y fuentes de ingreso",
            "Conectar producto/servicio con una necesidad real del cliente"
        ],
        activities: [
            "Introducir el Business Model Canvas",
            "Completar un primer borrador del canvas en grupos",
            "Identificar al menos 2 segmentos de clientes"
        ],
        homework: "Entrevistar a 3 clientes potenciales para validar necesidades",
        tools: "Business Model Canvas de Strategyzer, Google Forms (entrevistas)",
        tip: "Incentiva a ir más allá de las suposiciones: los datos reales superan las conjeturas."
    },
    {
        number: 3,
        title: "Descubrimiento de Clientes",
        objectives: [
            "Diseñar entrevistas efectivas a clientes",
            "Validar que el problema realmente existe",
            "Comenzar a recopilar retroalimentación real"
        ],
        activities: [
            "Crear 5 preguntas de entrevista",
            "Simular entrevistas entre participantes",
            "Practicar toma de notas y síntesis"
        ],
        homework: "Realizar 5 entrevistas reales y resumir hallazgos",
        tools: "Google Sheets (seguimiento de entrevistas), Otter.ai (transcripción)",
        tip: "Recuerda: 'Aquí no estás vendiendo, estás escuchando'."
    },
    {
        number: 4,
        title: "Fundamentos de Finanzas",
        objectives: [
            "Comprender ingresos, gastos y utilidad",
            "Conocer principios de flujo de caja para pequeños negocios",
            "Crear un presupuesto simple"
        ],
        activities: [
            "Configurar una hoja de cálculo simple",
            "Añadir proyecciones de ventas y costos para 3 meses",
            "Analizar el punto de equilibrio"
        ],
        homework: "Registrar gastos e ingresos reales durante 1 semana",
        tools: "Google Sheets, Plantillas de Excel",
        tip: "Incluso las vendedoras pequeñas deben saber si realmente están ganando dinero."
    },
    {
        number: 5,
        title: "Definiendo tu Ventaja Competitiva",
        objectives: [
            "Identificar lo que hace único al negocio",
            "Aprender sobre posicionamiento en el mercado",
            "Conectar ventaja con tendencias actuales ('¿Por qué ahora?')"
        ],
        activities: [
            "Análisis FODA del negocio",
            "Investigar 2 competidores y comparar ofertas"
        ],
        homework: "Redactar una declaración de posicionamiento en 3 frases",
        tools: "Miro (FODA), Google Search (investigación de competidores)",
        tip: "Muchas mujeres subestiman su singularidad: resalta fortalezas personales."
    },
    {
        number: 6,
        title: "Marketing Digital y Redes Sociales",
        objectives: [
            "Entender los fundamentos del marketing online",
            "Diferenciar entre marketing orgánico y pagado",
            "Crear un plan básico de contenido"
        ],
        activities: [
            "Configurar o mejorar un perfil en redes",
            "Planificar 1 semana de publicaciones",
            "Probar una herramienta gratuita de diseño"
        ],
        homework: "Publicar al menos 3 veces y medir interacción",
        tools: "Canva, Meta Business Suite",
        tip: "Fomenta contar historias auténticas en lugar de buscar perfección visual."
    },
    {
        number: 7,
        title: "Storytelling para Ventas",
        objectives: [
            "Crear una historia de marca",
            "Comprender gatillos emocionales en marketing",
            "Adaptar historia a distintos formatos"
        ],
        activities: [
            "Redactar un pitch de historia de marca de 1 minuto",
            "Practicar en parejas y refinar con retroalimentación"
        ],
        homework: "Compartir historia de marca en redes y registrar respuestas",
        tools: "Google Docs, Loom (grabación de video)",
        tip: "Mantén historias cortas: enfócate en la transformación, no solo en el producto."
    },
    {
        number: 8,
        title: "Propuesta de Valor y Pitch",
        objectives: [
            "Definir propuesta de valor clara",
            "Aprender elementos de un pitch persuasivo",
            "Adaptar mensaje para distintas audiencias"
        ],
        activities: [
            "Refinar propuesta de valor con feedback de clientes",
            "Practicar pitches de 3 minutos en grupos"
        ],
        homework: "Presentar pitch a alguien externo y obtener retroalimentación",
        tools: "Pitch.com, Google Slides",
        tip: "Graba los pitches para revisión y mejora."
    },
    {
        number: 9,
        title: "Sprint de Producto Mínimo Viable (MVP)",
        objectives: [
            "Comprender concepto de MVP",
            "Conocer métodos de prototipado rápido",
            "Obtener retroalimentación temprana"
        ],
        activities: [
            "Crear un prototipo básico (físico, digital o de servicio)",
            "Probarlo con al menos 2 personas y registrar opiniones"
        ],
        homework: "Documentar cambios hechos a partir de la retroalimentación",
        tools: "Canva (prototipos digitales), Google Forms (recopilación de feedback)",
        tip: "Un MVP busca aprender, no ser perfecto."
    },
    {
        number: 10,
        title: "IA para Procesos de Negocio",
        objectives: [
            "Identificar tareas repetitivas para automatizar",
            "Conocer herramientas básicas de IA para pymes",
            "Aplicar IA en marketing o gestión de clientes"
        ],
        activities: [
            "Demostrar contenido generado por IA",
            "Mostrar IA para segmentación de clientes"
        ],
        homework: "Usar IA para crear 1 contenido de marketing y 1 mensaje de seguimiento",
        tools: "ChatGPT, Google Sheets con complementos de IA",
        tip: "Muestra ahorro de tiempo 'antes y después' para mayor impacto."
    },
    {
        number: 11,
        title: "Métricas Iniciales y KPIs",
        objectives: [
            "Entender la importancia de la tracción inicial",
            "Seleccionar 3 KPIs clave",
            "Aprender a revisar resultados"
        ],
        activities: [
            "Configurar dashboard básico de ventas y engagement",
            "Definir cómo se verá el 'éxito' en 3 meses"
        ],
        homework: "Actualizar dashboard semanalmente y analizar tendencias",
        tools: "Google Sheets, Data Studio",
        tip: "Mantén KPIs simples para no abrumar."
    },
    {
        number: 12,
        title: "Legal y Cumplimiento",
        objectives: [
            "Conocer estructuras legales básicas en LatAm",
            "Entender importancia de contratos y permisos",
            "Aprender sobre impuestos para pymes"
        ],
        activities: [
            "Mapear pasos legales en su país",
            "Revisar un contrato de ventas básico"
        ],
        homework: "Investigar permisos requeridos para su negocio",
        tools: "Sitios web gubernamentales, DocuSign",
        tip: "Usa ejemplos locales para mayor relevancia."
    },
    {
        number: 13,
        title: "Oportunidades de Financiamiento",
        objectives: [
            "Explorar opciones de financiamiento para mujeres",
            "Diferenciar entre subvenciones, préstamos y crowdfunding",
            "Conocer preparación básica para inversionistas"
        ],
        activities: [
            "Relacionar tipo de financiamiento con etapa del negocio",
            "Investigar 1 fuente potencial de financiamiento"
        ],
        homework: "Redactar una solicitud de financiamiento de 1 página",
        tools: "Kickstarter, Kiva",
        tip: "Ajustar expectativas de financiamiento a la etapa real del negocio."
    },
    {
        number: 14,
        title: "Herramientas Avanzadas de IA y Automatización",
        objectives: [
            "Descubrir herramientas avanzadas de IA",
            "Integrar varias herramientas para eficiencia",
            "Automatizar un proceso"
        ],
        activities: [
            "Configurar automatización (ej. recordatorios a clientes)",
            "Explorar analítica impulsada por IA"
        ],
        homework: "Documentar un flujo automatizado y su impacto",
        tools: "Zapier, Notion AI",
        tip: "La automatización libera tiempo para relaciones con clientes."
    },
    {
        number: 15,
        title: "Estrategias de Escalamiento",
        objectives: [
            "Identificar cuándo un negocio está listo para escalar",
            "Conocer estrategias para adquirir clientes",
            "Explorar alianzas y colaboraciones"
        ],
        activities: [
            "Crear checklist de preparación para escalar",
            "Investigar 2 socios o colaboradores potenciales"
        ],
        homework: "Contactar a 1 socio potencial",
        tools: "LinkedIn, Google Sheets",
        tip: "Escalar demasiado pronto puede dañar el negocio."
    },
    {
        number: 16,
        title: "Plan de Acción y Graduación",
        objectives: [
            "Desarrollar plan de crecimiento a 6 meses",
            "Presentar avances y próximos pasos",
            "Celebrar logros"
        ],
        activities: [
            "Presentaciones finales",
            "Sesión de retroalimentación entre pares",
            "Ceremonia de graduación"
        ],
        homework: "Comprometerse con 3 acciones específicas post-programa",
        tools: "Google Docs (plan de acción), Canva (presentaciones)",
        tip: "Convierte la graduación en un evento para construir comunidad."
    }
];

function generateWeekContent() {
    const container = document.getElementById('weeksContainer');
    const nav = document.getElementById('weekNav');
    
    weeklyContent.forEach((week, index) => {
        // Create week card
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card fade-in';
        weekCard.style.animationDelay = `${index * 0.1}s`;
        weekCard.id = `week-${week.number}`;
        
        weekCard.innerHTML = `
            <div class="week-header" onclick="toggleWeek(${week.number})">
                <span class="week-number">Semana ${week.number}</span>
                <span class="week-title">${week.title}</span>
                <span class="expand-icon" id="icon-${week.number}">+</span>
            </div>
            <div class="week-content" id="content-${week.number}">
                <div class="week-details">
                    <div class="objectives">
                        <div class="section-title">🎯 Objetivos de Aprendizaje</div>
                        <div class="section-content">
                            <ul>
                                ${week.objectives.map(obj => `<li>${obj}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="activities">
                        <div class="section-title">⚡ Actividades Clave</div>
                        <div class="section-content">
                            <ul>
                                ${week.activities.map(act => `<li>${act}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="homework">
                        <div class="section-title">📝 Tarea</div>
                        <div class="section-content">${week.homework}</div>
                    </div>
                    
                    <div class="tools">
                        <div class="section-title">🛠️ Herramientas</div>
                        <div class="section-content">${week.tools}</div>
                    </div>
                    
                    <div class="tip">
                        <div class="section-title">💡 Tip para Facilitadora</div>
                        <div class="section-content">${week.tip}</div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(weekCard);
        
        // Create navigation item (only for desktop)
        if (window.innerWidth > 768) {
            const navItem = document.createElement('div');
            navItem.className = 'week-nav-item';
            navItem.textContent = week.number;
            navItem.onclick = () => scrollToWeek(week.number);
            nav.appendChild(navItem);
        }
    });
}

function toggleWeek(weekNumber) {
    const content = document.getElementById(`content-${weekNumber}`);
    const icon = document.getElementById(`icon-${weekNumber}`);
    
    // Close other open weeks on mobile for better performance
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.week-content.expanded').forEach(otherContent => {
            if (otherContent.id !== `content-${weekNumber}`) {
                otherContent.classList.remove('expanded');
                const otherIcon = document.getElementById(otherContent.id.replace('content-', 'icon-'));
                if (otherIcon) {
                    otherIcon.textContent = '+';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('expanded');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
        
        // Smooth scroll to week header on mobile
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                document.getElementById(`week-${weekNumber}`).scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
}

function scrollToWeek(weekNumber) {
    const weekElement = document.getElementById(`week-${weekNumber}`);
    weekElement.scrollIntoView({ behavior: 'smooth' });
    
    // Update active nav item
    document.querySelectorAll('.week-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}

function updateProgressBar() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}

function showInterestForm() {
    // Better mobile experience for the interest form
    if (window.innerWidth <= 768) {
        const message = '¡Gracias por tu interés en MujerTech! 🚀\n\n' +
                       'Te redirigiremos al formulario de inscripción.\n\n' +
                       'En la versión real, esto abriría:\n' +
                       '• WhatsApp Business para consultas rápidas\n' +
                       '• Formulario de contacto optimizado\n' +
                       '• Calendario para agendar llamada';
        alert(message);
    } else {
        alert('¡Gracias por tu interés! Te redirigiremos al formulario de inscripción.\n\nEn la versión real, esto abriría un formulario de contacto o te llevaría a la página de inscripciones.');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateWeekContent();
    window.addEventListener('scroll', updateProgressBar);
    
    // Mobile-specific optimizations
    if (window.innerWidth <= 768) {
        // Improve touch responsiveness
        document.addEventListener('touchstart', function() {}, { passive: true });
        
        // Optimize scroll performance on mobile
        let ticking = false;
        function updateScrollProgress() {
            updateProgressBar();
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        }, { passive: true });
    } else {
        window.addEventListener('scroll', updateProgressBar);
    }
    
    // Optimize animations based on device performance
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
    }
});