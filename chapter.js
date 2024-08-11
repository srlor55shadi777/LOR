document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('chapterContent');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const boldTextBtn = document.getElementById('bold-text');
    const colorTextBtn = document.getElementById('color-text');
    const lineSpacingBtn = document.getElementById('line-spacing');
    const searchPopup = document.getElementById('search-popup');
    const closeSearchPopup = document.getElementById('close-search-popup');
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit');
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');

    let fontSize = 16;
    let lineHeight = 1.5;
    const maxLineHeight = 3;

    // Initialize font size and line height
    content.style.fontSize = fontSize + 'px';
    content.style.lineHeight = lineHeight;

    // Increase font size
    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2;
        content.style.fontSize = fontSize + 'px';
    });

    // Decrease font size
    decreaseFontBtn.addEventListener('click', () => {
        fontSize = Math.max(12, fontSize - 2); // Minimum font size
        content.style.fontSize = fontSize + 'px';
    });

    // Toggle bold text
    boldTextBtn.addEventListener('click', () => {
        content.style.fontWeight = content.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });

    // Toggle text color
    colorTextBtn.addEventListener('click', () => {
        const color = prompt('Enter a color (name or hex code):', '#000000');
        if (color) {
            content.style.color = color;
        }
    });

    // Adjust line spacing
    lineSpacingBtn.addEventListener('click', () => {
        lineHeight = lineHeight < maxLineHeight ? lineHeight + 0.2 : 1.5;
        content.style.lineHeight = lineHeight;
    });

    // Search text functionality
    searchSubmit.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            const regex = new RegExp(query, 'gi');
            content.innerHTML = content.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
        }
    });

    // Open and close search popup
    document.getElementById('search-text').addEventListener('click', () => {
        searchPopup.style.display = 'flex';
    });

    closeSearchPopup.addEventListener('click', () => {
        searchPopup.style.display = 'none';
    });

    // Toggle dark mode
    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Initialize saved settings from local storage
    const savedFontSize = localStorage.getItem('fontSize');
    const savedLineHeight = localStorage.getItem('lineHeight');
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedFontSize) {
        fontSize = parseInt(savedFontSize, 10);
        content.style.fontSize = fontSize + 'px';
    }
    if (savedLineHeight) {
        lineHeight = parseFloat(savedLineHeight);
        content.style.lineHeight = lineHeight;
    }
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Save settings to local storage
    function saveSettings() {
        localStorage.setItem('fontSize', fontSize);
        localStorage.setItem('lineHeight', lineHeight);
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    window.addEventListener('beforeunload', saveSettings);
});
