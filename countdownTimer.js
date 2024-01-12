let timer;
let secondsRemaining = 0;

function startTimer() {
  const timeInput = prompt("Enter time in seconds:");
  secondsRemaining = parseInt(timeInput) || 0;
  
  updateTimerDisplay();

  clearInterval(timer);
  timer = setInterval(function() {
    if (secondsRemaining > 0) {
      secondsRemaining--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  secondsRemaining = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  document.getElementById("timer").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
