function increaseFontSize() {
    const content = document.querySelector('.chapter-content');
    const style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    content.style.fontSize = (fontSize + 2) + 'px';
}

function decreaseFontSize() {
    const content = document.querySelector('.chapter-content');
    const style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    content.style.fontSize = (fontSize - 2) + 'px';
}

function toggleBoldText() {
    const content = document.getElementById('chapterContent');
    if (content.style.fontWeight === 'bold') {
        content.style.fontWeight = 'normal';
    } else {
        content.style.fontWeight = 'bold';
    }
}

function changeTextColor() {
    const content = document.getElementById('chapterContent');
    const currentColor = content.style.color;
    const newColor = currentColor === 'black' || currentColor === '' ? 'blue' : 'black';
    content.style.color = newColor;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
