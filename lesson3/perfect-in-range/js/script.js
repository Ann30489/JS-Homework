function showPerfectNumber(min, max) {
  let perfectNumbers = [];
  let numbersRange = [];
  for (i = min; i <= max; i++) {
    numbersRange.push(i);
  }
  numbersRange.forEach(function isPerfect(el) {
    let factors = [];
    for (j = 0; j < el; j++) {
      if (el % j !== 0) continue;
      factors.push(j);
    }

    let factorsSum = factors.reduce((a, b) => a + b, 0);

    if (factorsSum === el && el !== 0) {
      perfectNumbers.push(el);
    }

  });
  return perfectNumbers;
}

let minNum = +prompt('Enter your first number', '');
let maxNum = +prompt('Enter your second number', '');

alert(`Perfect number(s) in your range: ${showPerfectNumber(minNum, maxNum)}`);