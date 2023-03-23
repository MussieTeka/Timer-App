// select the timer element
const timer = document.getElementById("timer");

// set the initial time to 0
let seconds = 0;
let minutes = 0;
let hours = 0;

// create a function to update the timer
function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // add leading zeros to the time values
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  // update the timer element with the new time
  timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// create a variable to store the interval ID
let intervalId;

// select the start/stop button
const startStopBtn = document.getElementById("startStopBtn");

// add a click event listener to the button
startStopBtn.addEventListener("click", () => {
  // if the interval ID is not set, start the timer
  if (!intervalId) {
    intervalId = setInterval(updateTime, 1000);
    startStopBtn.innerHTML = '<i class="fa fa-pause" id="pause"></i>';
  } else {
    // otherwise, stop the timer
    clearInterval(intervalId);
    intervalId = null;
    startStopBtn.innerHTML = '<i class="fa fa-play" id="play"></i>';
  }
});

// select the reset button
const resetBtn = document.getElementById("resetBtn");

// add a click event listener to the button
resetBtn.addEventListener("click", () => {
  // reset the timer values and update the timer element
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = "00:00:00";

  // stop the timer if it is running
  clearInterval(intervalId);
  intervalId = null;
  startStopBtn.innerHTML = '<i class="fa fa-play" id="play"></i>';
});

function updateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const datetimeString = `${date} ${time}`;
  document.getElementById("datetime").textContent = datetimeString;
}

setInterval(updateTime, 1000); // update time every second
