const factorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let numFactorial = +prompt('Enter a number to find its factorial', '');

alert(`Factorial of your number is ${factorial(numFactorial)}`);