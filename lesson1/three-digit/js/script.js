let number = prompt("Enter a three-digit number");

if (
  number[0] === number[1] ||
  number[0] === number[2] ||
  number[1] === number[2]
) {
  alert("There are same digits in your number!");
} else {
  alert("The digits in your number are all different!");
}