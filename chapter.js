document.addEventListener('DOMContentLoaded', function () {
    const decreaseFontButton = document.getElementById('decrease-font');
    const increaseFontButton = document.getElementById('increase-font');
    const boldTextButton = document.getElementById('bold-text');
    const colorTextButton = document.getElementById('color-text');
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const chapterContent = document.getElementById('chapterContent');
    let currentFontSize = 18;

    decreaseFontButton.addEventListener('click', function () {
        if (currentFontSize > 14) {
            currentFontSize -= 2;
            chapterContent.style.fontSize = currentFontSize + 'px';
        }
    });

    increaseFontButton.addEventListener('click', function () {
        if (currentFontSize < 28) {
            currentFontSize += 2;
            chapterContent.style.fontSize = currentFontSize + 'px';
        }
    });

    boldTextButton.addEventListener('click', function () {
        if (chapterContent.style.fontWeight === 'bold') {
            chapterContent.style.fontWeight = 'normal';
        } else {
            chapterContent.style.fontWeight = 'bold';
        }
    });

    colorTextButton.addEventListener('click', function () {
        const colors = ['#000', '#007bff', '#ff0000', '#00ff00', '#ffff00'];
        const currentColor = chapterContent.style.color;
        const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
        chapterContent.style.color = nextColor;
    });

    toggleDarkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
