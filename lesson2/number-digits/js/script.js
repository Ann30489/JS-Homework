let number = prompt("Please enter a number");

for (i = 0; i < number.length; i++);

if (i === 1) {
  alert(`You have 1 digit in your number`);
} else if (i > 1) {
  alert(`You have ${i} digits in your number`);
} else {
  alert("Please enter a number");
}