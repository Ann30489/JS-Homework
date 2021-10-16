let firstNumber = +prompt(
  "Enter your first number to create the first part of the range"
);
let secondNumber = +prompt(
  "Enter your second number to create the second part of the range (it should be bigger than the first one!)"
);

let sum = 0;

while (firstNumber <= secondNumber) {
  sum += firstNumber;
  firstNumber++;
}

alert(`The sum of numbers in your range is ${sum}`);