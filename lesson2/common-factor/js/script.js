let a = +prompt("Enter your first number");
let b = +prompt("Enter your second number");

function commonFactor(a, b) {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}

alert(`The greatest common factor of your numbers is ${commonFactor(a, b)}`);