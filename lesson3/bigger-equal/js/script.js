function getNumberSize(a, b) {
  switch (true) {
    case a < b:
      return -1;
    case a > b:
      return 1;
    case a === b:
      return 0;
    default:
      return 'Enter the numbers';
  }
}

let num1 = +prompt('Enter the first number');
let num2 = +prompt('Enter the second number');

console.log(getNumberSize(num1, num2));