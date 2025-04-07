const countdownEl = document.getElementById("countdown");
const videoEl = document.getElementById("video");

// Fecha objetivo: 16 mayo 2025, 13:00
const targetDate = new Date("2025-05-16T13:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    // Ya pasó la fecha, mostrar el video
    countdownEl.style.display = "none";
    videoEl.classList.remove("hidden");
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

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
