let amountUsd = +prompt("Enter the amount of USD", "USD");
let currency = prompt("Enter currency: EUR, AZN, UAH");

switch (currency) {
  case "EUR":
    alert(amountUsd * 0.86);
    break;
  case "AZN":
    alert(amountUsd * 1.7);
    break;
  case "UAH":
    alert(amountUsd * 26.44);
    break;
  default:
    alert("Enter the proper amount of USD and currency in the given format");
    break;
}