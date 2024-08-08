function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function searchChapters() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    var resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'flex';

    if (query.includes('1')) {
        resultsContainer.innerHTML += '<div class="result-item">فصل 1<button onclick="openModal(\'modal1\')">عرض</button></div>';
    }
    if (query.includes('2')) {
        resultsContainer.innerHTML += '<div class="result-item">فصل 2<button onclick="openModal(\'modal2\')">عرض</button></div>';
    }
    if (query.includes('3')) {
        resultsContainer.innerHTML += '<div class="result-item">فصل 3<button onclick="openModal(\'modal3\')">عرض</button></div>';
    }
    if (resultsContainer.innerHTML === '') {
        resultsContainer.innerHTML = '<p>لا توجد نتائج مطابقة.</p>';
    }
}

function adjustFontSize(size) {
    document.querySelector('.content').style.fontSize = size + 'px';
}

function changeColor(color) {
    document.querySelector('.content').style.color = color;
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

function toggleBoldText() {
    document.querySelector('.content').classList.toggle('bold-text');
}
