document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchPopup = document.getElementById('search-popup');
    const searchSubmit = document.getElementById('search-submit');
    const playBtn = document.getElementById('play-btn');
    const audio = document.getElementById('audio');
    const chapterContent = document.getElementById('chapter-content');
    const increaseFontBtn = document.getElementById('increase-font');
    const changeColorBtn = document.getElementById('change-color');
    const boldTextBtn = document.getElementById('bold-text');
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const prevChapterBtn = document.getElementById('prev-chapter');
    const nextChapterBtn = document.getElementById('next-chapter');

    let fontSize = 16;
    let isDarkTheme = false;

    searchBtn.addEventListener('click', () => {
        searchPopup.classList.toggle('hidden');
    });

    searchSubmit.addEventListener('click', () => {
        // Add search functionality here
    });

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    increaseFontBtn.addEventListener('click', () => {
        fontSize = fontSize < 26 ? fontSize + 2 : 26;
        chapterContent.style.fontSize = `${fontSize}px`;
    });

    changeColorBtn.addEventListener('click', () => {
        const currentColor = chapterContent.style.color;
        chapterContent.style.color = currentColor === 'black' ? 'blue' : 'black';
    });

    boldTextBtn.addEventListener('click', () => {
        chapterContent.style.fontWeight = chapterContent.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });

    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        isDarkTheme = !isDarkTheme;
        toggleThemeBtn.innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    prevChapterBtn.addEventListener('click', () => {
        window.location.href = 'F1.html'; // Replace with previous chapter if available
    });

    nextChapterBtn.addEventListener('click', () => {
        window.location.href = 'F2.html'; // Replace with next chapter
    });
});
