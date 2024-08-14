// التحكم في حجم الخط
let currentFontSize = 16;

document.getElementById('font-increase-button').addEventListener('click', function() {
    if (currentFontSize < 22) {
        currentFontSize++;
        document.querySelector('.chapter-text').style.fontSize = currentFontSize + 'px';
    }
});

document.getElementById('font-decrease-button').addEventListener('click', function() {
    if (currentFontSize > 12) {
        currentFontSize--;
        document.querySelector('.chapter-text').style.fontSize = currentFontSize + 'px';
    }
});

// الوضع الليلي والنهاري
let isNightMode = false;
document.getElementById('theme-toggle-button').addEventListener('click', function() {
    if (isNightMode) {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('.chapter-text').style.color = '#000';
        isNightMode = false;
    } else {
        document.body.style.backgroundColor = '#333';
        document.querySelector('.chapter-text').style.color = '#fff';
        isNightMode = true;
    }
});

// تسميك الخط
document.getElementById('bold-button').addEventListener('click', function() {
    const chapterText = document.querySelector('.chapter-text');
    chapterText.style.fontWeight = chapterText.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// تغيير اللون
const colorButtons = document.querySelectorAll('.footer-colors button');
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.chapter-text').style.color = this.style.backgroundColor;
    });
});
