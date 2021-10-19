function getDateDifference(day1, month1, year1, day2, month2, year2) {

  let millisecInDate1 = Date.parse(`${year1}-${month1}-${day1}`);
  let millisecInDate2 = Date.parse(`${year2}-${month2}-${day2}`);

  let secondsInDate1 = Math.floor(millisecInDate1 / 1000);
  let secondsInDate2 = Math.floor(millisecInDate2 / 1000);

  let secTotal = secondsInDate2 - secondsInDate1;

  let hoursInitial = secTotal / 3600;
  let minutesInitial = (secTotal / 60) - (Math.floor(hoursInitial) * 60);
  let secondsInitial = secTotal - ((Math.floor(hoursInitial) * 3600) + (Math.floor(minutesInitial) * 60));

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
confirm('Let\'s find out the difference between two dates in seconds since Jan01 1970 (Unix time)');

let day1 = +prompt('Enter day of the smaller date', 'ex.01');
let month1 = +prompt('Enter month of the smaller date', 'ex.01');
let year1 = +prompt('Enter year of the smaller date', 'ex.2001');

let day2 = +prompt('Enter day of the bigger date', 'ex.01');
let month2 = +prompt('Enter month of the bigger date', 'ex.01');
let year2 = +prompt('Enter year of the bigger date', 'ex.2001');


alert(getDateDifference(day1, month1, year1, day2, month2, year2));