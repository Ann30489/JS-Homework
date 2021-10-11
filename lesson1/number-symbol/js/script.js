let number = prompt("Enter a number from 0 to 9", "your number");
switch (number) {
  case "0":
    console.log(")");
    break;
  case "1":
    console.log("!");
    break;
  case "2":
    console.log("@");
    break;
  case "3":
    console.log("#");
    break;
  case "4":
    console.log("$");
    break;
  case "5":
    console.log("%");
    break;
  case "6":
    console.log("^");
    break;
  case "7":
    console.log("&");
    break;
  case "8":
    console.log("*");
    break;
  case "9":
    console.log("(");
    break;
  default:
    console.log("Only from 0 to 9!");
}
