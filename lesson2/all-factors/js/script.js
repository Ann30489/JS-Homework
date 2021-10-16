let number = +prompt("Enter a number and find out its factors");

for (i = 0; i <= number; i++) {
  if (number % i !== 0) continue;
  console.log(i);
}