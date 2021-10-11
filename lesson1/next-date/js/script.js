let year = +prompt("Enter year", "ex.2001");
let month = +prompt("Enter month", "ex.01");
let day = +prompt("Enter day", "ex.05");

if (day > 31 || month > 12) {
  alert(
    "There is no such a date! Please make sure you enter the date correctly!"
  );
} else if (day < 30 && month !== 02) {
  alert(`Next date is ${day + 1} - ${month} - ${year}`);
} else if (
  day === 30 &&
  month !== 02 &&
  month !== 01 &&
  month !== 03 &&
  month !== 05 &&
  month !== 07 &&
  month !== 08 &&
  month !== 10 &&
  month !== 11 &&
  month !== 12
) {
  alert(`Next date is ${01} - ${month + 1} - ${year}`);
} else if (
  day === 31 &&
  month !== 02 &&
  month !== 12 &&
  month !== 04 &&
  month !== 06 &&
  month !== 09
) {
  alert(`Next date is ${01} - ${month + 1} - ${year}`);
} else if (
  day === 29 &&
  month === 02 &&
  (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
) {
  alert(`Next date is ${01} - ${03} - ${year}`);
} else if (day === 28 && month === 02) {
  alert(`Next date is ${29} - ${02} - ${year}`);
} else if (day === 31 && month === 12) {
  alert(`Next date is ${01} - ${01} - ${year + 1}`);
} else if (day > 31 || month > 12) {
  alert(
    "There is no such a date! Please make sure you enter the date correctly!"
  );
} else {
  alert(
    "There is no such a date! Please make sure you enter the date correctly!"
  );
}