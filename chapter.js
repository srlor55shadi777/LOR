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

    // Toggle search popup
    searchBtn.addEventListener('click', () => {
        searchPopup.classList.toggle('hidden');
    });

    // Search functionality (placeholder)
    searchSubmit.addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        console.log('Searching for:', query);
        // Implement search functionality
    });

    // Play/Pause audio
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Increase font size
    increaseFontBtn.addEventListener('click', () => {
        fontSize = fontSize < 26 ? fontSize + 2 : 26;
        chapterContent.style.fontSize = `${fontSize}px`;
    });

    // Change text color
    changeColorBtn.addEventListener('click', () => {
        const currentColor = chapterContent.style.color;
        chapterContent.style.color = currentColor === 'black' ? 'blue' : 'black';
    });

    // Toggle bold text
    boldTextBtn.addEventListener('click', () => {
        chapterContent.style.fontWeight = chapterContent.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });

    // Toggle dark/light theme
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        isDarkTheme = !isDarkTheme;
        toggleThemeBtn.innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Navigate to previous chapter
    prevChapterBtn.addEventListener('click', () => {
        window.location.href = 'F1.html'; // Replace with actual previous chapter URL
    });

    // Navigate to next chapter
    nextChapterBtn.addEventListener('click', () => {
        window.location.href = 'F2.html'; // Replace with actual next chapter URL
    });
});
