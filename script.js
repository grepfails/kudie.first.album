const countdownEl = document.getElementById("countdown");
const videoEl = document.getElementById("end-countdown-container");
const countdownSection = document.getElementById("countdown-section");
const targetDate = new Date("2025-05-24T00:00:00");

const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        showVideo();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
}

function showContent() {
    countdownSection.classList.add("hidden");
    videoEl.classList.remove("hidden");

    const iframe = document.getElementById("kudieVideo");
    iframe.src = "https://www.youtube.com/embed/ejiPvDiX-qI?si=krYu5pLBGjpdwI1X";
}

// Iniciar contador
updateCountdown();
setInterval(updateCountdown, 1000);
showContent();
