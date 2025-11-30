// ===== CONFIGURACIÓN Y CONSTANTES =====
const CONFIG = {
    appName: 'Wiston Concesionaria',
    version: '1.0.0',
    admin: {
        username: 'admin',
        password: 'admin123'
    },
    storageKeys: {
        cars: 'wiston_cars',
        testimonials: 'wiston_testimonials',
        testDrives: 'wiston_test_drives',
        theme: 'wiston_theme',
        user: 'wiston_user',
        stats: 'wiston_stats'
    },
    defaultCars: [
        {
            id: 1,
            marca: 'Peugeot',
            modelo: '208',
            año: 2023,
            precio: 12500000,
            kilometraje: 0,
            combustible: 'Nafta',
            transmision: 'Automática',
            tipo: 'nuevo',
            estado: 'disponible',
            color: 'Blanco Glaciar',
            carroceria: 'Hatchback',
            fotos: [
                'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ],
            especificaciones: {
                motor: '1.6L PureTech',
                cilindrada: '1598 cc',
                potencia: '120 HP @ 6000 RPM',
                torque: '118 lb-pie @ 3000 RPM',
                cilindros: '4 en línea',
                valvulas: '16',
                consumo: '16.1 km/l',
                capacidad: '5 pasajeros',
                traccion: 'Delantera',
                equipamiento: ['Pantalla táctil 10"', 'Conexión Android Auto/Apple CarPlay', 'Sensores de estacionamiento', 'Control de crucero', 'Luces LED', 'Aire acondicionado digital', 'Asientos de tela premium']
            },
            descripcion: 'Peugeot 208 2023 en versión full, tecnología de punta y diseño europeo. Perfecto para la ciudad con un consumo eficiente.',
            descripcionDetallada: 'Vehículo en perfecto estado, sin golpes ni rayones. Mantenimiento al día con service oficial. Interior impecable, tapizado en perfectas condiciones. Único dueño, nunca chocado.',
            oferta: false,
            destacado: false,
            visitas: 0,
            fechaIngreso: '2024-01-15',
            ubicacion: 'Cruz del Eje, Córdoba'
        },
        {
            id: 2,
            marca: 'Nissan',
            modelo: 'Versa',
            año: 2022,
            precio: 9800000,
            kilometraje: 15000,
            combustible: 'Nafta',
            transmision: 'Manual',
            tipo: 'usado',
            estado: 'disponible',
            color: 'Gris Plata',
            carroceria: 'Sedán',
            fotos: [
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ],
            especificaciones: {
                motor: '1.6L HR16',
                cilindrada: '1598 cc',
                potencia: '115 HP @ 5600 RPM',
                torque: '112 lb-pie @ 4000 RPM',
                cilindros: '4 en línea',
                valvulas: '16',
                consumo: '15.8 km/l',
                capacidad: '5 pasajeros',
                traccion: 'Delantera',
                equipamiento: ['Sistema de audio con Bluetooth', 'Aire acondicionado', 'Vidrios eléctricos', 'Espejos eléctricos', 'Dirección hidráulica', 'Airbags frontales']
            },
            descripcion: 'Nissan Versa 2022 en excelente estado, único dueño, mantenimiento al día. Ideal para familia.',
            descripcionDetallada: 'Auto familiar en muy buen estado. Pequeño detalle en paragolpes delantero derecho (cosmético). Tapizados limpios, motor en perfectas condiciones. Service recién realizado.',
            oferta: false,
            destacado: false,
            visitas: 0,
            fechaIngreso: '2024-01-20',
            ubicacion: 'Cruz del Eje, Córdoba'
        },
        {
            id: 3,
            marca: 'Toyota',
            modelo: 'Corolla',
            año: 2023,
            precio: 15200000,
            kilometraje: 5000,
            combustible: 'Nafta',
            transmision: 'Automática',
            tipo: 'usado',
            estado: 'disponible',
            color: 'Rojo Passion',
            carroceria: 'Sedán',
            fotos: [
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ],
            especificaciones: {
                motor: '2.0L Dynamic Force',
                cilindrada: '1987 cc',
                potencia: '169 HP @ 6600 RPM',
                torque: '151 lb-pie @ 4800 RPM',
                cilindros: '4 en línea',
                valvulas: '16',
                consumo: '15.2 km/l',
                capacidad: '5 pasajeros',
                traccion: 'Delantera',
                equipamiento: ['Pantalla táctil 8"', 'Control de estabilidad', 'Airbags frontales y laterales', 'Aire acondicionado automático', 'Dirección eléctrica', 'Cámara de retroceso', 'Sensores de estacionamiento']
            },
            descripcion: 'Toyota Corolla 2023 casi 0km, versión automática, excelente relación precio-calidad.',
            descripcionDetallada: 'Semi nuevo, prácticamente 0km. Sin detalles estéticos, pintura original. Interior como nuevo, sin marcas de uso. Garantía de fábrica vigente.',
            oferta: false,
            destacado: false,
            visitas: 0,
            fechaIngreso: '2024-02-01',
            ubicacion: 'Cruz del Eje, Córdoba'
        },
        {
            id: 4,
            marca: 'Peugeot',
            modelo: '3008',
            año: 2021,
            precio: 18500000,
            kilometraje: 25000,
            combustible: 'Diésel',
            transmision: 'Automática',
            tipo: 'usado',
            estado: 'disponible',
            color: 'Negro Nacré',
            carroceria: 'SUV',
            fotos: [
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ],
            especificaciones: {
                motor: '2.0L BlueHDi',
                cilindrada: '1997 cc',
                potencia: '180 HP @ 3750 RPM',
                torque: '295 lb-pie @ 2000 RPM',
                cilindros: '4 en línea',
                valvulas: '16',
                consumo: '18.2 km/l',
                capacidad: '5 pasajeros',
                traccion: 'Delantera',
                equipamiento: ['Pantalla i-Cockpit', 'Asientos de cuero', 'Techo panorámico', 'Sistema de sonido Focal', 'Asientos calefaccionados', 'Navegador GPS']
            },
            descripcion: 'Peugeot 3008 SUV premium, full equipo, impecable estado. Tecnología y confort excepcionales.',
            descripcionDetallada: 'SUV premium en excelente estado. Pequeño roce en llanta trasera izquierda. Tapizados de cuero impecables, sistema de sonido premium funcionando perfectamente.',
            oferta: false,
            destacado: false,
            visitas: 0,
            fechaIngreso: '2024-02-05',
            ubicacion: 'Cruz del Eje, Córdoba'
        },
        {
            id: 5,
            marca: 'Nissan',
            modelo: 'Kicks',
            año: 2022,
            precio: 14500000,
            kilometraje: 18000,
            combustible: 'Nafta',
            transmision: 'Automática',
            tipo: 'usado',
            estado: 'disponible',
            color: 'Azul Profundo',
            carroceria: 'SUV',
            fotos: [
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ],
            especificaciones: {
                motor: '1.6L HR16',
                cilindrada: '1598 cc',
                potencia: '118 HP @ 5600 RPM',
                torque: '106 lb-pie @ 4000 RPM',
                cilindros: '4 en línea',
                valvulas: '16',
                consumo: '14.5 km/l',
                capacidad: '5 pasajeros',
                traccion: 'Delantera',
                equipamiento: ['Sistema NissanConnect', 'Cámara de visión 360°', 'Sensores de estacionamiento', 'Control de crucero', 'Asientos de tela', 'Aire acondicionado automático']
            },
            descripcion: 'Nissan Kicks 2022, SUV compacta con excelente espacio interior y tecnología avanzada.',
            descripcionDetallada: 'SUV familiar en muy buen estado. Algún pequeño detalle en paragolpes trasero. Interior bien cuidado, tecnología funcionando correctamente. Ideal para ciudad.',
            oferta: false,
            destacado: false,
            visitas: 0,
            fechaIngreso: '2024-02-10',
            ubicacion: 'Cruz del Eje, Córdoba'
        },
        {
            id: 6,
            marca: 'Toyota',
            modelo: 'Hilux',
            año: 2023,
            precio: 21200000,
            kilometraje: 0,
            combustible: 'Diésel',
            transmision: 'Manual',
            tipo: 'nuevo',
            estado: 'disponible',
            color: 'Gris Grafito',
            carroceria: 'Pickup',
            fotos: [
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ],
            especificaciones: {
                motor: '2.8L Turbodiésel',
                cilindrada: '2755 cc',
                potencia: '204 HP @ 3400 RPM',
                torque: '500 Nm @ 1600 RPM',
                cilindros: '4 en línea',
                valvulas: '16',
                consumo: '12.8 km/l',
                capacidad: '5 pasajeros',
                traccion: '4x4',
                equipamiento: ['Pantalla 8"', 'Control de crucero adaptativo', 'Cámara de visión 360°', 'Sensores de estacionamiento', 'Airbags laterales', 'Aire acondicionado digital', 'Asientos de cuero']
            },
            descripcion: 'Toyota Hilux 0km, pickup robusta con capacidad off-road y tecnología de última generación.',
            descripcionDetallada: 'Vehículo 0km, garantía de fábrica. Sin detalles, pintura original. Equipamiento completo, listo para entregar. Financiación disponible.',
            oferta: false,
            destacado: false,
            visitas: 0,
            fechaIngreso: '2024-02-15',
            ubicacion: 'Cruz del Eje, Córdoba'
        }
    ],
    defaultTestimonials: [
        {
            id: 1,
            nombre: 'Carlos Rodríguez',
            auto: 'Peugeot 208 2023',
            comentario: 'Excelente atención y el auto superó mis expectativas. El proceso de compra fue muy transparente.',
            foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            fecha: '2024-01-25'
        },
        {
            id: 2,
            nombre: 'María González',
            auto: 'Nissan Versa 2022',
            comentario: 'Muy profesional el equipo de Wiston. Me ayudaron a encontrar el auto perfecto para mi familia.',
            foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            fecha: '2024-02-10'
        },
        {
            id: 3,
            nombre: 'Roberto Sánchez',
            auto: 'Toyota Corolla 2023',
            comentario: '',
            foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            fecha: '2024-02-18'
        },
        {
            id: 4,
            nombre: 'Laura Martínez',
            auto: 'Peugeot 3008 2021',
            comentario: 'Mi primera SUV y fue la mejor decisión. La calidad del vehículo y el servicio post-venta excepcionales.',
            foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            fecha: '2024-01-30'
        },
        {
            id: 5,
            nombre: 'Diego López',
            auto: 'Nissan Kicks 2022',
            comentario: '',
            foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            fecha: '2024-02-12'
        },
        {
            id: 6,
            nombre: 'Ana Costa',
            auto: 'Toyota Hilux 2023',
            comentario: 'Encantada con mi nueva Toyota Hilux. Robusta, cómoda y con un consumo excelente.',
            foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            fecha: '2024-02-20'
        }
    ],
    chatResponses: {
        'default': '¡Hola! Soy tu asistente virtual de Wiston. ¿En qué puedo ayudarte hoy?',
        'ver catálogo': '¡Perfecto! Te llevo directamente a nuestro catálogo de vehículos.',
        'contactar por whatsapp': '¡Claro! Puedes comunicarte con nuestro equipo de ventas por WhatsApp: https://wa.me/5493549123456'
    }
};

// ===== ESTADO GLOBAL DE LA APLICACIÓN =====
const APP_STATE = {
    cars: [],
    testimonials: [],
    testDrives: [],
    currentUser: null,
    currentTheme: 'light',
    currentPage: 1,
    itemsPerPage: 6,
    filteredCars: [],
    searchTerm: '',
    activeFilters: {},
    chatbotOpen: false,
    adminPanelOpen: false,
    stats: {
        totalVisits: 0,
        totalContacts: 0
    }
};

// ===== INICIALIZACIÓN DE LA APLICACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${CONFIG.appName} v${CONFIG.version} - Inicializando...`);
    
    initializeApp();
    setupEventListeners();
    setupIntersectionObserver();
    
    console.log('Aplicación inicializada correctamente');
});

// ===== FUNCIONES DE INICIALIZACIÓN =====
function initializeApp() {
    loadInitialData();
    initTheme();
    loadCars();
    loadTestimonials();
    initFilters();
    updateStats();
    setupHeroSlider();
    checkAuthStatus();
    adjustMapSize();
    
    // Ocultar loading screen después de 2 segundos
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);
}

function loadInitialData() {
    // Cargar datos desde localStorage o usar valores por defecto
    APP_STATE.cars = loadFromStorage(CONFIG.storageKeys.cars) || CONFIG.defaultCars;
    APP_STATE.testimonials = loadFromStorage(CONFIG.storageKeys.testimonials) || CONFIG.defaultTestimonials;
    APP_STATE.testDrives = loadFromStorage(CONFIG.storageKeys.testDrives) || [];
    APP_STATE.stats = loadFromStorage(CONFIG.storageKeys.stats) || APP_STATE.stats;
    APP_STATE.currentUser = loadFromStorage(CONFIG.storageKeys.user) || null;
}

function setupEventListeners() {
    // Navegación y tema
    const themeToggle = document.getElementById('themeToggle');
    const loginBtn = document.getElementById('loginBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (loginBtn) loginBtn.addEventListener('click', showLoginModal);
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Formularios
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    
    // Búsqueda y filtros
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    
    // Chatbot
    const chatbotToggle = document.getElementById('chatbotToggle');
    
    if (chatbotToggle) chatbotToggle.addEventListener('click', toggleChatbot);
    
    // Cerrar modales
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeAllModals);
    });
    
    // Cerrar al hacer click fuera del modal
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeAllModals();
        }
        if (event.target.classList.contains('chatbot-window')) {
            // No cerrar chatbot al hacer click dentro
            event.stopPropagation();
        }
    });
    
    // Filtros dropdown
    setupFiltersDropdown();
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Ajustar mapa cuando cambie el tamaño de la ventana
    window.addEventListener('resize', adjustMapSize);
}

function setupFiltersDropdown() {
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersDropdown = document.getElementById('filtersDropdown');
    
    if (filtersToggle && filtersDropdown) {
        filtersToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = filtersDropdown.style.display === 'block';
            filtersDropdown.style.display = isVisible ? 'none' : 'block';
        });
        
        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', function() {
            filtersDropdown.style.display = 'none';
        });
        
        // Prevenir que el click dentro del dropdown lo cierre
        filtersDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    document.querySelectorAll('.car-card, .client-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== SISTEMA DE ALMACENAMIENTO =====
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error guardando en localStorage:', error);
        return false;
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error cargando desde localStorage:', error);
        return null;
    }
}

// ===== SISTEMA DE TEMA =====
function initTheme() {
    const savedTheme = loadFromStorage(CONFIG.storageKeys.theme) || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    APP_STATE.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    saveToStorage(CONFIG.storageKeys.theme, theme);
    updateThemeToggle();
}

function toggleTheme() {
    const newTheme = APP_STATE.currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    showNotification(`Modo ${newTheme === 'light' ? 'claro' : 'oscuro'} activado`);
}

function updateThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.textContent = APP_STATE.currentTheme === 'light' ? '🌙' : '☀️';
        toggle.setAttribute('aria-label', `Cambiar a modo ${APP_STATE.currentTheme === 'light' ? 'oscuro' : 'claro'}`);
    }
}

// ===== SISTEMA DE AUTOS =====
function loadCars() {
    APP_STATE.filteredCars = [...APP_STATE.cars];
    renderCars();
    updateFilterOptions();
}

function renderCars() {
    const grid = document.getElementById('catalogGrid');
    const emptyState = document.getElementById('catalogEmpty');
    
    if (!grid) return;
    
    // Calcular paginación
    const startIndex = (APP_STATE.currentPage - 1) * APP_STATE.itemsPerPage;
    const endIndex = startIndex + APP_STATE.itemsPerPage;
    const carsToShow = APP_STATE.filteredCars.slice(startIndex, endIndex);
    
    if (carsToShow.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    
    grid.innerHTML = carsToShow.map(car => createCarCard(car)).join('');
    
    renderPagination();
}

function createCarCard(car) {
    const ofertaBadge = car.oferta ? '<div class="oferta-badge">🔥 OFERTA</div>' : '';
    const cardClass = car.oferta ? 'car-card oferta' : 'car-card';
    
    return `
        <div class="${cardClass}" data-car-id="${car.id}">
            ${ofertaBadge}
            <div class="car-image-container">
                <img src="${car.fotos[0]}" alt="${car.marca} ${car.modelo}" class="car-image" loading="lazy">
            </div>
            <div class="car-info">
                <div class="car-header">
                    <div>
                        <h3 class="car-title">${car.marca} ${car.modelo}</h3>
                        <span class="car-year">${car.año} • ${car.tipo === 'nuevo' ? '0KM' : car.kilometraje.toLocaleString('es-AR') + ' km'}</span>
                    </div>
                    <div class="car-price">
                        $${car.precio.toLocaleString('es-AR')}
                        <span class="currency">ARS</span>
                    </div>
                </div>
                
                <div class="car-specs">
                    <div class="spec-item">
                        <svg class="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        ${car.combustible}
                    </div>
                    <div class="spec-item">
                        <svg class="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        ${car.transmision}
                    </div>
                    <div class="spec-item">
                        <svg class="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="5" width="20" height="14" rx="2"/>
                            <path d="M2 10h20"/>
                        </svg>
                        ${car.carroceria}
                    </div>
                    <div class="spec-item">
                        <svg class="spec-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        ${car.color}
                    </div>
                </div>
                
                <p class="car-description">${car.descripcion}</p>
                
                <div class="car-actions">
                    <button class="btn btn-primary" onclick="viewCarDetails(${car.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        Ver Más
                    </button>
                    <button class="btn btn-whatsapp" onclick="contactAboutCar(${car.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
}

function viewCarDetails(carId) {
    const car = APP_STATE.cars.find(c => c.id === carId);
    if (!car) return;
    
    // Incrementar contador de visitas
    car.visitas++;
    APP_STATE.stats.totalVisits++;
    saveToStorage(CONFIG.storageKeys.cars, APP_STATE.cars);
    saveToStorage(CONFIG.storageKeys.stats, APP_STATE.stats);
    
    showCarDetailsModal(car);
}

function showCarDetailsModal(car) {
    const modal = document.getElementById('carDetailsModal');
    const content = document.getElementById('carDetailsContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <div class="car-details">
            <div class="car-details-gallery">
                <div class="main-image">
                    <img src="${car.fotos[0]}" alt="${car.marca} ${car.modelo}" id="mainCarImage">
                </div>
                <div class="thumbnail-grid">
                    ${car.fotos.map((foto, index) => `
                        <img src="${foto}" alt="Vista ${index + 1}" 
                             onclick="changeMainImage('${foto}')"
                             class="${index === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
            </div>
            <div class="car-details-info">
                <h2>${car.marca} ${car.modelo} ${car.año}</h2>
                <div class="car-details-price">$${car.precio.toLocaleString('es-AR')}</div>
                
                ${car.oferta ? '<div class="oferta-badge-large">🔥 OFERTA ESPECIAL</div>' : ''}
                
                <div class="car-details-specs">
                    <h3>Especificaciones Técnicas</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">Motor:</span>
                            <span class="spec-value">${car.especificaciones.motor}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Cilindrada:</span>
                            <span class="spec-value">${car.especificaciones.cilindrada}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Potencia:</span>
                            <span class="spec-value">${car.especificaciones.potencia}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Torque:</span>
                            <span class="spec-value">${car.especificaciones.torque}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Cilindros:</span>
                            <span class="spec-value">${car.especificaciones.cilindros}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Válvulas:</span>
                            <span class="spec-value">${car.especificaciones.valvulas}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Combustible:</span>
                            <span class="spec-value">${car.combustible}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Transmisión:</span>
                            <span class="spec-value">${car.transmision}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Carrocería:</span>
                            <span class="spec-value">${car.carroceria}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Color:</span>
                            <span class="spec-value">${car.color}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Kilometraje:</span>
                            <span class="spec-value">${car.kilometraje === 0 ? '0 KM' : car.kilometraje.toLocaleString('es-AR') + ' km'}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Consumo:</span>
                            <span class="spec-value">${car.especificaciones.consumo}</span>
                        </div>
                    </div>
                </div>
                
                <div class="car-details-equipment">
                    <h3>Equipamiento</h3>
                    <ul>
                        ${car.especificaciones.equipamiento.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="car-details-description">
                    <h3>Estado del Vehículo</h3>
                    <p>${car.descripcionDetallada || 'Vehículo en perfecto estado, sin detalles importantes. Mantenimiento al día y listo para entregar.'}</p>
                </div>
                
                <div class="car-details-actions">
                    <button class="btn btn-primary" onclick="contactAboutCar(${car.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Consultar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function changeMainImage(src) {
    const mainImage = document.getElementById('mainCarImage');
    if (mainImage) {
        mainImage.src = src;
    }
    
    // Actualizar thumbnails activos
    document.querySelectorAll('.thumbnail-grid img').forEach(img => {
        img.classList.remove('active');
        if (img.src === src) {
            img.classList.add('active');
        }
    });
}

// ===== SISTEMA DE FILTROS Y BÚSQUEDA =====
function initFilters() {
    updateFilterOptions();
}

function updateFilterOptions() {
    const marcas = [...new Set(APP_STATE.cars.map(car => car.marca))];
    const años = [...new Set(APP_STATE.cars.map(car => car.año))].sort((a, b) => b - a);
    
    populateSelect('filterMarca', marcas);
    populateSelect('filterAnio', años);
}

function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    // Mantener el valor actual si existe
    const currentValue = select.value;
    
    // Limpiar opciones existentes (excepto la primera)
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    // Agregar nuevas opciones
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
    
    // Restaurar valor anterior si existe
    if (currentValue && options.includes(currentValue)) {
        select.value = currentValue;
    }
}

function applyFilters() {
    const marca = document.getElementById('filterMarca')?.value || '';
    const precio = document.getElementById('filterPrecio')?.value || '';
    const año = document.getElementById('filterAnio')?.value || '';
    const combustible = document.getElementById('filterCombustible')?.value || '';
    const tipo = document.getElementById('filterTipo')?.value || '';
    const kilometraje = document.getElementById('filterKilometraje')?.value || '';
    
    APP_STATE.activeFilters = {
        marca,
        precio,
        año,
        combustible,
        tipo,
        kilometraje
    };
    
    filterCars();
    
    // Cerrar dropdown después de aplicar filtros
    const filtersDropdown = document.getElementById('filtersDropdown');
    if (filtersDropdown) {
        filtersDropdown.style.display = 'none';
    }
}

function filterCars() {
    let filtered = [...APP_STATE.cars];
    
    // Aplicar filtros
    if (APP_STATE.activeFilters.marca) {
        filtered = filtered.filter(car => car.marca === APP_STATE.activeFilters.marca);
    }
    
    if (APP_STATE.activeFilters.año) {
        filtered = filtered.filter(car => car.año == APP_STATE.activeFilters.año);
    }
    
    if (APP_STATE.activeFilters.combustible) {
        filtered = filtered.filter(car => car.combustible === APP_STATE.activeFilters.combustible);
    }
    
    if (APP_STATE.activeFilters.tipo) {
        filtered = filtered.filter(car => car.tipo === APP_STATE.activeFilters.tipo);
    }
    
    if (APP_STATE.activeFilters.precio) {
        filtered = filtered.filter(car => checkPriceRange(car.precio, APP_STATE.activeFilters.precio));
    }
    
    if (APP_STATE.activeFilters.kilometraje) {
        filtered = filtered.filter(car => car.kilometraje <= parseInt(APP_STATE.activeFilters.kilometraje));
    }
    
    // Aplicar búsqueda
    if (APP_STATE.searchTerm) {
        const term = APP_STATE.searchTerm.toLowerCase();
        filtered = filtered.filter(car => 
            car.marca.toLowerCase().includes(term) ||
            car.modelo.toLowerCase().includes(term) ||
            car.descripcion.toLowerCase().includes(term)
        );
    }
    
    APP_STATE.filteredCars = filtered;
    APP_STATE.currentPage = 1;
    renderCars();
    updateFilterResultsText();
}

function checkPriceRange(price, range) {
    if (!range) return true;
    
    const [min, max] = range.split('-').map(p => p === '' ? Infinity : parseInt(p));
    if (range.endsWith('+')) {
        return price >= min;
    }
    return price >= min && price <= max;
}

function handleSearch(e) {
    APP_STATE.searchTerm = e.target.value.toLowerCase();
    filterCars();
}

function clearFilters() {
    // Resetear todos los selects
    const filterIds = ['filterMarca', 'filterPrecio', 'filterAnio', 'filterCombustible', 'filterTipo', 'filterKilometraje'];
    filterIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    APP_STATE.activeFilters = {};
    APP_STATE.searchTerm = '';
    APP_STATE.filteredCars = [...APP_STATE.cars];
    APP_STATE.currentPage = 1;
    
    renderCars();
    updateFilterResultsText();
    showNotification('Filtros limpiados');
    
    // Cerrar dropdown
    const filtersDropdown = document.getElementById('filtersDropdown');
    if (filtersDropdown) {
        filtersDropdown.style.display = 'none';
    }
}

function updateFilterResultsText() {
    const element = document.getElementById('filterResultsText');
    if (element) {
        const total = APP_STATE.filteredCars.length;
        const filtered = total !== APP_STATE.cars.length;
        
        if (filtered) {
            element.textContent = `Mostrando ${total} de ${APP_STATE.cars.length} vehículos`;
        } else {
            element.textContent = `Mostrando todos los vehículos (${total})`;
        }
    }
}

// ===== PAGINACIÓN =====
function renderPagination() {
    const container = document.getElementById('catalogPagination');
    if (!container) return;
    
    const totalPages = Math.ceil(APP_STATE.filteredCars.length / APP_STATE.itemsPerPage);
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Botón anterior
    html += `
        <button class="pagination-btn ${APP_STATE.currentPage === 1 ? 'disabled' : ''}" 
                onclick="changePage(${APP_STATE.currentPage - 1})" 
                ${APP_STATE.currentPage === 1 ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
            </svg>
        </button>
    `;
    
    // Números de página
    html += '<div class="pagination-pages">';
    
    const startPage = Math.max(1, APP_STATE.currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-page ${i === APP_STATE.currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    html += '</div>';
    
    // Botón siguiente
    html += `
        <button class="pagination-btn ${APP_STATE.currentPage === totalPages ? 'disabled' : ''}" 
                onclick="changePage(${APP_STATE.currentPage + 1})" 
                ${APP_STATE.currentPage === totalPages ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        </button>
    `;
    
    container.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(APP_STATE.filteredCars.length / APP_STATE.itemsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    APP_STATE.currentPage = page;
    renderCars();
    
    // Scroll suave al catálogo
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== SISTEMA DE CLIENTES =====
function loadTestimonials() {
    renderClients();
    updateClientsStats();
}

function renderClients() {
    const grid = document.getElementById('clientsGrid');
    if (!grid) return;
    
    grid.innerHTML = APP_STATE.testimonials.map(client => createClientCard(client)).join('');
}

function createClientCard(client) {
    return `
        <div class="client-card">
            <img src="${client.foto}" alt="Cliente satisfecho" class="client-photo">
            <div class="client-info">
                <p>${client.comentario || 'Cliente satisfecho con su compra'}</p>
                <div class="client-vehicle">${client.auto}</div>
            </div>
        </div>
    `;
}

function updateClientsStats() {
    const clientsCount = document.getElementById('clientsCount');
    const testimonialsCount = document.getElementById('testimonialsCount');
    
    if (clientsCount) clientsCount.textContent = APP_STATE.testimonials.length;
    if (testimonialsCount) testimonialsCount.textContent = APP_STATE.testimonials.length;
}

// ===== SISTEMA DE CONTACTO =====
function openWhatsApp() {
    const phone = '+5493549123456';
    const message = 'Hola, me interesa conocer más sobre los vehículos de Wiston Concesionaria.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function contactAboutCar(carId) {
    const car = APP_STATE.cars.find(c => c.id === carId);
    if (!car) return;
    
    const phone = '+5493549123456';
    const message = `Hola, me interesa el ${car.marca} ${car.modelo} ${car.año} que vi en su página web. ¿Podrían darme más información?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ===== SISTEMA DE CHATBOT =====
function toggleChatbot() {
    const window = document.getElementById('chatbotWindow');
    APP_STATE.chatbotOpen = !APP_STATE.chatbotOpen;
    
    if (APP_STATE.chatbotOpen) {
        window.classList.add('active');
    } else {
        window.classList.remove('active');
    }
}

function selectChatOption(option) {
    addChatMessage(option, 'user');
    
    setTimeout(() => {
        const response = CONFIG.chatResponses[option.toLowerCase()] || CONFIG.chatResponses['default'];
        addChatMessage(response, 'bot');
        
        // Acciones específicas
        switch(option.toLowerCase()) {
            case 'ver catálogo':
                setTimeout(() => scrollToSection('catalogo'), 1000);
                break;
            case 'contactar por whatsapp':
                setTimeout(() => openWhatsApp(), 1500);
                break;
        }
    }, 500);
}

function addChatMessage(text, sender) {
    const messages = document.getElementById('chatbotMessages');
    if (!messages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const time = new Date().toLocaleTimeString('es-AR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
        <div class="message-time">${time}</div>
    `;
    
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// ===== SISTEMA DE AUTENTICACIÓN Y PANEL ADMIN =====
function checkAuthStatus() {
    if (APP_STATE.currentUser) {
        updateLoginButton();
    }
}

function showLoginModal() {
    if (APP_STATE.currentUser) {
        showAdminPanel();
        return;
    }
    
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername')?.value;
    const password = document.getElementById('loginPassword')?.value;
    
    if (username === CONFIG.admin.username && password === CONFIG.admin.password) {
        APP_STATE.currentUser = {
            username: username,
            loginTime: new Date().toISOString()
        };
        
        saveToStorage(CONFIG.storageKeys.user, APP_STATE.currentUser);
        updateLoginButton();
        
        const modal = document.getElementById('loginModal');
        if (modal) modal.style.display = 'none';
        
        showAdminPanel();
        showNotification('Bienvenido al panel de administración');
    } else {
        showNotification('Credenciales incorrectas', 'error');
    }
}

function updateLoginButton() {
    const btn = document.getElementById('loginBtn');
    if (btn) {
        if (APP_STATE.currentUser) {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
                Panel Admin
            `;
            btn.style.background = 'var(--success-color)';
        } else {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
                Admin
            `;
            btn.style.background = '';
        }
    }
}

function showAdminPanel() {
    APP_STATE.adminPanelOpen = true;
    
    const panel = document.getElementById('adminPanel') || createAdminPanel();
    panel.style.display = 'block';
    document.body.style.overflow = 'hidden';
    showAdminTab('dashboard');
}

function createAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'adminPanel';
    panel.className = 'admin-panel';
    panel.innerHTML = `
        <div class="admin-header">
            <h2>Panel de Administración - Wiston</h2>
            <button onclick="closeAdminPanel()">Cerrar Sesión</button>
        </div>
        <div class="admin-nav">
            <button class="active" onclick="showAdminTab('dashboard')">Dashboard</button>
            <button onclick="showAdminTab('cars')">Vehículos</button>
            <button onclick="showAdminTab('testimonials')">Clientes</button>
            <button onclick="showAdminTab('settings')">Configuración</button>
        </div>
        <div class="admin-content" id="adminContent"></div>
    `;
    
    document.body.appendChild(panel);
    return panel;
}

function showAdminTab(tab) {
    const content = document.getElementById('adminContent');
    const buttons = document.querySelectorAll('.admin-nav button');
    
    if (!content) return;
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    switch(tab) {
        case 'dashboard':
            showDashboard(content);
            break;
        case 'cars':
            showCarsManagement(content);
            break;
        case 'testimonials':
            showTestimonialsManagement(content);
            break;
        case 'settings':
            showSettingsManagement(content);
            break;
    }
}

function showDashboard(content) {
    const totalVisits = APP_STATE.cars.reduce((sum, car) => sum + car.visitas, 0);
    const mostViewed = APP_STATE.cars.reduce((max, car) => car.visitas > max.visitas ? car : max, APP_STATE.cars[0]);
    const totalOfertas = APP_STATE.cars.filter(car => car.oferta).length;
    
    content.innerHTML = `
        <div class="stats-grid">
            <div class="stat-box">
                <div class="stat-number">${APP_STATE.cars.length}</div>
                <div class="stat-label">Vehículos Totales</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${totalVisits}</div>
                <div class="stat-label">Visitas Totales</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${APP_STATE.testimonials.length}</div>
                <div class="stat-label">Clientes</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${totalOfertas}</div>
                <div class="stat-label">En Oferta</div>
            </div>
        </div>
        
        <div class="admin-section">
            <h3>Vehículo Más Visto</h3>
            <div class="car-card" style="max-width: 400px;">
                <div class="car-info">
                    <h3>${mostViewed.marca} ${mostViewed.modelo}</h3>
                    <div class="car-price">$${mostViewed.precio.toLocaleString('es-AR')}</div>
                    <div class="car-stats">
                        <span>Visitas: ${mostViewed.visitas}</span>
                        ${mostViewed.oferta ? '<span class="oferta-badge-small">🔥 OFERTA</span>' : ''}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="admin-section">
            <h3>Estadísticas Generales</h3>
            <div class="stats-cards">
                <div class="stat-card">
                    <div class="stat-value">${APP_STATE.stats.totalVisits}</div>
                    <div class="stat-label">Visitas Totales</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${APP_STATE.stats.totalContacts}</div>
                    <div class="stat-label">Contactos</div>
                </div>
            </div>
        </div>
    `;
}

function showCarsManagement(content) {
    content.innerHTML = `
        <div class="admin-section">
            <div class="admin-section-header">
                <h3>Gestión de Vehículos</h3>
                <button class="btn btn-primary" onclick="showAddCarModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                    Agregar Vehículo
                </button>
            </div>
            
            <div class="admin-table-container">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Vehículo</th>
                            <th>Precio</th>
                            <th>Año</th>
                            <th>Estado</th>
                            <th>Visitas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${APP_STATE.cars.map(car => `
                            <tr>
                                <td>
                                    <div class="car-info-small">
                                        <img src="${car.fotos[0]}" alt="${car.marca} ${car.modelo}" class="car-thumb">
                                        <div>
                                            <strong>${car.marca} ${car.modelo}</strong>
                                            <div class="car-details">${car.kilometraje.toLocaleString('es-AR')} km • ${car.combustible} • ${car.transmision}</div>
                                            ${car.oferta ? '<div class="oferta-badge-small">🔥 OFERTA</div>' : ''}
                                        </div>
                                    </div>
                                </td>
                                <td>$${car.precio.toLocaleString('es-AR')}</td>
                                <td>${car.año}</td>
                                <td>
                                    <span class="status-badge status-${car.estado}">${car.estado}</span>
                                </td>
                                <td>${car.visitas}</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn-action edit" onclick="editCar(${car.id})" title="Editar">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                            </svg>
                                        </button>
                                        <button class="btn-action delete" onclick="deleteCar(${car.id})" title="Eliminar">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showTestimonialsManagement(content) {
    content.innerHTML = `
        <div class="admin-section">
            <div class="admin-section-header">
                <h3>Gestión de Clientes</h3>
                <button class="btn btn-primary" onclick="showAddTestimonialModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                    Agregar Cliente
                </button>
            </div>
            
            <div class="admin-table-container">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Vehículo</th>
                            <th>Comentario</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${APP_STATE.testimonials.map(testimonial => `
                            <tr>
                                <td>
                                    <div class="testimonial-info">
                                        <img src="${testimonial.foto}" alt="${testimonial.nombre}" class="testimonial-thumb">
                                        <strong>${testimonial.nombre}</strong>
                                    </div>
                                </td>
                                <td>${testimonial.auto}</td>
                                <td>${testimonial.comentario || 'Sin comentario'}</td>
                                <td>${formatDate(testimonial.fecha)}</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn-action edit" onclick="editTestimonial(${testimonial.id})" title="Editar">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                            </svg>
                                        </button>
                                        <button class="btn-action delete" onclick="deleteTestimonial(${testimonial.id})" title="Eliminar">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showSettingsManagement(content) {
    content.innerHTML = `
        <div class="admin-section">
            <h3>Configuración General</h3>
            
            <div class="settings-grid">
                <div class="setting-card">
                    <h4>Datos de la Concesionaria</h4>
                    <form id="concesionariaForm">
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" value="Wiston Concesionaria">
                        </div>
                        <div class="form-group">
                            <label>Teléfono</label>
                            <input type="tel" value="+54 9 3549 123456">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="info@wiston.com.ar">
                        </div>
                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" value="Av. San Martín 1234, Cruz del Eje, Córdoba">
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                    </form>
                </div>
                
                <div class="setting-card">
                    <h4>Mantenimiento</h4>
                    <div class="maintenance-actions">
                        <button class="btn btn-secondary" onclick="exportData()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Exportar Datos
                        </button>
                        <button class="btn btn-outline" onclick="resetToDefaults()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M2.5 2v6h6M21.5 22v-6h-6"/>
                                <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2"/>
                            </svg>
                            Restablecer Valores
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function closeAdminPanel() {
    APP_STATE.adminPanelOpen = false;
    APP_STATE.currentUser = null;
    saveToStorage(CONFIG.storageKeys.user, null);
    
    const panel = document.getElementById('adminPanel');
    if (panel) {
        panel.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
    updateLoginButton();
    showNotification('Sesión de administración cerrada');
}

// ===== FUNCIONES DE ADMINISTRACIÓN (CRUD) =====
function showAddCarModal() {
    showNotification('Funcionalidad de agregar vehículo - En desarrollo', 'info');
}

function editCar(carId) {
    showNotification(`Editando vehículo ${carId} - En desarrollo`, 'info');
}

function deleteCar(carId) {
    if (confirm('¿Estás seguro de que quieres eliminar este vehículo?')) {
        APP_STATE.cars = APP_STATE.cars.filter(car => car.id !== carId);
        APP_STATE.filteredCars = APP_STATE.filteredCars.filter(car => car.id !== carId);
        saveToStorage(CONFIG.storageKeys.cars, APP_STATE.cars);
        renderCars();
        showAdminTab('cars');
        showNotification('Vehículo eliminado correctamente');
    }
}

function showAddTestimonialModal() {
    showNotification('Funcionalidad de agregar cliente - En desarrollo', 'info');
}

function editTestimonial(testimonialId) {
    showNotification(`Editando cliente ${testimonialId} - En desarrollo`, 'info');
}

function deleteTestimonial(testimonialId) {
    if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
        APP_STATE.testimonials = APP_STATE.testimonials.filter(t => t.id !== testimonialId);
        saveToStorage(CONFIG.storageKeys.testimonials, APP_STATE.testimonials);
        showAdminTab('testimonials');
        showNotification('Cliente eliminado correctamente');
    }
}

// ===== FUNCIONES DE MANTENIMIENTO =====
function exportData() {
    const data = {
        cars: APP_STATE.cars,
        testimonials: APP_STATE.testimonials,
        testDrives: APP_STATE.testDrives,
        stats: APP_STATE.stats,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wiston-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Datos exportados correctamente');
}

function resetToDefaults() {
    if (confirm('¿Restablecer todos los datos a los valores por defecto?')) {
        APP_STATE.cars = CONFIG.defaultCars;
        APP_STATE.testimonials = CONFIG.defaultTestimonials;
        APP_STATE.testDrives = [];
        APP_STATE.stats = {
            totalVisits: 0,
            totalContacts: 0
        };
        
        saveToStorage(CONFIG.storageKeys.cars, APP_STATE.cars);
        saveToStorage(CONFIG.storageKeys.testimonials, APP_STATE.testimonials);
        saveToStorage(CONFIG.storageKeys.testDrives, APP_STATE.testDrives);
        saveToStorage(CONFIG.storageKeys.stats, APP_STATE.stats);
        
        loadCars();
        loadTestimonials();
        showAdminTab('dashboard');
        showNotification('Datos restablecidos a valores por defecto');
    }
}

// ===== FUNCIONES DE UTILIDAD =====
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

function setupHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.car-slide');
    const totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }
    
    // Cambiar slide cada 5 segundos
    setInterval(nextSlide, 5000);
}

function handleScroll() {
    const header = document.querySelector('.header');
    if (header && window.scrollY > 100) {
        header.classList.add('scrolled');
    } else if (header) {
        header.classList.remove('scrolled');
    }
}

function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    const btn = document.getElementById('mobileMenuBtn');
    
    if (menu && btn) {
        menu.classList.toggle('active');
        btn.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    const btn = document.getElementById('mobileMenuBtn');
    
    if (menu && btn) {
        menu.classList.remove('active');
        btn.classList.remove('active');
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const offsetTop = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });
}

function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'error' ? 'error' : type === 'info' ? 'info' : ''}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'var(--error-color)' : type === 'info' ? 'var(--info-color)' : 'var(--success-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.parentElement.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-AR', options);
}

function updateStats() {
    // Esta función se llama periódicamente para actualizar estadísticas
    APP_STATE.stats.totalVisits = APP_STATE.cars.reduce((sum, car) => sum + car.visitas, 0);
    saveToStorage(CONFIG.storageKeys.stats, APP_STATE.stats);
}

// ===== CORRECCIÓN PARA EL MAPA =====
function adjustMapSize() {
    const mapContainer = document.querySelector('.contact-map');
    if (mapContainer) {
        mapContainer.style.height = '400px';
        mapContainer.style.minHeight = '400px';
        mapContainer.style.maxHeight = '400px';
    }
}

// ===== FUNCIONES GLOBALES PARA HTML =====
window.toggleTheme = toggleTheme;
window.scrollToSection = scrollToSection;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.viewCarDetails = viewCarDetails;
window.changeMainImage = changeMainImage;
window.openWhatsApp = openWhatsApp;
window.contactAboutCar = contactAboutCar;
window.toggleChatbot = toggleChatbot;
window.selectChatOption = selectChatOption;
window.showLoginModal = showLoginModal;
window.closeAdminPanel = closeAdminPanel;
window.showAdminTab = showAdminTab;
window.changePage = changePage;
window.closeMobileMenu = closeMobileMenu;

console.log('JavaScript de Wiston Concesionaria cargado correctamente');