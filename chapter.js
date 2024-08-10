document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prev-btn').addEventListener('click', () => {
        window.location.href = 'chapter2.html';
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    document.querySelector('.fa-search-plus').addEventListener('click', increaseFontSize);
    document.querySelector('.fa-search-minus').addEventListener('click', decreaseFontSize);
    document.querySelector('.fa-bold').addEventListener('click', toggleBoldText);
    document.querySelector('.fa-palette').addEventListener('click', changeTextColor);
    document.querySelector('.fa-moon').addEventListener('click', toggleDarkMode);
});

function increaseFontSize() {
    const content = document.querySelector('.chapter-content');
    const style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);

    if (fontSize < 32) { // الحد الأقصى لحجم الخط
        content.style.fontSize = (fontSize + 2) + 'px';
    }
}

function decreaseFontSize() {
    const content = document.querySelector('.chapter-content');
    const style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);

    if (fontSize > 12) { // الحد الأدنى لحجم الخط
        content.style.fontSize = (fontSize - 2) + 'px';
    }
}

function toggleBoldText() {
    const content = document.getElementById('chapterContent');
    content.style.fontWeight = content.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function changeTextColor() {
    const content = document.getElementById('chapterContent');
    const currentColor = window.getComputedStyle(content).color;
    const newColor = currentColor === 'rgb(0, 0, 0)' ? 'blue' : 'black';
    content.style.color = newColor;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
