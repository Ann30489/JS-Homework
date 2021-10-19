function showTime(hour, minute, sec) {

  let timeArr = [];

  if (hour >= 24 || minute >= 60 || sec >= 60) {
    return 'Enter the correct time';
  }

  timeArr.push((hour < 10 ? '0' : '') + hour);
  timeArr.push((minute < 10 ? '0' : '') + minute);
  timeArr.push((sec < 10 ? '0' : '') + sec);

  let newArr = timeArr.join(`:`);

  return newArr;
}

let hours = +prompt('Enter hours', '');
let minutes = +prompt('Enter minutes', '');
let seconds = +prompt('Enter seconds', '');

alert(showTime(hours, minutes, seconds));