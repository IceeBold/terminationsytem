const display = document.getElementById("time");

// Set the target end time to December 15th, 2024 at 00:00:00
const endTime = new Date("2024-12-15T00:00:00").getTime();

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = Math.floor((endTime - now) / 1000); // Remaining time in seconds

    if (timeLeft > 0) {
        display.textContent = formatTime(timeLeft);
        // Trigger animation
        display.classList.add("animate");

        // Remove animation class after animation is done
        setTimeout(() => {
            display.classList.remove("animate");
        }, 200); // Timeout to match animation duration
    } else {
        display.textContent = "00:00:00"; // Countdown ends
        clearInterval(interval); // Stop the interval
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
