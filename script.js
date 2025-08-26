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

const pricingPlans = [
    {
        id: 'mujeres',
        name: 'Mujeres con Futuro',
        target: 'Fundadoras, empresarias consolidadas y mujeres jefas de hogar',
        badge: '¡Más Popular! 💜',
        badgeClass: 'badge-mujeres',
        priceCOP: {
            monthly: '8,000',
            originalMonthly: '20,000',
            annual: '80,000',
            originalAnnual: '240,000'
        },
        priceUSD: {
            monthly: '2',
            originalMonthly: '5',
            annual: '20',
            originalAnnual: '60'
        },
        savings: 'Hasta 60% descuento + beneficios exclusivos',
        features: [
            'Acceso completo al programa de 16 semanas',
            'Becas y descuentos preferenciales',
            'Mentoría dirigida por mujeres líderes',
            'Kit de digitalización incluido'
        ],
        bonuses: [
            '👩‍💼 Red exclusiva de mujeres emprendedoras',
            '🏠 Flexibilidad para madres trabajadoras',
            '🌟 Programa de mentoras exitosas'
        ],
        cta: '¡Únete a Mujeres con Futuro!',
        ctaClass: 'cta-mujeres',
        popular: true
    },
    {
        id: 'estudiantes',
        name: 'Plan Económico',
        target: 'Estudiantes universitarios y personas al inicio de su carrera',
        badge: 'Más Accesible',
        badgeClass: 'badge-accessible',
        priceCOP: {
            monthly: '20,000',
            originalMonthly: '35,000',
            annual: '200,000',
            originalAnnual: '420,000'
        },
        priceUSD: {
            monthly: '5',
            originalMonthly: '9',
            annual: '50',
            originalAnnual: '105'
        },
        savings: 'Nivel freemium disponible',
        features: [
            'Nivel freemium con contenido básico',
            'Micro-cursos de pago por clase',
            'Descuentos especiales para estudiantes',
            'Certificado digital al finalizar'
        ],
        bonuses: [
            '🎓 Descuentos estudiantiles adicionales',
            '📚 Biblioteca digital de recursos',
            '👥 Comunidad de estudiantes'
        ],
        cta: 'Comenzar como Estudiante',
        ctaClass: 'cta-estudiantes',
        popular: false
    },
    {
        id: 'profesionales',
        name: 'Plan Intermedio',
        target: 'Profesionales en actividad y aprendices continuos',
        badge: 'Profesional',
        badgeClass: 'badge-profesional',
        priceCOP: {
            monthly: '50,000',
            originalMonthly: '80,000',
            annual: '500,000',
            originalAnnual: '960,000'
        },
        priceUSD: {
            monthly: '12',
            originalMonthly: '20',
            annual: '125',
            originalAnnual: '240'
        },
        savings: 'Planes anuales con mayor ahorro',
        features: [
            'Todo lo del Plan Económico',
            'Planes anuales con descuentos',
            'Paquetes de especialización incluidos',
            'Certificado profesional verificado'
        ],
        bonuses: [
            '👨‍👩‍👧‍👦 Descuentos dúo/familia',
            '📈 Paquetes de especialización',
            '🏆 Certificación profesional'
        ],
        cta: 'Nivel Profesional',
        ctaClass: 'cta-profesionales',
        popular: false
    },
    {
        id: 'premium',
        name: 'Plan Premium',
        target: 'Adultos que buscan certificaciones y empresas',
        badge: 'Certificación',
        badgeClass: 'badge-premium',
        priceCOP: {
            monthly: '100,000',
            originalMonthly: '150,000',
            annual: '1,000,000',
            originalAnnual: '1,800,000'
        },
        priceUSD: {
            monthly: '25',
            originalMonthly: '38',
            annual: '250',
            originalAnnual: '450'
        },
        savings: 'Financiación "estudia ahora, paga después"',
        features: [
            'Todo lo del Plan Intermedio',
            'Programas intensivos con certificaciones',
            'Mentoría y servicios de carrera',
            'Certificación oficial reconocida'
        ],
        bonuses: [
            '🏢 Paquetes corporativos',
            '💼 Colocación laboral',
            '📜 Certificación oficial'
        ],
        cta: 'Certificación Premium',
        ctaClass: 'cta-premium',
        popular: false
    }
];

let currentCurrency = 'cop';

function generateWeekContent() {
    const container = document.getElementById('weeksContainer');
    const nav = document.getElementById('weekNav');
    
    weeklyContent.forEach((week, index) => {
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
        
        if (window.innerWidth > 768) {
            const navItem = document.createElement('div');
            navItem.className = 'week-nav-item';
            navItem.textContent = week.number;
            navItem.onclick = () => scrollToWeek(week.number);
            nav.appendChild(navItem);
        }
    });
}

function generatePricingContent() {
    const container = document.getElementById('pricingContainer');
    
    pricingPlans.forEach((plan, index) => {
        const planCard = document.createElement('div');
        planCard.className = `pricing-card fade-in ${plan.popular ? 'popular' : ''}`;
        planCard.style.animationDelay = `${index * 0.2}s`;
        planCard.id = `plan-${plan.id}`;
        
        const currency = currentCurrency === 'cop' ? plan.priceCOP : plan.priceUSD;
        const currencySymbol = currentCurrency === 'cop' ? '$' : '$';
        const currencyCode = currentCurrency === 'cop' ? 'COP' : 'USD';
        
        planCard.innerHTML = `
            <div class="plan-header" onclick="togglePlan('${plan.id}')">
                <div class="plan-badge ${plan.badgeClass}">${plan.badge}</div>
                <div class="plan-name">${plan.name}</div>
                <div class="plan-target">${plan.target}</div>
                <div class="plan-pricing">
                    <div class="price-main">
                        <span class="price-currency">${currencySymbol}</span>
                        <span class="price-amount" id="price-${plan.id}">${currency.monthly}</span>
                        <span class="price-period">/${currencyCode}/mes</span>
                    </div>
                    <div class="price-original">
                        Antes: ${currencySymbol}${currency.originalMonthly} ${currencyCode}/mes
                    </div>
                    <div class="price-annual" id="annual-${plan.id}">
                        Plan anual: ${currencySymbol}${currency.annual} ${currencyCode} (${plan.savings})
                    </div>
                </div>
                <span class="expand-icon" id="icon-plan-${plan.id}">Ver Detalles</span>
            </div>
            <div class="plan-content" id="content-plan-${plan.id}">
                <div class="plan-details">
                    <div class="plan-features">
                        <div class="section-title">✅ Qué Incluye</div>
                        <div class="section-content">
                            <ul>
                                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="plan-bonuses">
                        <div class="section-title">🎁 Bonos Especiales</div>
                        <div class="section-content">
                            <ul>
                                ${plan.bonuses.map(bonus => `<li>${bonus}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="plan-cta">
                        <button class="cta-button ${plan.ctaClass}" onclick="selectPlan('${plan.id}')">
                            ${plan.cta}
                        </button>
                        <p class="guarantee">✅ Garantía de reembolso 7 días</p>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(planCard);
    });
}

function toggleWeek(weekNumber) {
    const content = document.getElementById(`content-${weekNumber}`);
    const icon = document.getElementById(`icon-${weekNumber}`);
    
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

function togglePlan(planId) {
    const content = document.getElementById(`content-plan-${planId}`);
    const icon = document.getElementById(`icon-plan-${planId}`);
    
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.plan-content.expanded').forEach(otherContent => {
            if (otherContent.id !== `content-plan-${planId}`) {
                otherContent.classList.remove('expanded');
                const otherIcon = document.getElementById(otherContent.id.replace('content-plan-', 'icon-plan-'));
                if (otherIcon) {
                    otherIcon.textContent = 'Ver Detalles';
                }
            }
        });
    }
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.textContent = 'Ver Detalles';
    } else {
        content.classList.add('expanded');
        icon.textContent = 'Ocultar Detalles';
        
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                document.getElementById(`plan-${planId}`).scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
}

function switchCurrency(currency) {
    if (currentCurrency === currency) return;
    
    currentCurrency = currency;
    
    document.getElementById('copBtn').classList.toggle('active', currency === 'cop');
    document.getElementById('usdBtn').classList.toggle('active', currency === 'usd');
    
    pricingPlans.forEach(plan => {
        const priceData = currency === 'cop' ? plan.priceCOP : plan.priceUSD;
        const symbol = '$';
        const code = currency === 'cop' ? 'COP' : 'USD';
        
        const priceElement = document.getElementById(`price-${plan.id}`);
        const annualElement = document.getElementById(`annual-${plan.id}`);
        const periodElements = document.querySelectorAll(`#plan-${plan.id} .price-period`);
        const originalElements = document.querySelectorAll(`#plan-${plan.id} .price-original`);
        
        if (priceElement) {
            priceElement.textContent = priceData.monthly;
        }
        
        if (annualElement) {
            annualElement.innerHTML = `Plan anual: ${symbol}${priceData.annual} ${code} (${plan.savings})`;
        }
        
        periodElements.forEach(el => {
            el.textContent = `/${code}/mes`;
        });
        
        originalElements.forEach(el => {
            el.textContent = `Antes: ${symbol}${priceData.originalMonthly} ${code}/mes`;
        });
    });
}

function selectPlan(planId) {
    const plan = pricingPlans.find(p => p.id === planId);
    const currency = currentCurrency === 'cop' ? 'COP' : 'USD';
    const price = currentCurrency === 'cop' ? plan.priceCOP.monthly : plan.priceUSD.monthly;
    
    const message = `¡Hola! Me interesa el ${plan.name} 🚀\n\n` +
                   `💰 Precio: $${price} ${currency}/mes\n` +
                   `📚 Programa: 16 semanas de transformación empresarial\n\n` +
                   `¿Podrían darme más información sobre:\n` +
                   `• Próximas fechas de inicio\n` +
                   `• Proceso de inscripción\n` +
                   `• Opciones de pago disponibles?\n\n` +
                   `¡Estoy lista para transformar mi negocio con MujerTech! 💪`;
    
    if (window.innerWidth <= 768) {
        const whatsappUrl = `https://wa.me/573000000000?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert(`¡Genial elección! ${plan.name} seleccionado.\n\nEn la versión real, esto:\n• Abriría WhatsApp con mensaje pre-escrito\n• Redirigiría al formulario de inscripción\n• Iniciaría el proceso de pago\n\nPrecio: $${price} ${currency}/mes`);
    }
}

function scrollToWeek(weekNumber) {
    const weekElement = document.getElementById(`week-${weekNumber}`);
    weekElement.scrollIntoView({ behavior: 'smooth' });
    
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
    if (window.innerWidth <= 768) {
        const message = '¡Gracias por tu interés en MujerTech! 🚀\n\n' +
                       'Te redirigiremos al formulario de inscripción.\n\n' +
                       'En la versión real, esto abriría:\n' +
                       '• WhatsApp Business para consultas rápidas\n' +
                       '• Formulario de contacto optimizado\n' +
                       '• Calendario para agendar llamada';
        alert(message);
    } else {
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateWeekContent();
    generatePricingContent();
    
    window.addEventListener('scroll', updateProgressBar);
    
    if (window.innerWidth <= 768) {
        document.addEventListener('touchstart', function() {}, { passive: true });
        
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
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
    }
});