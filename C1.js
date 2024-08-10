let currentPage = 1;

const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        pages[currentPage - 2].style.transform = 'rotateY(0deg)';
        currentPage--;
    }
    updateButtons();
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length) {
        pages[currentPage - 1].style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
    updateButtons();
});

function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pages.length;
}

updateButtons();
