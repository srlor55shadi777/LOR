document.addEventListener("DOMContentLoaded", function() {
    const chapters = [
        { id: 'F1.html', title: 'الفصل 1' },
        { id: 'F2.html', title: 'الفصل 2' },
        { id: 'F3.html', title: 'الفصل 3' },
        // أضف فصولًا جديدة هنا حسب الحاجة
    ];

    const chapterButtonsContainer = document.getElementById('chapter-buttons');
    const progressElement = document.getElementById('progress');
    const messageElement = document.getElementById('message');
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    function displayChapters(chaptersToDisplay) {
        chapterButtonsContainer.innerHTML = '';
        chaptersToDisplay.forEach(chapter => {
            const link = document.createElement('a');
            link.href = chapter.id;
            link.textContent = chapter.title;
            chapterButtonsContainer.appendChild(link);
        });
    }

    function updateProgressBar() {
        const progressValue = 50; // مثال: 50%
        progressElement.style.width = progressValue + '%';
    }

    function toggleTheme() {
        body.classList.toggle('dark-mode');
    }

    function showMessage() {
        messageElement.style.display = 'block';
    }

    // Display all chapters initially
    displayChapters(chapters);

    // Update progress bar initially
    updateProgressBar();

    // Show message after 1 second
    setTimeout(showMessage, 1000);

    // Toggle theme
    themeToggleButton.addEventListener('click', toggleTheme);
});
