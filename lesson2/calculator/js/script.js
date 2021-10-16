do {
  let num1 = +prompt("Enter the first number");
  let num2 = +prompt("Enter the second number");
  let sign = prompt("Enter one of the following signs: -, +, / or *");

  switch (sign) {
    case "+":
      alert(num1 + num2);
      break;
    case "-":
      alert(num1 - num2);
      break;
    case "/":
      alert(num1 / num2);
      break;
    case "*":
      alert(num1 * num2);
      break;
    default:
      alert("Please make sure you enter it correctly!");
  }
} while (confirm("Want some more?"));
