// ==================== ДАННЫЕ МЕРОПРИЯТИЙ ====================
const eventsData = [
    { 
        id:1, 
        title:"Муниципальный этап Всероссийской командной инженерной олимпиады по 3D-технологиям", 
        date:"Декабрь 2025", 
        category:"engineering", 
        short:"3D-моделирование, прототипирование, командная работа", 
        fullDesc:"Соревнование по 3D-моделированию и инженерному творчеству. Участники решают реальные кейсы: проектируют детали, создают 3D-модели в программах Blender, Компас-3D, работают с 3D-принтерами. Команды из 2–4 человек. Победители получают дипломы и ценные призы.", 
        location:"Технополис, Сургут", 
        age:"12–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/3d-olympiad", 
        image:"2.png", 
        timeline:`<div><strong>Декабрь:</strong> отборочный этап (решение кейсов), финал – защита проектов перед жюри.</div>`, 
        extra:`<div>🏆 Призы: 3D-принтер, ноутбуки, сертификаты.</div><div>👥 Команды до 4 человек.</div><div>📞 Контакт: +7 (3462) 29-99-99 (доб. 123)</div>`, 
        dateSort:"2025-12-01" 
    },
    { 
        id:2, 
        title:"Региональный отборочный этап олимпиады «Инженеры будущего: 3D-технологии»", 
        date:"Февраль 2026", 
        category:"engineering", 
        short:"Региональный уровень 3D-олимпиады", 
        fullDesc:"Участвуют победители муниципального этапа. Работа в среде 3D-моделирования (Autodesk Inventor, Fusion 360). Соревнование включает индивидуальное и командное первенство. Победители представляют регион на всероссийском этапе.", 
        location:"Технополис", 
        age:"12–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/engineers-future", 
        image:"3.jpg", 
        timeline:`<div>Февраль: регистрация до 10 февраля, отборочный тур – 15 февраля, финал – 20 февраля.</div>`, 
        extra:`<div>🌟 Приглашаются только победители муниципального этапа.</div><div>📌 Обязательная предварительная регистрация.</div>`, 
        dateSort:"2026-02-01" 
    },
    { 
        id:3, 
        title:"Муниципальный этап конкурса «Молодой изобретатель»", 
        date:"Сентябрь 2026", 
        category:"engineering", 
        short:"Представь своё изобретение", 
        fullDesc:"Конкурс инженерных идей и прототипов. Возраст 7–17 лет. Номинации: «Промышленный дизайн», «Энергосберегающие технологии», «Робототехника», «IT-проекты». Лучшие проекты получают поддержку для патентования.", 
        location:"Сургут, Кванториум", 
        age:"7–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/young-inventor", 
        image:"4.png", 
        timeline:`<div>Сентябрь: приём заявок до 10 сентября, защита проектов – 25 сентября.</div>`, 
        extra:`<div>🎁 Гранты на развитие изобретения.</div><div>👥 Участие индивидуальное или в паре.</div>`, 
        dateSort:"2026-09-01" 
    },
    { 
        id:4, 
        title:"Открытые соревнования по радиоуправляемым моделям", 
        date:"Сентябрь 2026", 
        category:"competition", 
        short:"Управление дронами и радиоуправляемыми моделями", 
        fullDesc:"Соревнования по пилотированию квадрокоптеров, гонки радиоуправляемых автомобилей, авиамодели. Участники проходят трассу на время, выполняют фигуры высшего пилотажа. Возрастные группы: 10–13 лет и 14–17 лет.", 
        location:"Технополис, стадион", 
        age:"10–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/rc-models", 
        image:"5.jpg",
        timeline:`<div>Сентябрь: регистрация до 15 сентября, квалификация – 20 сентября, финал – 25 сентября.</div>`, 
        extra:`<div>🏆 Призы: профессиональные квадрокоптеры, наборы для моделирования.</div><div>📋 Требуется своя техника или можно взять напрокат на месте.</div>`, 
        dateSort:"2026-09-15" 
    },
    { 
        id:5, 
        title:"«Наноград-Сургут»", 
        date:"Осенние каникулы 2026", 
        category:"engineering", 
        short:"Каникулярная школа нанотехнологий", 
        fullDesc:"Погружение в высокие технологии: лекции ведущих учёных, работа над реальными проектами в области наноматериалов, биотехнологий, 3D-моделирования. Программа длится 5 дней, проживание и питание бесплатно для участников.", 
        location:"Технополис", 
        age:"8–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/nanograd", 
        image:"6.jpg", 
        timeline:`<div>Осенние каникулы (5 дней): с 28 октября по 1 ноября.</div>`, 
        extra:`<div>🎓 Сертификат участника.</div><div>🏠 Проживание и питание предоставляются.</div><div>📝 Конкурсный отбор по портфолио.</div>`, 
        dateSort:"2026-10-28" 
    },
    { 
        id:6, 
        title:"Неделя высоких технологий и технопредпринимательства", 
        date:"Март 2026", 
        category:"it", 
        short:"Мастер-классы, лекции, хакатон", 
        fullDesc:"Серия мероприятий с участием IT-компаний: стартап-челлендж, лекции по искусственному интеллекту, мастер-классы по разработке приложений. Завершается хакатоном, где команды создают прототипы за 24 часа.", 
        location:"Технополис", 
        age:"12–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/hightech-week", 
        image:"7.jpg", 
        timeline:`<div>Март: 16–22 марта – лекции, 23–24 марта – хакатон.</div>`, 
        extra:`<div>💰 Призовой фонд хакатона – 100 000 рублей.</div><div>📢 Открытая регистрация для всех желающих.</div>`, 
        dateSort:"2026-03-16" 
    },
    { 
        id:7, 
        title:"Чемпионат «Профессионалы» (категория «Юниоры»)", 
        date:"Октябрь 2026", 
        category:"it", 
        short:"Конкурс профессионального мастерства", 
        fullDesc:"Соревнования по IT-компетенциям: веб-дизайн, системное администрирование, разработка мобильных приложений. Участники выполняют реальные задания от работодателей. Победители получают дополнительные баллы к ЕГЭ и стажировки в IT-компаниях.", 
        location:"Сургут", 
        age:"14–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/professionals", 
        image:"8.jpg", 
        timeline:`<div>Октябрь: отборочные этапы – 1–15 октября, финал – 20–25 октября.</div>`, 
        extra:`<div>🎓 Дополнительные баллы к ЕГЭ для призёров.</div><div>📄 Сертификаты участников.</div>`, 
        dateSort:"2026-10-01" 
    },
    { 
        id:8, 
        title:"Муниципальный этап соревнований по робототехнике", 
        date:"Февраль 2026", 
        category:"robotics", 
        short:"LEGO, Arduino, автономные роботы", 
        fullDesc:"Соревнования по робототехнике в категориях: LEGO-сумо, лабиринт, творческая категория (робот, решающий социальную задачу). Участники программируют автономных роботов. Возрастные группы: 8–11 лет, 12–14 лет, 15–17 лет.", 
        location:"IT-Куб", 
        age:"8–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/robotics", 
        image:"9.jpg", 
        timeline:`<div>Февраль: регистрация до 1 февраля, соревнования – 15–16 февраля.</div>`, 
        extra:`<div>🤖 Наборы LEGO и Arduino предоставляются.</div><div>🏆 Призы: конструкторы, электронные компоненты.</div>`, 
        dateSort:"2026-02-01" 
    },
    { 
        id:9, 
        title:"Соревнования по моделям метательных планеров «ТехноАвиа»", 
        date:"Февраль 2026", 
        category:"competition", 
        short:"Авиамоделирование, дальность полёта", 
        fullDesc:"Соревнования по запуску планеров собственной конструкции. Участники проектируют и изготавливают модель из пенопласта, бальзы и композитных материалов. Побеждает модель, продержавшаяся в воздухе дольше всех или преодолевшая наибольшее расстояние.", 
        location:"Технополис, стадион", 
        age:"10–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/avia", 
        image:"10.jpg", 
        timeline:`<div>Февраль: регистрация до 10 февраля, соревнования – 20 февраля.</div>`, 
        extra:`<div>✈️ Материалы для изготовления планеров предоставляются.</div><div>📏 Номинации: «Дальность полёта», «Длительность полёта».</div>`, 
        dateSort:"2026-02-10" 
    },
    { 
        id:10, 
        title:"Турнир по квантошахматам", 
        date:"Декабрь 2025", 
        category:"it", 
        short:"Шахматы + программирование", 
        fullDesc:"Нестандартные шахматы с использованием цифровых технологий: участники могут использовать ИИ-подсказки, программировать стратегии. Соревнование проходит на специальной платформе. Победители получают призы от партнёров – IT-компаний.", 
        location:"Технополис", 
        age:"12–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/quantumchess", 
        image:"11.jpg", 
        timeline:`<div>Декабрь: отборочные туры – 5–10 декабря, финал – 15 декабря.</div>`, 
        extra:`<div>♟️ Участие бесплатное.</div><div>💻 Ноутбуки предоставляются организаторами.</div>`, 
        dateSort:"2025-12-05" 
    },
    { 
        id:11, 
        title:"IT-хакатон", 
        date:"Апрель 2026", 
        category:"it", 
        short:"Разработка приложений, игр, чат-ботов", 
        fullDesc:"48-часовой хакатон по созданию IT-продуктов. Поддержка менторов из IT-компаний. Направления: веб-разработка, мобильные приложения, GameDev, искусственный интеллект. Лучшие проекты получают денежные призы и возможность доработки с наставниками.", 
        location:"Технополис", 
        age:"12–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/ithack", 
        image:"12.jpg", 
        timeline:`<div>Апрель: 10–12 апреля – регистрация, старт 10 апреля в 10:00, защита 12 апреля в 14:00.</div>`, 
        extra:`<div>💰 Призовой фонд: 150 000 рублей.</div><div>🍕 Питание и кофе-брейки включены.</div>`, 
        dateSort:"2026-04-10" 
    },
    { 
        id:12, 
        title:"Открытый образовательный Хакатон «Про100Дизайн»", 
        date:"Март 2026", 
        category:"media", 
        short:"Дизайн-проекты по реальным кейсам", 
        fullDesc:"Промышленный, графический, веб-дизайн. Работа в командах над реальными задачами от городских предприятий. Участники создают макеты, прототипы, презентуют их жюри. Лучшие проекты получают призы и рекомендации для портфолио.", 
        location:"Кванториум", 
        age:"12–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/pro100design", 
        image:"14.png", 
        timeline:`<div>Март: 20–21 марта – 2 дня интенсивной работы.</div>`, 
        extra:`<div>🎨 Наставники – профессиональные дизайнеры.</div><div>📌 Необходима предварительная регистрация.</div>`, 
        dateSort:"2026-03-20" 
    },
    { 
        id:13, 
        title:"Медиа-хакатон", 
        date:"Май 2026", 
        category:"media", 
        short:"Журналистика, видео, реклама, анимация", 
        fullDesc:"Создание медиаконтента: репортажи, видеоролики, анимационные заставки. Команды из 2 человек соревнуются в 4 номинациях: журналистика, видео, реклама, анимация. Победители получают стажировки в городских СМИ.", 
        location:"Технополис", 
        age:"13–17 лет", 
        type:"Очный", 
        link:"https://technopolis-surgut.ru/mediahack", 
        image:"13.jpg", 
        timeline:`<div>Май: 15–16 мая – регистрация, 17 мая – защита проектов.</div>`, 
        extra:`<div>📹 Видеооборудование предоставляется.</div><div>🏆 Призы: профессиональные камеры, программное обеспечение.</div>`, 
        dateSort:"2026-05-15" 
    }
];

let currentCategory = 'all';

// ==================== ФУНКЦИИ ФИЛЬТРАЦИИ ====================
function getEventSeason(dateStr) {
    const month = parseInt(dateStr.split('-')[1]);
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
}

function filterByDate(events, dateFilter) {
    if (dateFilter === 'all') return events;
    if (dateFilter === 'upcoming') {
        const now = new Date();
        return events.filter(e => new Date(e.dateSort) >= now);
    }
    return events.filter(e => getEventSeason(e.dateSort) === dateFilter);
}

function sortEvents(events, sortType) {
    const sorted = [...events];
    if (sortType === 'date-asc') return sorted.sort((a,b) => new Date(a.dateSort) - new Date(b.dateSort));
    if (sortType === 'date-desc') return sorted.sort((a,b) => new Date(b.dateSort) - new Date(a.dateSort));
    if (sortType === 'name-asc') return sorted.sort((a,b) => a.title.localeCompare(b.title));
    return sorted;
}

function renderEvents(filtered) {
    const grid = document.getElementById('events-grid');
    const countSpan = document.getElementById('events-count');
    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400 text-lg">😔 Ничего не найдено, попробуй другой фильтр</div>`;
        if (countSpan) countSpan.textContent = '0 мероприятий';
        return;
    }
    if (countSpan) countSpan.textContent = `${filtered.length} мероприятий`;

    grid.innerHTML = filtered.map(e => {
        const catLabel = {
            engineering: '⚙️ Инженерия & 3D',
            it: '💻 IT & Хакатоны',
            robotics: '🤖 Робототехника',
            media: '🎬 Медиа & Дизайн',
            competition: '🏆 Соревнования'
        }[e.category] || 'Мероприятие';
        return `<div onclick="showModal(${e.id})" class="event-card group">
            <img src="${e.image}" alt="${e.title}" loading="lazy">
            <div class="p-5">
                <div class="flex justify-between items-start mb-3">
                    <span class="text-xs font-semibold px-3 py-1 bg-gray-100 rounded-full">${catLabel}</span>
                    <span class="text-xs text-gray-400">${e.date}</span>
                </div>
                <h3 class="font-bold text-xl group-hover:text-[#00d4ff] transition-colors line-clamp-2">${e.title}</h3>
                <p class="text-gray-500 text-sm mt-2 line-clamp-2">${e.short}</p>
                <div class="mt-5 flex justify-between items-center">
                    <span class="text-xs text-gray-500">👥 ${e.age}</span>
                    <span class="text-[#00d4ff] font-medium text-sm flex items-center gap-1">Подробнее →</span>
                </div>
            </div>
        </div>`;
    }).join('');
    setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 20);
}

function filterEvents() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const dateFilter = document.getElementById('date-filter')?.value || 'all';
    const sortType = document.getElementById('sort-filter')?.value || 'default';

    let filtered = eventsData;
    if (currentCategory !== 'all') {
        filtered = filtered.filter(e => e.category === currentCategory);
    }
    filtered = filterByDate(filtered, dateFilter);
    if (searchTerm) {
        filtered = filtered.filter(e => e.title.toLowerCase().includes(searchTerm) || e.short.toLowerCase().includes(searchTerm));
    }
    filtered = sortEvents(filtered, sortType);
    renderEvents(filtered);
}

function filterByCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-chip').forEach(el => el.classList.remove('active'));
    const activeBtn = document.getElementById(`filter-${cat}`);
    if (activeBtn) activeBtn.classList.add('active');
    filterEvents();
}

// ==================== МОДАЛЬНОЕ ОКНО ====================
function showModal(id) {
    const event = eventsData.find(e => e.id === id);
    if (!event) return;
    document.getElementById('modal-title').innerText = event.title;
    document.getElementById('modal-date').innerHTML = `<i data-lucide="calendar" class="w-4 h-4"></i> ${event.date} • ${event.location} • ${event.type}`;
    document.getElementById('modal-desc').innerText = event.fullDesc;
    const catNames = { engineering:'⚙️ Инженерия & 3D', it:'💻 IT & Хакатоны', robotics:'🤖 Робототехника', media:'🎬 Медиа & Дизайн', competition:'🏆 Соревнования' };
    document.getElementById('modal-category').innerHTML = `<span class="px-4 py-1.5 bg-[#00d4ff]/20 text-[#00d4ff] rounded-full text-sm font-bold">${catNames[event.category] || 'Мероприятие'}</span>`;
    document.getElementById('modal-timeline').innerHTML = event.timeline || '<p class="text-gray-500">Информация скоро появится</p>';
    document.getElementById('modal-extra').innerHTML = event.extra || '<div class="col-span-2 text-gray-500">Подробности при регистрации</div>';
    const btn = document.getElementById('modal-register-btn');
    if (btn) btn.href = event.link || '#';
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// ==================== НОВАЯ ВИКТОРИНА ПО ПРОГРАММИРОВАНИЮ ====================
const quizData = [
    {
        question: "Что означает аббревиатура HTML?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
        correct: 0,
        fact: "HTML был создан Тимом Бернерсом-Ли в 1991 году. Первая версия HTML имела всего 18 тегов!"
    },
    {
        question: "Какой язык программирования используется для стилизации веб-страниц?",
        options: ["JavaScript", "Python", "CSS", "PHP"],
        correct: 2,
        fact: "CSS появился в 1996 году и позволил разделить содержимое и оформление веб-страниц."
    },
    {
        question: "Что такое JavaScript?",
        options: ["Язык разметки", "Язык программирования для веб-интерактивности", "База данных", "Стилевой язык"],
        correct: 1,
        fact: "JavaScript был создан за 10 дней в 1995 году Бренданом Эйхом. Изначально он назывался Mocha, затем LiveScript, и только потом JavaScript."
    },
    {
        question: "Какая структура данных использует принцип 'последним пришёл — первым вышел' (LIFO)?",
        options: ["Очередь", "Стек", "Список", "Массив"],
        correct: 1,
        fact: "Стек широко используется в управлении вызовами функций и отмене действий (Ctrl+Z)."
    },
    {
        question: "Что такое API?",
        options: ["Application Program Interface", "Advanced Programming Integration", "Automated Process Instruction", "Application Protocol Interface"],
        correct: 0,
        fact: "API позволяет разным программам обмениваться данными. Например, когда вы смотрите погоду в приложении, оно использует API метеосервиса."
    },
    {
        question: "Какой алгоритм используется для поиска элемента в отсортированном массиве?",
        options: ["Линейный поиск", "Бинарный поиск", "Поиск в глубину", "Алгоритм Дейкстры"],
        correct: 1,
        fact: "Бинарный поиск работает за O(log n) – это намного быстрее линейного поиска для больших массивов."
    },
    {
        question: "Что такое Git?",
        options: ["Язык программирования", "Система контроля версий", "База данных", "Операционная система"],
        correct: 1,
        fact: "Git был создан Линусом Торвальдсом в 2005 году для разработки ядра Linux. Сегодня это самый популярный инструмент для управления кодом."
    },
    {
        question: "Какая из этих технологий используется для создания адаптивных веб-сайтов?",
        options: ["Flexbox", "Grid", "Медиазапросы", "Все перечисленные"],
        correct: 3,
        fact: "Flexbox и Grid помогают строить гибкие макеты, а медиазапросы позволяют менять стили в зависимости от размера экрана."
    }
];

let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (currentQuizIndex >= quizData.length) {
        document.getElementById('quiz-question').innerHTML = `🎉 Викторина завершена! Ваш результат: ${quizScore} из ${quizData.length} 🎉`;
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('quiz-next').classList.add('hidden');
        document.getElementById('quiz-result').innerHTML = quizScore === quizData.length ? 'Отлично! Вы настоящий знаток программирования!' : 'Попробуйте пройти викторину ещё раз, чтобы узнать больше.';
        return;
    }

    const q = quizData[currentQuizIndex];
    document.getElementById('quiz-question').innerHTML = q.question;
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    quizAnswered = false;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'w-full text-left p-3 rounded-xl border hover:border-[#00d4ff] hover:bg-cyan-50 transition';
        btn.onclick = () => {
            if (quizAnswered) return;
            quizAnswered = true;
            const isCorrect = (idx === q.correct);
            if (isCorrect) {
                quizScore++;
                btn.classList.add('bg-green-100', 'border-green-500');
                document.getElementById('quiz-result').innerHTML = `<div class="mt-2 p-3 bg-green-50 text-green-700 rounded-lg">✅ Верно! ${q.fact}</div>`;
            } else {
                btn.classList.add('bg-red-100', 'border-red-500');
                const correctAnswer = q.options[q.correct];
                document.getElementById('quiz-result').innerHTML = `<div class="mt-2 p-3 bg-red-50 text-red-700 rounded-lg">❌ Неверно. Правильный ответ: ${correctAnswer}<br>📘 Интересный факт: ${q.fact}</div>`;
            }
            const allBtns = optionsDiv.querySelectorAll('button');
            allBtns.forEach(btn => btn.disabled = true);
            document.getElementById('quiz-next').classList.remove('hidden');
        };
        optionsDiv.appendChild(btn);
    });
    document.getElementById('quiz-next').classList.add('hidden');
    document.getElementById('quiz-result').innerHTML = '';
}

function nextQuestion() {
    if (currentQuizIndex < quizData.length - 1) {
        currentQuizIndex++;
        loadQuiz();
    } else {
        currentQuizIndex++;
        loadQuiz();
    }
}

function initQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    loadQuiz();
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', nextQuestion);
    }
}

// ==================== НАВИГАЦИЯ И АНИМАЦИИ ====================
function smoothScrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu || !icon) return;
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        icon.setAttribute('data-lucide', 'menu');
    }
    setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 10);
}

function revealSections() {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) section.classList.add('visible');
    });
    document.querySelectorAll('.fade-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('revealed');
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
function init() {
    renderEvents(eventsData);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setTimeout(revealSections, 100);
    window.addEventListener('scroll', () => { revealSections(); handleNavbarScroll(); });
    
    if (!document.getElementById('search-input')) {
        const filterContainer = document.querySelector('.filter-chip')?.parentElement;
        if (filterContainer) {
            const searchInput = document.createElement('input');
            searchInput.id = 'search-input';
            searchInput.type = 'text';
            searchInput.placeholder = '🔍 Поиск мероприятия...';
            searchInput.className = 'search-input px-5 py-2.5 bg-white border rounded-full text-sm w-full md:w-64 focus:border-[#00d4ff] transition-all';
            searchInput.oninput = filterEvents;
            filterContainer.appendChild(searchInput);
        }
    }
    
    initQuiz(); // запускаем новую викторину
    console.log('%c✅ Технополис | Мероприятия загружены', 'color:#00d4ff; font-size:14px');
}

window.addEventListener('load', init);