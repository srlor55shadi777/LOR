document.addEventListener("DOMContentLoaded", function() {
    const chapters = [
        { id: 'F1.html', title: 'الفصل 1' },
        { id: 'F2.html', title: 'الفصل 2' },
        { id: 'F3.html', title: 'الفصل 3' },
        // أضف فصولًا جديدة هنا حسب الحاجة
    ];

    const chapterButtonsContainer = document.getElementById('chapter-buttons');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function displayChapters(chaptersToDisplay) {
        chapterButtonsContainer.innerHTML = '';
        chaptersToDisplay.forEach(chapter => {
            const link = document.createElement('a');
            link.href = chapter.id;
            link.textContent = chapter.title;
            chapterButtonsContainer.appendChild(link);
        });
    }

    function searchChapters() {
        const query = searchInput.value.toLowerCase();
        const filteredChapters = chapters.filter(chapter =>
            chapter.title.toLowerCase().includes(query)
        );
        displayChapters(filteredChapters);
    }

    // Display all chapters initially
    displayChapters(chapters);

    // Add search functionality
    searchButton.addEventListener('click', searchChapters);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchChapters();
        }
    });
});
