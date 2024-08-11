document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('chapterContent');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const boldTextBtn = document.getElementById('bold-text');
    const colorTextBtn = document.getElementById('color-text');
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const closeSearchModal = document.querySelector('.modal .close');
    const audio = document.getElementById('audio');

    let currentFontSize = 16;
    let isBold = false;
    const maxFontSize = 28;
    const minFontSize = 14;
    const colors = ['#000', '#f00', '#0f0', '#00f', '#fff'];
    let currentColorIndex = 0;

    // زيادة حجم الخط
    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < maxFontSize) {
            currentFontSize += 2;
            content.style.fontSize = `${currentFontSize}px`;
        }
    });

    // تقليل حجم الخط
    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > minFontSize) {
            currentFontSize -= 2;
            content.style.fontSize = `${currentFontSize}px`;
        }
    });

    // تغيير سمك الخط
    boldTextBtn.addEventListener('click', () => {
        isBold = !isBold;
        content.style.fontWeight = isBold ? 'bold' : 'normal';
    });

    // تغيير لون النص
    colorTextBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        content.style.color = colors[currentColorIndex];
    });

    // تفعيل/إلغاء الوضع الليلي
    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // فتح نافذة البحث
    searchBtn.addEventListener('click', () => {
        searchModal.style.display = 'flex';
        searchInput.focus();
    });

    // إغلاق نافذة البحث
    closeSearchModal.addEventListener('click', () => {
        searchModal.style.display = 'none';
    });

    // البحث عن الكلمات
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const text = content.innerHTML;
        const highlightedText = text.replace(new RegExp(searchTerm, 'gi'), match => `<mark>${match}</mark>`);
        content.innerHTML = highlightedText;
    });

    // إضافة تمييز للعودة لاحقاً
    content.addEventListener('click', () => {
        localStorage.setItem('lastReadChapter', window.location.href);
    });

    // التحقق من وجود فاصل زمني للعودة
    window.addEventListener('load', () => {
        const lastReadChapter = localStorage.getItem('lastReadChapter');
        if (lastReadChapter && lastReadChapter !== window.location.href) {
            const lastReadButton = document.createElement('a');
            lastReadButton.href = lastReadChapter;
            lastReadButton.innerText = 'العودة إلى الفصل السابق';
            lastReadButton.style.position = 'fixed';
            lastReadButton.style.bottom = '10px';
            lastReadButton.style.right = '10px';
            lastReadButton.style.padding = '10px';
            lastReadButton.style.backgroundColor = '#007bff';
            lastReadButton.style.color = '#fff';
            lastReadButton.style.textDecoration = 'none';
            lastReadButton.style.borderRadius = '5px';
            document.body.appendChild(lastReadButton);
        }
    });

    // ضبط لون وحجم الخط من التخزين المحلي
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        content.style.fontSize = `${currentFontSize}px`;
    }

    const savedFontWeight = localStorage.getItem('fontWeight');
    if (savedFontWeight) {
        content.style.fontWeight = savedFontWeight;
        isBold = savedFontWeight === 'bold';
    }

    const savedColor = localStorage.getItem('fontColor');
    if (savedColor) {
        content.style.color = savedColor;
        currentColorIndex = colors.indexOf(savedColor);
    }

    // حفظ التغييرات في التخزين المحلي
    content.addEventListener('input', () => {
        localStorage.setItem('fontSize', currentFontSize);
        localStorage.setItem('fontWeight', content.style.fontWeight);
        localStorage.setItem('fontColor', content.style.color);
    });
});
