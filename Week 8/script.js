// Digital Clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("digitalClock").textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("todayDate").textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let stopwatchInterval;
let elapsedTime = 0;
let running = false;

function updateStopwatch() {
  const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsedTime % 60).padStart(2, '0');
  document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!running) {
    running = true;
    stopwatchInterval = setInterval(() => {
      elapsedTime++;
      updateStopwatch();
    }, 1000);
  }
});

document.getElementById("stopBtn").addEventListener("click", () => {
  running = false;
  clearInterval(stopwatchInterval);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  running = false;
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  updateStopwatch();
});
