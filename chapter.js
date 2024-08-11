document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('chapterContent');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const boldTextBtn = document.getElementById('bold-text');
    const colorTextBtn = document.getElementById('color-text');
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    const searchTextBtn = document.getElementById('search-text');
    const lineSpacingBtn = document.getElementById('line-spacing');
    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
    let isBold = localStorage.getItem('isBold') === 'true';
    let currentLineSpacing = parseFloat(localStorage.getItem('lineSpacing')) || 1.5;
    const maxFontSize = 28;
    const minFontSize = 14;
    const colors = ['#000', '#f00', '#0f0', '#00f', '#fff'];
    let currentColorIndex = parseInt(localStorage.getItem('colorIndex')) || 0;
    let searchKeyword = localStorage.getItem('searchKeyword') || '';

    content.style.fontSize = `${currentFontSize}px`;
    content.style.fontWeight = isBold ? 'bold' : 'normal';
    content.style.color = colors[currentColorIndex];
    content.style.lineHeight = `${currentLineSpacing}`;

    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < maxFontSize) {
            currentFontSize += 2;
            content.style.fontSize = `${currentFontSize}px`;
            localStorage.setItem('fontSize', currentFontSize);
        }
    });

    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > minFontSize) {
            currentFontSize -= 2;
            content.style.fontSize = `${currentFontSize}px`;
            localStorage.setItem('fontSize', currentFontSize);
        }
    });

    boldTextBtn.addEventListener('click', () => {
        isBold = !isBold;
        content.style.fontWeight = isBold ? 'bold' : 'normal';
        localStorage.setItem('isBold', isBold);
    });

    colorTextBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        content.style.color = colors[currentColorIndex];
        localStorage.setItem('colorIndex', currentColorIndex);
    });

    lineSpacingBtn.addEventListener('click', () => {
        currentLineSpacing = currentLineSpacing + 0.1;
        if (currentLineSpacing > 2) currentLineSpacing = 1.5; // الحد الأقصى للتباعد بين الأسطر
        content.style.lineHeight = `${currentLineSpacing}`;
        localStorage.setItem('lineSpacing', currentLineSpacing);
    });

    searchTextBtn.addEventListener('click', () => {
        const keyword = prompt('ابحث عن كلمة:');
        if (keyword) {
            searchKeyword = keyword;
            localStorage.setItem('searchKeyword', searchKeyword);
            const regex = new RegExp(searchKeyword, 'gi');
            content.innerHTML = content.textContent.replace(regex, (match) => `<mark>${match}</mark>`);
        }
    });

    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // إذا كان هناك كلمة محفوظة في التخزين المحلي، ابحث عنها عند تحميل الصفحة
    if (searchKeyword) {
        const regex = new RegExp(searchKeyword, 'gi');
        content.innerHTML = content.textContent.replace(regex, (match) => `<mark>${match}</mark>`);
    }
});
