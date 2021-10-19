function splitSeconds(sec) {
  let hoursInitial = sec / 3600;
  let minutesInitial = (sec / 60) - (Math.floor(hoursInitial) * 60);
  let secondsInitial = sec - ((Math.floor(hoursInitial) * 3600) + (Math.floor(minutesInitial) * 60));

  let timeArr = [];
  let hours = Math.floor(hoursInitial);
  let minutes = Math.floor(minutesInitial);
  let seconds = Math.floor(secondsInitial);


  timeArr.push((hours < 10 ? '0' : '') + hours);
  timeArr.push((minutes < 10 ? '0' : '') + minutes);
  timeArr.push((seconds < 10 ? '0' : '') + seconds);

  let newArr = timeArr.join(`:`);

  return newArr;
}

let secTotal = +prompt('Enter seconds', '');

alert(splitSeconds(secTotal));