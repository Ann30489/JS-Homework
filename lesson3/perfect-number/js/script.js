let factors = [];
let factorsSum;

function isPerfect(num) {

  for (i = 0; i < num; i++) {
    if (num % i !== 0) continue;
    factors.push(i);
  }

  factorsSum = factors.reduce((a, b) => a + b, 0);

  if (factorsSum === num && num !== 0) {
    return 'Perfect';
  } else if (factorsSum !== num) {
    return 'Not perfect';
  } else if (num.isInteger === false) {
    return 'Enter a number';
  }
}

let userNum = +prompt('Enter your number to find out whether it\'s perfect or not', '');

alert(`${isPerfect(userNum)}`);