// --- Number Guessing Game Logic ---

let secret = randomNum(1, 100);
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");
const hintBtn = document.getElementById("hintBtn");

// Generate random number
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update message display
function showMessage(text, color = "var(--accent)") {
  message.textContent = text;
  message.style.color = color;
}

// Reset the game
function resetGame() {
  secret = randomNum(1, 100);
  attempts = 0;
  attemptsEl.textContent = attempts;
  showMessage("Game restarted! Guess again 👇", "var(--accent)");
  guessInput.value = "";
}

// Guess button click event
guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    showMessage("⚠️ Enter a number between 1 and 100", "var(--warn)");
    return;
  }

  attempts++;
  attemptsEl.textContent = attempts;

  if (guess === secret) {
    showMessage(`🎉 Correct! The number was ${secret}.`, "var(--accent2)");
  } else if (guess > secret) {
    showMessage("📉 Too high! Try a smaller number.", "#fca5a5");
  } else {
    showMessage("📈 Too low! Try a bigger number.", "#fde68a");
  }

  guessInput.focus();
  guessInput.select();
});

// Restart game button
restartBtn.addEventListener("click", resetGame);

// Hint button
hintBtn.addEventListener("click", () => {
  const range = 10;
  const low = Math.max(1, secret - range);
  const high = Math.min(100, secret + range);
  showMessage(`💡 Hint: It's between ${low} and ${high}`, "#c7f9cc");
});

// Initialize
showMessage("Start guessing 👇");
