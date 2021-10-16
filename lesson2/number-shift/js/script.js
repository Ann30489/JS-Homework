let number = prompt("Enter a number");
let shift = +prompt("For how many numbers do you wish to shift your number?");

arr = number.split("");

for (let i = 0; i < shift; i++) {
  arr.push(arr.shift());
}
alert(arr.join``);
