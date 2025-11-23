// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const langButtons = document.querySelectorAll('.lang-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Portfolio items data
const portfolioItems = [
    { 
        id: 1, 
        title: 'Постер под заказ', 
        image: 'Постер дз 1.png',
        description: 'Качественный постер, созданный по индивидуальному заказу. Внимание к деталям и креативный подход делают этот постер запоминающимся и эффективным.',
        category: 'Графический дизайн',
        tags: ['Постер', 'Полиграфия', 'Реклама'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center;'
    },
    { 
        id: 2, 
        title: 'Визитная карточка', 
        image: 'Визитка дарс 1 пешш.png',
        description: 'Передняя часть Визитки',
        category: 'Графический дизайн',
        tags: ['Визитка', 'Брендинг', 'Полиграфия'],
        size: 'small'
    },
    { 
        id: 2, 
        title: 'Брошюра', 
        image: 'Брошюра.png',
        description: 'Брошюра',
        category: 'Полиграфический дизайн',
        tags: ['Брошюра', 'Полиграфия', 'Дизайн'],
        size: 'small'
    },
    { 
        id: 3, 
        title: 'Винетка', 
        image: 'ВИНЕТКА 1.png',
        description: 'Винетка',
        category: 'Полиграфический дизайн',
        tags: ['Винетка', 'Полиграфия', 'Дизайн'],
        size: 'small'
    },
    { 
        id: 4, 
        title: 'Визитная карточка', 
        image: 'Визитка 2 дз пштш.png',
        description: 'Задняя часть Визитки',
        category: 'Графический дизайн',
        tags: ['Визитка', 'Брендинг', 'Полиграфия'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center;'
    },
    { 
        id: 5, 
        title: 'Карточка Товара', 
        image: 'Экзамен.png',
        description: 'Карточка Товара',
        category: 'UI/UX Дизайн',
        tags: ['Карточка товара', 'E-commerce', 'Интерфейс'],
        size: 'small'
    },
    { 
        id: 6, 
        title: 'Меню', 
        image: '2.png',
        description: 'Элегантный дизайн меню ресторана или кафе. Четкая структура, удобная навигация по разделам и аппетитное представление блюд. Удачное сочетание типографики и визуальных элементов создает приятное впечатление и способствует выбору блюд.',
        category: 'Графический дизайн',
        tags: ['Меню', 'Ресторан', 'Типографика'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center;'
    },
    { 
        id: 7, 
        title: 'Логотип', 
        image: '55555.png',
        description: 'Уникальный логотип, отражающий индивидуальность бренда. Современный дизайн с запоминающимися элементами. Логотип легко масштабируется и сохраняет читаемость как в больших, так и в малых размерах. Цветовая гамма подобрана с учетом психологии восприятия.',
        category: 'Брендинг',
        tags: ['Логотип', 'Айдентика', 'Фирменный стиль'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 8, 
        title: 'Логотип под заказ', 
        image: 'Безымянный-1.png',
        description: 'Эксклюзивный логотип, созданный по индивидуальному заказу. Уникальный дизайн, отражающий ценности и характер бренда. Внимание к деталям и креативный подход делают этот логотип запоминающимся и эффективным инструментом для продвижения бизнеса.',
        category: 'Брендинг',
        tags: ['Логотип', 'Брендинг', 'Индивидуальный дизайн'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 15px;'
    },
    { 
        id: 9, 
        title: 'Пример Иконок', 
        image: '1.png',
        description: 'Набор иконок в едином стиле. Каждая иконка выполнена с учетом принципов минимализма и узнаваемости. Оптимизированы для различных разрешений экранов и платформ.',
        category: 'Графический дизайн',
        tags: ['Иконки', 'UI элементы', 'Векторная графика'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 20px;'
    },
    { 
        id: 9, 
        title: 'Пример Сайта', 
        image: 'Frame 1.png',
        description: 'Современный дизайн веб-сайта с акцентом на удобство использования и визуальную привлекательность. Четкая структура, интуитивно понятная навигация и адаптивный дизайн обеспечивают комфортное взаимодействие с контентом на любых устройствах.',
        category: 'Веб-дизайн',
        tags: ['Сайт', 'Адаптивность', 'Интерфейс'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 10, 
        title: 'Сайт', 
        image: 'Frame 5.png',
        description: 'Современный веб-сайт с адаптивным дизайном. Четкая структура, интуитивно понятная навигация и привлекательный визуальный стиль. Оптимизирован для различных устройств и экранов, что обеспечивает комфортное взаимодействие с контентом для всех пользователей.',
        category: 'Веб-дизайн',
        tags: ['Сайт', 'Адаптивность', 'Интерфейс'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 12, 
        title: 'Постер 4', 
        image: 'ЭКЗАМЕН 08,11,2025.png',
        description: 'Яркий и запоминающийся постер с современным дизайном. Эффектная композиция и тщательно подобранная цветовая гамма создают сильное визуальное воздействие. Идеально подходит для рекламных кампаний и привлечения внимания целевой аудитории.',
        category: 'Графический дизайн',
        tags: ['Постер', 'Реклама', 'Дизайн'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 11, 
        title: 'Сторис', 
        image: '25.png',
        description: 'Яркие и привлекательные сторис для социальных сетей. Современный дизайн с акцентом на визуальную привлекательность и читаемость контента. Идеально подходит для привлечения внимания в ленте и увеличения вовлеченности аудитории.',
        category: 'SMM Дизайн',
        tags: ['Сторис', 'Социальные сети', 'Контент'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 15px;'
    },
    { 
        id: 13, 
        title: 'Постер 1', 
        image: 'Постер 1.png',
        description: 'Яркий и привлекающий внимание постер с современным дизайном. Эффектная типографика и сбалансированная композиция создают сильное визуальное воздействие. Идеально подходит для рекламных кампаний и мероприятий.',
        category: 'Графический дизайн',
        tags: ['Постер', 'Реклама', 'Типографика'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 14, 
        title: 'Постер 2', 
        image: 'ДАРС.png',
        description: 'Яркий и стильный постер с современным дизайном. Эффектное сочетание цветов и типографики привлекает внимание и запоминается. Идеальный выбор для рекламных кампаний и продвижения мероприятий.',
        category: 'Графический дизайн',
        tags: ['Постер', 'Реклама', 'Дизайн'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 15, 
        title: 'Постер 3', 
        image: 'ДАРС 2.png',
        description: 'Креативный постер с уникальным дизайном. Сочетание современных трендов и классических решений делает этот постер универсальным для различных маркетинговых целей. Отличный выбор для привлечения внимания целевой аудитории.',
        category: 'Графический дизайн',
        tags: ['Постер', 'Реклама', 'Дизайн'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    },
    { 
        id: 16, 
        title: 'Постер 53', 
        image: 'Постер дарс 1.png',
        description: 'Эксклюзивный постер с современным дизайном. Яркие цвета и четкие линии создают запоминающийся визуальный образ. Идеально подходит для рекламных кампаний и привлечения внимания целевой аудитории.',
        category: 'Графический дизайн',
        tags: ['Постер', 'Реклама', 'Дизайн'],
        size: 'small',
        style: 'object-fit: contain; width: 100%; height: 100%; object-position: center; background-color: white; padding: 10px;'
    }
];

// Language translations
const translations = {
    ru: {
        home: 'Главная',
        about: 'Обо мне',
        portfolio: 'Портфолио',
        contact: 'Контакты',
        heroTitle: 'Привет, я дизайнер',
        heroSubtitle: 'Создаю визуальные решения, которые вдохновляют',
        viewWork: 'Посмотреть работы',
        aboutTitle: 'Обо мне',
        aboutText: 'Я дизайнер с опытом работы в создании визуального контента. Специализируюсь на создании постеров, логотипов и графического дизайна.',
        skillsTitle: 'Навыки',
        portfolioTitle: 'Мои работы',
        contactTitle: 'Контакты',
        telegram: 'Написать в Telegram',
        footerText: '© 2025 Все права защищены',
        poster: 'Постер'
    },
    en: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact',
        heroTitle: 'Hi, I\'m a Designer',
        heroSubtitle: 'Creating visual solutions that inspire',
        viewWork: 'View Work',
        aboutTitle: 'About Me',
        aboutText: 'I am a designer with experience in creating visual content. I specialize in creating posters, logos, and graphic design.',
        skillsTitle: 'Skills',
        portfolioTitle: 'My Work',
        contactTitle: 'Contact Me',
        telegram: 'Message on Telegram',
        footerText: '© 2025 All Rights Reserved',
        poster: 'Poster'
    },
    tg: {
        home: 'Асосӣ',
        about: 'Дар бораи ман',
        portfolio: 'Портфолио',
        contact: 'Тамос',
        heroTitle: 'Салом, ман дизайнер ҳастам',
        heroSubtitle: 'Ҳалли визуалиро эҷод мекунама, ки ибтидо мекунад',
        viewWork: 'Дидани корҳо',
        aboutTitle: 'Дар бораи ман',
        aboutText: 'Ман дизайнери бо таҷриба дар эҷоди муҳтавои визуалӣ ҳастам. Ман ба эҷоди плакатҳо, логотипҳо ва дизайни графӣ машғулам.',
        skillsTitle: 'Малакаҳо',
        portfolioTitle: 'Корҳои ман',
        contactTitle: 'Тамос бо ман',
        telegram: 'Дар Telegram нависед',
        footerText: '© 2025 Ҳамаи ҳуқуқҳо ҳифз шудаанд',
        poster: 'Плакат'
    }
};

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Check for saved language preference or use browser language
let currentLang = localStorage.getItem('language') || navigator.language.split('-')[0];
if (!['ru', 'en', 'tg'].includes(currentLang)) {
    currentLang = 'ru'; // Default to Russian if language not supported
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
    
    // Set initial language
    setLanguage(currentLang);
    
    // Render portfolio items
    renderPortfolio();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Language switcher functionality
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        setLanguage(lang);
        localStorage.setItem('language', lang);
        
        // Update active button
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Render portfolio items
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-item ${item.size || ''}">
            <div class="portfolio-item-inner">
                <div class="portfolio-item-front">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-image">
                    ${item.category ? `<span class="portfolio-category">${item.category}</span>` : ''}
                </div>
                <div class="portfolio-item-back">
                    <h3>${item.title}</h3>
                    <p>${item.description || ''}</p>
                    ${item.tags ? `
                    <div class="portfolio-tags">
                        ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Add smooth scrolling to all links
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    offset: 80
});

// Simple polyfill for smooth scrolling
function SmoothScroll(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const speed = options.speed || 400;
    const offset = options.offset || 0;
    
    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - offset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = easeInOutQuad(timeElapsed, startPosition, distance, speed);
                    window.scrollTo(0, run);
                    if (timeElapsed < speed) requestAnimationFrame(animation);
                }
                
                function easeInOutQuad(t, b, c, d) {
                    t /= d/2;
                    if (t < 1) return c/2*t*t + b;
                    t--;
                    return -c/2 * (t*(t-2) - 1) + b;
                }
                
                requestAnimationFrame(animation);
            }
        });
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.portfolio-item, .about-content, .hero-content, .hero-image');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial check for elements in viewport
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
