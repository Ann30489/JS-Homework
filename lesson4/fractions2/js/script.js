function Fraction(numerator, denominator) {
  return {
    numerator: numerator,
    denominator: denominator,
  };
}

/* Function to find the greatest common divisor */
function gcd(a, b) {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}

/* Function to find the least common multiple */
function lcm(a, b) {
  let gcdDenom = gcd(a, b);
  return Math.abs(a * b) / gcdDenom;
}

function reduceFrac(numer, denom) {
  let gcdCommon = gcd(numer, denom);
  if (gcdCommon <= 1) {
    return `${numer}/${denom}`;
  } else if (gcdCommon > 1) {
    let numerResult = numer / gcdCommon;
    let denomResult = denom / gcdCommon;
    return `${numerResult}/${denomResult}`;
  }
}
/* Function to add two fractions */
function addFrac(obj1, obj2) {
  if (obj1.denominator === obj2.denominator) {
    let resultNumer = obj1.numerator + obj2.numerator;
    let resultDenom = obj1.denominator;
    return `${resultNumer}/${resultDenom}`;
  } else if (obj1.denominator !== obj2.denominator) {
    let lcmNum = lcm(obj1.denominator, obj2.denominator);
    let num1 = lcmNum / obj1.denominator;
    let num2 = lcmNum / obj2.denominator;
    let numerMult1 = num1 * obj1.numerator;
    let numerMult2 = num2 * obj2.numerator;
    let numerBigUp = numerMult1 + numerMult2;
    return reduceFrac(numerBigUp, lcmNum);
  }
}

/* Function to substract two fractions */
function substractFrac(obj1, obj2) {
  if (obj1.denominator === obj2.denominator) {
    let resultNumer = obj1.numerator - obj2.numerator;
    let resultDenom = obj1.denominator;
    return `${resultNumer}/${resultDenom}`;
  } else if (obj1.denominator !== obj2.denominator) {
    let lcmNum = lcm(obj1.denominator, obj2.denominator);
    let num1 = lcmNum / obj1.denominator;
    let num2 = lcmNum / obj2.denominator;
    let numerMult1 = num1 * obj1.numerator;
    let numerMult2 = num2 * obj2.numerator;
    let numerBigUp = numerMult1 - numerMult2;
    return reduceFrac(numerBigUp, lcmNum);
  }
}

/* Function to multiply two fractions */
function multiplyFrac(obj1, obj2) {
  let resultNumer = obj1.numerator * obj2.numerator;
  let resultDenom = obj1.denominator * obj2.denominator;
  return `${resultNumer}/${resultDenom}`;
}

/* Function to divide two fractions */
function division(obj1, obj2) {
  let resultNumer = obj1.numerator * obj2.denominator;
  let resultDenom = obj1.denominator * obj2.numerator;
  return reduceFrac(resultNumer, resultDenom);
}

let numerRed = +prompt('Enter the numerator of your fraction to reduce it', '');
let denomRed = +prompt('Enter the denominator of your fraction reduce it', '');

alert(reduceFrac(numerRed, denomRed));

confirm('Now let\'s do maths with fractions');

let numer1 = +prompt('Enter the numerator of your first fraction', '');
let denom1 = +prompt('Enter the denominator of your first fraction', '');
let numer2 = +prompt('Enter the numerator of your second fraction', '');
let denom2 = +prompt('Enter the denominator of your second fraction', '');

let frac1 = Fraction(numer1, denom1);
let frac2 = Fraction(numer2, denom2);

let sign = prompt('What do you wnat to do with the fractions? Enter one of the following signs: +, -, / or *');

switch (sign) {
  case '+':
    alert(addFrac(frac1, frac2));
    break;
  case '-':
    alert(substractFrac(frac1, frac2));
    break;
  case '/':
    alert(division(frac1, frac2));
    break;
  case '*':
    alert(multiplyFrac(frac1, frac2));
    break;
}