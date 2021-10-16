alert(
  "Now you should enter ten numbers one by one. You can enter any number you want, even 0 and negative one! And we'll tell what these numbers are, and how many positive, negative, odd and even ones as well as zeroes among them ;) Let's start!"
);

arr = [];

let zero = 0;
let positive = 0;
let negative = 0;
let odd = 0;
let even = 0;

for (i = 0; i < 10; i++) {
  let number = +prompt("Enter a number");
  arr.push(number);
  number % 2 === 0 ? even++ : odd++;
  if (number === 0) {
    zero++;
  } else if (number > 0) {
    positive++;
  } else if (number < 0) {
    negative++;
  }
}

alert(`You numbers are ${arr}`);
alert(`There are ${odd} odd number(s) and ${even} even number(s)`);
alert(
  `There are ${zero} zero(es), ${positive} positive number(s) and ${negative} negative number(s)`
);
