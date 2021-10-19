let numbers;

function joinToOne(a, b, c) {
  numbers = [];
  numbers.push(a);
  numbers.push(b);
  numbers.push(c);

  return numbers.join('');
}

let num1 = +prompt('Enter your first number', '');
let num2 = +prompt('Enter your second number', '');
let num3 = +prompt('Enter your third number', '');

alert(`${joinToOne(num1, num2, num3)}`);