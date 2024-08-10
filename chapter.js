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
