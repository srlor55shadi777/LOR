// JavaScript لإدارة البحث، وتغيير الألوان، والتحكم بحجم النص
document.addEventListener("DOMContentLoaded", function() {

    // تفعيل وإلغاء نافذة البحث
    const searchBtn = document.getElementById("search-btn");
    const searchModal = document.getElementById("search-modal");
    const closeSearchModal = document.getElementById("close-search-modal");

    searchBtn.addEventListener("click", () => {
        searchModal.style.display = "flex";
    });

    closeSearchModal.addEventListener("click", () => {
        searchModal.style.display = "none";
    });

    // تفعيل وإلغاء نافذة اختيار الألوان
    const colorBtn = document.getElementById("color-btn");
    const colorModal = document.getElementById("color-modal");
    const closeColorModal = document.getElementById("close-color-modal");

    colorBtn.addEventListener("click", () => {
        colorModal.style.display = "flex";
    });

    closeColorModal.addEventListener("click", () => {
        colorModal.style.display = "none";
    });

    // تغيير الألوان عند النقر على خيارات الألوان
    const colorOptions = document.querySelectorAll(".color-option");
    colorOptions.forEach(option => {
        option.addEventListener("click", () => {
            document.body.style.backgroundColor = option.dataset.color;
        });
    });

    // تفعيل الوضع الليلي
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode-btn");
    toggleDarkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // زيادة حجم النص
    const fontSizeIncreaseBtn = document.getElementById("font-size-increase-btn");
    fontSizeIncreaseBtn.addEventListener("click", () => {
        document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) + 1) + "px";
    });

    // تقليل حجم النص
    const fontSizeDecreaseBtn = document.getElementById("font-size-decrease-btn");
    fontSizeDecreaseBtn.addEventListener("click", () => {
        document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) - 1) + "px";
    });

    // إدارة أزرار التنقل
    const nextButton = document.getElementById("next-chapter-btn");
    const prevButton = document.getElementById("prev-chapter-btn");

    nextButton.addEventListener("click", () => {
        // الانتقال للفصل التالي
        window.location.href = "next-chapter.html"; // قم بتعديل الرابط حسب الحاجة
    });

    prevButton.addEventListener("click", () => {
        // العودة للفصل السابق
        window.location.href = "prev-chapter.html"; // قم بتعديل الرابط حسب الحاجة
    });

});
