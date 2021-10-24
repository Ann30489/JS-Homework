// Function to create time object
function createTime(hours, minutes, seconds) {
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
let date = new Date();

let currentTime = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
};

// Function to show time set by user
function showTime(hours, minutes, seconds) {
  let hoursFinal = (hours < 10 ? '0' : '') + hours;
  let minutesFinal = (minutes < 10 ? '0' : '') + minutes;
  let secondsFinal = (seconds < 10 ? '0' : '') + seconds;

  if (hours >= 24 || minutes >= 60 || seconds >= 60) {
    return 'Enter the correct time';
  }

  return `${hoursFinal} : ${minutesFinal} : ${secondsFinal}`;
}

// Function to show current time on the screen
function getCurrentTime() {
  let currentTime = {
    hours: (date.getHours() < 10 ? '0' : '') + date.getHours(),
    minutes: (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
    seconds: (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
  };

  return `${currentTime.hours} : ${currentTime.minutes} : ${currentTime.seconds}`;
}

// Function to convert current time in seconds
function timeToSeconds(timeString) {

  let split = timeString.split(":");

  let hours = parseInt(split[0]) * 3600;
  let minutes = parseInt(split[1]) * 60;
  let seconds = parseInt(split[2]);

  let timeInSeconds = hours + minutes + seconds;
  return timeInSeconds;
}

// Function to convert seconds to time string
function secondsToTime(timeTotalSeconds) {
  let hoursRaw = Math.floor(timeTotalSeconds / 60 / 60);

  let minutesRaw = Math.floor(timeTotalSeconds / 60) - (hoursRaw * 60);

  let secondsRaw = timeTotalSeconds % 60;

  let hoursReduce = Math.floor(hoursRaw % 24);
  let hoursFinal = (hoursReduce < 10 ? '0' : '') + hoursReduce;
  let minutesFinal = (minutesRaw < 10 ? '0' : '') + minutesRaw;
  let secondsFinal = (secondsRaw < 10 ? '0' : '') + secondsRaw;

  return `${hoursFinal} : ${minutesFinal} : ${secondsFinal}`;
}

// Function to add hours to current time
function addHours(setHours) {
  let timeString = getCurrentTime();
  let currentTimeInSeconds = timeToSeconds(timeString);
  let inputInSeconds = setHours * 3600;
  let timeTotalSeconds = currentTimeInSeconds + inputInSeconds;

  return secondsToTime(timeTotalSeconds);
}

// Function to add minutes to current time
function addMinutes(setMinutes) {
  let timeString = getCurrentTime();
  let currentTimeInSeconds = timeToSeconds(timeString);
  let inputToSeconds = setMinutes * 60;
  let timeTotalSeconds = currentTimeInSeconds + inputToSeconds;

  return secondsToTime(timeTotalSeconds);
}

// Function to add seconds to current time
function addSeconds(setSeconds) {
  let timeString = getCurrentTime();
  let currentTimeInSeconds = timeToSeconds(timeString);
  let timeTotalSeconds = currentTimeInSeconds + setSeconds;

  return secondsToTime(timeTotalSeconds);
}

// Variables to get and show time function
let myHours = +document.getElementById("hours").value;
let myMinutes = +document.getElementById("minutes").value;
let mySeconds = +document.getElementById("seconds").value;

let btn = document.getElementById("show-time");
let btn2 = document.getElementById("current-btn");

// Variables to add time functions
let addHourBtn = document.getElementById("add-hour");
let addMinBtn = document.getElementById("add-min");
let addSecBtn = document.getElementById("add-sec");

let addHour = +document.getElementById("hours-add").value;
let addMin = +document.getElementById("minutes-add").value;
let addSec = +document.getElementById("seconds-add").value;

btn.addEventListener("click", function () {
  myHours = +document.getElementById("hours").value;
  myMinutes = +document.getElementById("minutes").value;
  mySeconds = +document.getElementById("seconds").value;
  document.getElementById("time-text").innerHTML = showTime(myHours, myMinutes, mySeconds);
});

btn2.addEventListener("click", function () {
  document.getElementById("time-current").innerHTML = getCurrentTime();
});

addHourBtn.addEventListener("click", function () {
  addHour = +document.getElementById("hours-add").value;
  document.getElementById("add-text").innerHTML = addHours(addHour);
});

addMinBtn.addEventListener("click", function () {
  addMin = +document.getElementById("minutes-add").value;
  document.getElementById("add-text").innerHTML = addMinutes(addMin);
});

addSecBtn.addEventListener("click", function () {
  addSec = +document.getElementById("seconds-add").value;
  document.getElementById("add-text").innerHTML = addSeconds(addSec);
});