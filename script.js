const countdownEl = document.getElementById("countdown");
const videoEl = document.getElementById("video");
const countdownSection = document.getElementById("countdown-section");
const showNowBtn = document.getElementById("showNowBtn");

const targetDate = new Date("2025-05-16T13:00:00");

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

  countdownEl.innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;
}

function showVideo() {
  countdownSection.classList.add("hidden");
  videoEl.classList.remove("hidden");
}

// Botón para saltar la espera
showNowBtn.addEventListener("click", showVideo);

// Iniciar contador
updateCountdown();
setInterval(updateCountdown, 1000);
