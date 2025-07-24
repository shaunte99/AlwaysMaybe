// Countdown Timer
const countdown = document.getElementById("countdown");
const releaseDate = new Date("September 26, 2025 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 The album has dropped.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hrs}h ${mins}m ${secs}s`;
};

setInterval(updateCountdown, 1000);
updateCountdown();
