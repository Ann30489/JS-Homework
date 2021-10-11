let num = prompt("Let's check whether your five-digit number is a palindrome");

let numReverse = num.split("").reverse().join("");

if (num === numReverse && num.length === 5) {
  console.log("Yeah, this is a palindrome!");
} else if (num !== numReverse && num.length === 5) {
  console.log("The number is not a palindrome:(");
} else {
  console.log("Please enter ONLY a five-digit number!");
}