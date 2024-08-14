// زر لتكبير الخط
document.getElementById('font-increase-button').addEventListener('click', function() {
    let chapterText = document.querySelector('.chapter-text');
    let style = window.getComputedStyle(chapterText, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    if (currentSize < 22) {
        chapterText.style.fontSize = (currentSize + 2) + 'px';
    }
});

// زر لتصغير الخط
document.getElementById('font-decrease-button').addEventListener('click', function() {
    let chapterText = document.querySelector('.chapter-text');
    let style = window.getComputedStyle(chapterText, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    if (currentSize > 12) {
        chapterText.style.fontSize = (currentSize - 2) + 'px';
    }
});

// زر لتسميك الخط
document.getElementById('bold-button').addEventListener('click', function() {
    let chapterText = document.querySelector('.chapter-text');
    if (chapterText.style.fontWeight === 'bold') {
        chapterText.style.fontWeight = 'normal';
    } else {
        chapterText.style.fontWeight = 'bold';
    }
});

// زر للتبديل بين الوضع الليلي والنهاري
document.getElementById('theme-toggle-button').addEventListener('click', function() {
    let body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.style.backgroundColor = "#ffffff"; // لون الخلفية للوضع النهاري
        body.style.color = "#000000"; // لون النص للوضع النهاري
    } else {
        body.classList.add('dark-theme');
        body.style.backgroundColor = "#333333"; // لون الخلفية للوضع الليلي
        body.style.color = "#ffffff"; // لون النص للوضع الليلي
    }
});

// تفعيل ألوان النص
document.querySelectorAll('.footer-colors button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.chapter-text').style.color = button.style.backgroundColor;
    });
});
