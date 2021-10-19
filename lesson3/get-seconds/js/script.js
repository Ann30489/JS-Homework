function getSeconds(hour, minute, sec) {
  if (hour >= 24 || minute >= 60 || sec >= 60) {
    return 'Enter the correct time';
  }

  const secNum = (hour * 3600) + (minute * 60) + sec;

  return secNum;
}

let hours = +prompt('Enter hours', '');
let minutes = +prompt('Enter minutes', '');
let seconds = +prompt('Enter seconds', '');

alert(`Seconds total: ${getSeconds(hours, minutes, seconds)}`);