const svgNS = "http://www.w3.org/2000/svg";
const services = [{
    accent: 'green',
    title: 'Замена экрана',
    bg: '/assets/img/zamena-ekrana.webp',
    short: 'Треснуло стекло или пропали цвета — поставим качественный дисплей на iPhone, Samsung, Xiaomi и другие модели.',
    desc: 'Дисплейный модуль — самая частая причина обращений. Мы аккуратно вскрываем корпус, снимаем повреждённый экран и устанавливаем новый, откалиброванный под конкретную модель.',
    points: ['Подбор дисплея под точную модель устройства', 'Проверка сенсора, цветопередачи и Face ID / сканера отпечатка', 'Установка защитного стекла или плёнки после замены'],
    icon: `<defs><linearGradient id="ig1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#39e85d"/><stop offset="100%" stop-color="#1fbf49"/></linearGradient></defs>
      <rect x="5" y="2" width="14" height="20" rx="3" fill="url(#ig1)" opacity=".18"/>
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="url(#ig1)" stroke-width="1.6" fill="none"/>
      <path d="M9 18h6" stroke="url(#ig1)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 7l3 4-2 3 4 3" stroke="url(#ig1)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
}, {
    accent: 'violet',
    title: 'Замена аккумулятора',
    bg: '/assets/img/zamena-akkumulyatora.webp',
    short: 'Быстро садится батарея или телефон выключается сам — вернём автономность, специализируемся на АКБ для iPhone.',
    desc: 'Аккумулятор со временем теряет ёмкость — телефон разряжается за полдня или неожиданно выключается на морозе. Заменим батарею на новую и убедимся в исправности системы зарядки.',
    points: ['Специализируемся на АКБ для любых моделей iPhone', 'Убедимся в исправности системы зарядки', 'Устраняем перегрев и внезапные выключения'],
    icon: `<defs><linearGradient id="ig2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7b5cfa"/><stop offset="100%" stop-color="#5a3fe0"/></linearGradient></defs>
      <rect x="2" y="8" width="17" height="9" rx="2.5" fill="url(#ig2)" opacity=".18"/>
      <rect x="2" y="8" width="17" height="9" rx="2.5" stroke="url(#ig2)" stroke-width="1.6" fill="none"/>
      <rect x="20" y="10.5" width="2.4" height="4" rx="1" fill="url(#ig2)"/>
      <path d="M12 10.5l-2.6 3.2h2.2L10.6 17l3.2-3.6h-2.1z" fill="url(#ig2)"/>`
}, {
    accent: 'cyan',
    title: 'Ремонт разъёма зарядки',
    bg: '/assets/img/remont-razyom.webp',
    short: 'Провод шатается, заряжается через раз или не заряжается вовсе — почистим или заменим разъём.',
    desc: 'Разъём зарядки страдает от пыли, влаги и износа контактов. Прочистим его от загрязнений или заменим шлейф, если контакты повреждены механически.',
    points: ['Диагностика: пыль, окисление или обрыв контакта', 'Замена разъёма/шлейфа при физическом повреждении', 'Проверка исправности системы зарядки после ремонта'],
    icon: `<defs><linearGradient id="ig3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00d9ff"/><stop offset="100%" stop-color="#0098b3"/></linearGradient></defs>
      <path d="M13 2v6M11 2v6" stroke="url(#ig3)" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="8" y="8" width="8" height="13" rx="2.5" fill="url(#ig3)" opacity=".18"/>
      <rect x="8" y="8" width="8" height="13" rx="2.5" stroke="url(#ig3)" stroke-width="1.6" fill="none"/>
      <path d="M12 12v3M10.5 15.5h3" stroke="url(#ig3)" stroke-width="1.6" stroke-linecap="round"/>`
}, {
    accent: 'green',
    title: 'Скупка и продажа телефонов',
    bg: '/assets/img/skupka.webp',
    short: 'Оценим состояние вашего устройства и купим сразу, либо поможем подобрать проверенный б/у телефон на замену.',
    desc: 'Меняете телефон или он просто лежит без дела — оценим состояние честно и предложим адекватную цену. Также поможем подобрать проверенное б/у устройство взамен.',
    points: ['Быстрая оценка состояния прямо при вас', 'Выплата сразу после осмотра', 'Подбор б/у телефона с проверкой перед покупкой'],
    icon: `<defs><linearGradient id="ig4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#39e85d"/><stop offset="100%" stop-color="#1fbf49"/></linearGradient></defs>
      <path d="M4 9l-2.4 2.4L4 13.8" stroke="url(#ig4)" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 15l2.4-2.4L20 10.2" stroke="url(#ig4)" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.8 11.4h13" stroke="url(#ig4)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M22.2 12.6h-13" stroke="url(#ig4)" stroke-width="1.8" stroke-linecap="round"/>`
}, {
    accent: 'violet',
    title: 'Бронеплёнки и защита',
    bg: '/assets/img/zashita.webp',
    short: 'Установим прочную защитную плёнку или стекло — бережём экран, который мы только что вернули к жизни.',
    desc: 'После ремонта разумно защитить экран от повторных повреждений. Подберём и профессионально нанесём бронеплёнку или защитное стекло без пузырей и перекоса.',
    points: ['Полноклеевые плёнки и стёкла на выбор', 'Аккуратная поклейка без пузырей', 'Защита от царапин и повторных сколов'],
    icon: `<defs><linearGradient id="ig5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7b5cfa"/><stop offset="100%" stop-color="#5a3fe0"/></linearGradient></defs>
      <path d="M12 3l8 3.5v5c0 5-3.4 8.7-8 9.5-4.6-.8-8-4.5-8-9.5v-5L12 3z" fill="url(#ig5)" opacity=".18"/>
      <path d="M12 3l8 3.5v5c0 5-3.4 8.7-8 9.5-4.6-.8-8-4.5-8-9.5v-5L12 3z" stroke="url(#ig5)" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
      <path d="M9 12l2 2 4-4.5" stroke="url(#ig5)" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
}, {
    accent: 'cyan',
    title: 'Доставка запчастей',
    bg: '/assets/img/dostavka.webp',
    short: 'Нужной детали нет на складе — оперативно привезём под конкретную модель, чтобы не затягивать ремонт.',
    desc: 'Для редких или новых моделей нужной детали может не быть на складе. Организуем оперативную доставку под конкретную модель, чтобы не затягивать сроки ремонта.',
    points: ['Подбор оригинальных и качественных аналогов', 'Отслеживание сроков поставки', 'Информируем о статусе на каждом этапе'],
    icon: `<defs><linearGradient id="ig6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00d9ff"/><stop offset="100%" stop-color="#0098b3"/></linearGradient></defs>
      <rect x="1" y="7" width="14" height="9" rx="1.6" fill="url(#ig6)" opacity=".18"/>
      <rect x="1" y="7" width="14" height="9" rx="1.6" stroke="url(#ig6)" stroke-width="1.6" fill="none"/>
      <path d="M15 10h3.5l3.5 3.4V16h-7z" stroke="url(#ig6)" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
      <circle cx="6.5" cy="18.2" r="1.7" fill="url(#ig6)"/>
      <circle cx="18" cy="18.2" r="1.7" fill="url(#ig6)"/>`
}, {
    accent: 'green',
    title: 'Бесплатная диагностика',
    bg: '/assets/img/diagnostika.webp',
    short: 'Определим неисправность и назовём точную стоимость ремонта до начала работ — без скрытых доплат.',
    desc: 'Перед любым ремонтом мы точно определяем причину неисправности и называем итоговую цену. Решение о ремонте всегда остаётся за вами — платите только за то, на что согласились.',
    points: ['Полная проверка устройства без доплат', 'Понятное объяснение причины поломки', 'Фиксированная цена до начала работ'],
    icon: `<defs><linearGradient id="ig7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#39e85d"/><stop offset="100%" stop-color="#1fbf49"/></linearGradient></defs>
      <circle cx="10.5" cy="10.5" r="7" fill="url(#ig7)" opacity=".18"/>
      <circle cx="10.5" cy="10.5" r="7" stroke="url(#ig7)" stroke-width="1.6" fill="none"/>
      <path d="M20.5 20.5l-4.3-4.3" stroke="url(#ig7)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M7 11l2 2 4-4.5" stroke="url(#ig7)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
}, {
    accent: 'cyan',
    title: 'Пайка SMD и BGA',
    short: 'Пайка любого уровня сложности — от простых SMD-компонентов до BGA-чипов на материнской плате.',
    desc: 'Некоторые неисправности требуют не просто замены детали, а точной перепайки компонентов на плате. Работаем с задачами любой сложности — от рядовых SMD-элементов до тонкой BGA-пайки процессоров и контроллеров.',
    points: ['Пайка SMD-компонентов', 'BGA-реболлинг и перепайка чипов', 'Диагностика платы под микроскопом'],
    bg: '/assets/img/scheme-block.webp',
    icon: `<defs><linearGradient id="ig8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00d9ff"/><stop offset="100%" stop-color="#0098b3"/></linearGradient></defs>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="url(#ig8)" opacity=".18"/>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#ig8)" stroke-width="1.6" fill="none"/>
    <circle cx="8" cy="8" r="1.4" fill="url(#ig8)"/><circle cx="16" cy="8" r="1.4" fill="url(#ig8)"/>
    <circle cx="8" cy="16" r="1.4" fill="url(#ig8)"/><circle cx="16" cy="16" r="1.4" fill="url(#ig8)"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="url(#ig8)" stroke-width="1.4"/>`
}];
const grid = document.getElementById('servicesGrid');
services.forEach((s, i) => {
    const accentClass = s.accent === 'violet' ? 'accent' : s.accent === 'cyan' ? 'accent2' : '';
    const bg = s.accent === 'violet' ? 'linear-gradient(135deg, rgba(123,92,250,.16), rgba(123,92,250,.04))' : s.accent === 'cyan' ? 'linear-gradient(135deg, rgba(0,217,255,.16), rgba(0,217,255,.04))' : 'linear-gradient(135deg, rgba(57,232,93,.16), rgba(57,232,93,.04))';
    const card = document.createElement('div');
    card.className = `svc-card ${accentClass} reveal`;
    card.style.setProperty('--i', i);
    card.style.setProperty('--svc-bg', `url('${s.bg}')`);
    card.innerHTML = `
    <span class="svc-tag">0${i+1}</span>
    <div class="svc-icon" style="background:${bg}"><svg viewBox="0 0 24 24">${s.icon}</svg></div>
    <h3>${s.title}</h3>
    <p>${s.short}</p>
    <span class="svc-more">Подробнее <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 18l6-6-6-6"/></svg></span>
  `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card)
});
const overlay = document.getElementById('modalOverlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalList = document.getElementById('modalList');

function openModal(i) {
    const s = services[i];
    const bg = s.accent === 'violet' ? 'linear-gradient(135deg, rgba(123,92,250,.18), rgba(123,92,250,.05))' : s.accent === 'cyan' ? 'linear-gradient(135deg, rgba(0,217,255,.18), rgba(0,217,255,.05))' : 'linear-gradient(135deg, rgba(57,232,93,.18), rgba(57,232,93,.05))';
    modalIcon.style.background = bg;
    modalIcon.innerHTML = `<svg viewBox="0 0 24 24">${s.icon}</svg>`;
    modalTitle.textContent = s.title;
    modalDesc.textContent = s.desc;
    modalList.innerHTML = s.points.map(p => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg>${p}</li>`).join('');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    overlay.classList.remove('show');
    document.body.style.overflow = ''
}
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
const burger = document.getElementById('burger');
const panel = document.getElementById('mobilePanel');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    panel.classList.toggle('show')
});
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    panel.classList.remove('show')
}));
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12)
});
const healStage = document.getElementById('healStage');
const phoneSvg = document.getElementById('phoneSvg');
if (healStage && phoneSvg && window.matchMedia('(pointer:fine)').matches) {
    healStage.addEventListener('mousemove', (e) => {
        const r = healStage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        phoneSvg.style.transform = `rotateY(${x*14}deg) rotateX(${-y*14}deg) translateZ(0)`
    });
    healStage.addEventListener('mouseleave', () => {
        phoneSvg.style.transform = ''
    });
    document.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.svc-card, .step');
        if (!card) return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-8px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`
    });
    document.querySelectorAll('.svc-card, .step').forEach(el => {
        el.style.transformStyle = 'preserve-3d';
        el.addEventListener('mouseleave', () => {
            el.style.transform = ''
        })
    })
}(function() {
    const slides = document.querySelectorAll('#galStage .gal-slide');
    const dots = document.querySelectorAll('#galDots button');
    const textEl = document.getElementById('galText');
    if (!slides.length || !dots.length || !textEl) {
        console.warn('Gallery elements not found');
        return
    }
    const captions = ['<b></b>'];
    let i = 0,
        timer;

    function show(idx) {
        const strIdx = String(idx);
        slides.forEach(s => s.classList.toggle('active', s.dataset.i === strIdx));
        dots.forEach(d => d.classList.toggle('active', d.dataset.i === strIdx));
        textEl.innerHTML = captions[idx] || captions[0];
        i = idx
    }

    function next() {
        show((i + 1) % slides.length)
    }

    function restart() {
        clearInterval(timer);
        timer = setInterval(next, 3400)
    }
    dots.forEach(d => {
        d.addEventListener('click', () => {
            const idx = Number(d.dataset.i);
            if (!isNaN(idx) && idx >= 0 && idx < slides.length) {
                show(idx);
                restart()
            }
        })
    });
    show(0);
    timer = setInterval(next, 3400)
})();
(function() {
    const slider = document.getElementById('baSlider');
    const clip = document.getElementById('baClip');
    const line = document.getElementById('baLine');
    if (!slider) return;

    function setPos(pct) {
        pct = Math.max(4, Math.min(96, pct));
        clip.style.width = pct + '%';
        line.style.left = pct + '%';
        const w = slider.getBoundingClientRect().width;
        clip.querySelector('.ba-img').style.setProperty('--ba-w', w + 'px');
        clip.querySelector('.ba-img').style.width = w + 'px'
    }

    function fromEvent(e) {
        const r = slider.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
        setPos((x / r.width) * 100)
    }
    let dragging = !1;
    slider.addEventListener('mousedown', (e) => {
        dragging = !0;
        fromEvent(e)
    });
    slider.addEventListener('touchstart', (e) => {
        dragging = !0;
        fromEvent(e)
    }, {
        passive: !0
    });
    window.addEventListener('mousemove', (e) => {
        if (dragging) fromEvent(e);
    });
    window.addEventListener('touchmove', (e) => {
        if (dragging) fromEvent(e);
    }, {
        passive: !0
    });
    window.addEventListener('mouseup', () => dragging = !1);
    window.addEventListener('touchend', () => dragging = !1);
    setPos(52);
    window.addEventListener('resize', () => setPos(parseFloat(line.style.left) || 52))
})();
(function() {
    const facade = document.getElementById('mapFacade');
    const btn = document.getElementById('mapFacadeBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.className = 'ya-map';
        iframe.src = 'https://yandex.ru/map-widget/v1/?ll=93.536069%2C56.243857&z=17&l=map&pt=93.536069,56.243857,pm2rdm';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = !0;
        facade.innerHTML = '';
        facade.appendChild(iframe)
    })
})();
(function() {
    const toggle = document.getElementById('messengerToggle');
    const options = document.getElementById('messengerOptions');
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle.classList.toggle('open');
        options.classList.toggle('show')
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.messenger-fab')) {
            toggle.classList.remove('open');
            options.classList.remove('show')
        }
    })
})()