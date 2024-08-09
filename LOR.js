document.addEventListener("DOMContentLoaded", function() {
    const chapters = [
        { id: 'F1.html', title: 'الفصل 1' },
        { id: 'F2.html', title: 'الفصل 2' },
        { id: 'F3.html', title: 'الفصل 3' },
        // أضف فصولًا جديدة هنا حسب الحاجة
    ];

    const chapterButtonsContainer = document.getElementById('chapter-buttons');

    function displayChapters(chaptersToDisplay) {
        chapterButtonsContainer.innerHTML = '';
        chaptersToDisplay.forEach(chapter => {
            const link = document.createElement('a');
            link.href = chapter.id;
            link.textContent = chapter.title;
            chapterButtonsContainer.appendChild(link);
        });
    }

    // Display all chapters initially
    displayChapters(chapters);
});
