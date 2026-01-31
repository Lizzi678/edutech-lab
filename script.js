// Инициализация анимаций AOS
AOS.init({ duration: 1000, once: true });

// Подсветка активной страницы и логика меню
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === "" && link.getAttribute('href') === "01_index.html")) {
            link.classList.add('text-[#38bdf8]', 'border-b-2', 'border-[#38bdf8]');
        }
    });
});

// Красивое появление советов вместо alert()
function showAdvice(tool) {
    const modal = document.getElementById('advice-modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');

    const data = {
        google: { t: "Google Forms", c: "Лайфхак: используйте режим теста и автопроверку, чтобы мгновенно видеть пробелы в знаниях учеников." },
        learning: { t: "LearningApps", c: "Совет: создавайте коллекции упражнений. Это позволяет структурировать материал по темам четверти." },
        wordwall: { t: "Wordwall", c: "Лайфхак: используйте режим 'Случайное колесо' для анонимного выбора отвечающего — это снижает стресс." }
    };

    if (modal && data[tool]) {
        title.innerText = data[tool].t;
        text.innerText = data[tool].c;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal() {
    const modal = document.getElementById('advice-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}