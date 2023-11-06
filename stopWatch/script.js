let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let intervalId;

const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

const displayTime = () => {
  const seconds = (elapsedTime / 1000).toFixed(2);
  stopwatch.textContent = seconds;
};

const startTimer = () => {
  isRunning = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayTime();
  }, 10);
};

const stopTimer = () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
  }
};

const resetTimer = () => {
  isRunning = false;
  clearInterval(intervalId);
  elapsedTime = 0;
  displayTime();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
};

setTimeout(() => {
  stopwatch.textContent = "0.00";
  startButton.addEventListener("click", startTimer);
  stopButton.addEventListener("click", stopTimer);
  resetButton.addEventListener("click", resetTimer);
}, 2000);
