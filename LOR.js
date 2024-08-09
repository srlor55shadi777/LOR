document.addEventListener("DOMContentLoaded", function() {
    function getDaysUntilNextSunday() {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const daysUntilSunday = (7 - dayOfWeek) % 7;
        return daysUntilSunday === 0 ? 7 : daysUntilSunday;
    }

    function updateCountdown() {
        const daysUntilSunday = getDaysUntilNextSunday();
        const countdownElement = document.getElementById("countdown-number");
        countdownElement.textContent = `${daysUntilSunday} يوم${daysUntilSunday === 1 ? '' : 'اً'}`;
    }

    // Update countdown initially
    updateCountdown();

    // Update countdown every hour
    setInterval(updateCountdown, 3600000); // 3600000 milliseconds = 1 hour
});
