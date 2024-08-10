// تحديد الفصول المتاحة
const chapters = [
    {
        title: "الفصل الأول",
        number: "1",
        text: "هذا هو نص الفصل الأول من الرواية..."
    },
    {
        title: "الفصل الثاني",
        number: "2",
        text: "هذا هو نص الفصل الثاني من الرواية..."
    },
    {
        title: "الفصل الثالث",
        number: "3",
        text: "هذا هو نص الفصل الثالث من الرواية..."
    }
    // يمكنك إضافة المزيد من الفصول هنا
];

let currentChapter = 0;

// تحديث محتوى الصفحة بناءً على الفصل الحالي
function updateChapter() {
    const titleElement = document.getElementById("chapter-title");
    const numberElement = document.getElementById("chapter-number");
    const textElement = document.getElementById("chapter-text");

    titleElement.textContent = chapters[currentChapter].title;
    numberElement.textContent = "رقم الفصل: " + chapters[currentChapter].number;
    textElement.textContent = chapters[currentChapter].text;

    document.getElementById("prevBtn").disabled = currentChapter === 0;
    document.getElementById("nextBtn").disabled = currentChapter === chapters.length - 1;
}

// التعامل مع أزرار التالي والسابق
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentChapter > 0) {
        currentChapter--;
        updateChapter();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentChapter < chapters.length - 1) {
        currentChapter++;
        updateChapter();
        // تحديث الرابط لزر "التالي" حسب الصفحة
        window.location.href = `F${currentChapter + 2}.html`;
    }
});

// تهيئة الصفحة عند التحميل
updateChapter();
