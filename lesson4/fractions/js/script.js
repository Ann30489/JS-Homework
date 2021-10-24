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

let numer1 = +document.getElementById("numer1").value;
let denom1 = +document.getElementById("denom1").value;
let numer2 = +document.getElementById("numer2").value;
let denom2 = +document.getElementById("denom2").value;

let frac1 = Fraction(numer1, denom1);
let frac2 = Fraction(numer2, denom2);

document.getElementById("add").addEventListener("click", function () {
    numer1 = +document.getElementById("numer1").value;
    denom1 = +document.getElementById("denom1").value;
    numer2 = +document.getElementById("numer2").value;
    denom2 = +document.getElementById("denom2").value;
    frac1 = Fraction(numer1, denom1);
    frac2 = Fraction(numer2, denom2);

    document.getElementById("math-result").innerHTML = addFrac(frac1, frac2);
});

document.getElementById("substract").addEventListener("click", function () {
    numer1 = +document.getElementById("numer1").value;
    denom1 = +document.getElementById("denom1").value;
    numer2 = +document.getElementById("numer2").value;
    denom2 = +document.getElementById("denom2").value;
    frac1 = Fraction(numer1, denom1);
    frac2 = Fraction(numer2, denom2);
    document.getElementById("math-result").innerHTML = substractFrac(frac1, frac2);
});

document.getElementById("multiply").addEventListener("click", function () {
    numer1 = +document.getElementById("numer1").value;
    denom1 = +document.getElementById("denom1").value;
    numer2 = +document.getElementById("numer2").value;
    denom2 = +document.getElementById("denom2").value;
    frac1 = Fraction(numer1, denom1);
    frac2 = Fraction(numer2, denom2);
    document.getElementById("math-result").innerHTML = multiplyFrac(frac1, frac2);
});

document.getElementById("divide").addEventListener("click", function () {
    numer1 = +document.getElementById("numer1").value;
    denom1 = +document.getElementById("denom1").value;
    numer2 = +document.getElementById("numer2").value;
    denom2 = +document.getElementById("denom2").value;
    frac1 = Fraction(numer1, denom1);
    frac2 = Fraction(numer2, denom2);
    document.getElementById("math-result").innerHTML = division(frac1, frac2);
});

document.getElementById("reduce-btn").addEventListener("click", function () {
    let numerRed = +document.getElementById("numer-red").value;
    let denomRed = +document.getElementById("denom-red").value;
    document.getElementById("reduce-result").innerHTML = reduceFrac(numerRed, denomRed);
});