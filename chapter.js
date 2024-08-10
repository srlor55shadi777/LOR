document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('chapterContent');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const boldTextBtn = document.getElementById('bold-text');
    const colorTextBtn = document.getElementById('color-text');
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    let currentFontSize = 16;
    let isBold = false;
    const maxFontSize = 28;
    const minFontSize = 14;
    const colors = ['#000', '#f00', '#0f0', '#00f', '#fff'];
    let currentColorIndex = 0;

    // تكبير الخط
    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < maxFontSize) {
            currentFontSize += 2;
            content.style.fontSize = `${currentFontSize}px`;
        }
    });

    // تصغير الخط
    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > minFontSize) {
            currentFontSize -= 2;
            content.style.fontSize = `${currentFontSize}px`;
        }
    });

    // تعديل النص ليصبح عريضًا أو طبيعيًا
    boldTextBtn.addEventListener('click', () => {
        isBold = !isBold;
        content.style.fontWeight = isBold ? 'bold' : 'normal';
    });

    // تغيير لون النص
    colorTextBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        content.style.color = colors[currentColorIndex];
    });

    // تفعيل أو إلغاء الوضع الليلي
    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // ترتيب الأزرار في الأسفل مع وضع التأثيرات المطلوبة
    const navigationBtns = document.querySelectorAll('.navigation-buttons button');
    navigationBtns.forEach(button => {
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.cursor = 'pointer';
        button.style.transition = 'all 0.3s ease';

        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // زر جديد للتنقل بين الفصول
    const navigateChaptersBtn = document.createElement('button');
    navigateChaptersBtn.textContent = 'التنقل بين الفصول';
    navigateChaptersBtn.style.position = 'fixed';
    navigateChaptersBtn.style.bottom = '70px';
    navigateChaptersBtn.style.right = '20px';
    navigateChaptersBtn.style.padding = '10px 20px';
    navigateChaptersBtn.style.fontSize = '16px';
    navigateChaptersBtn.style.cursor = 'pointer';
    document.body.appendChild(navigateChaptersBtn);

    navigateChaptersBtn.addEventListener('click', () => {
        window.location.href = 'index.html'; // نقل المستخدم إلى الصفحة الرئيسية لاختيار فصل آخر
    });
});
