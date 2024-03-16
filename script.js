
let timer, running = false, milliseconds = 0, seconds = 0, minutes = 0;

function startStop() {
  if (running) clearInterval(timer);
  else timer = setInterval(() => {
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
    }
    document.getElementById("display").textContent =
      `${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}:${(milliseconds < 10 ? "0" : "") + milliseconds}`;
  }, 10);
  document.getElementById("startStopButton").textContent = running ? "Start" : "Stop";
  running = !running;
}

function reset() {
  clearInterval(timer);
  running = false;
  milliseconds = seconds = minutes = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopButton").textContent = "Start";
}

document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);
