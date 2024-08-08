
document.addEventListener("DOMContentLoaded", function() {
    function getWeekNumber(date) {
        const startDate = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        return Math.ceil((days + startDate.getDay() + 1) / 7);
    }

    function updateCountdown() {
        const today = new Date();
        const weekNumber = getWeekNumber(today);
        const countdownElement = document.getElementById("countdown-number");
        countdownElement.textContent = `الأسبوع ${weekNumber}`;
    }

    updateCountdown();
});
