let purchaseSum = +prompt(
  "Enter the sum of your purchase and learn how much you get off. The minimum sum for the discount is 200 USD",
  "your sum"
);

if (purchaseSum >= 200 && purchaseSum < 300) {
  alert(
    `You get 3% discount! Your sum is ${
      purchaseSum - parseInt(purchaseSum * 0.03)
    } USD.`
  );
} else if (purchaseSum >= 300 && purchaseSum < 500) {
  alert(
    `You get 5% discount! Your sum is ${
      purchaseSum - parseInt(purchaseSum * 0.05)
    } USD.`
  );
} else if (purchaseSum >= 500) {
  alert(
    `You get 7% discount! Your sum is ${
      purchaseSum - parseInt(purchaseSum * 0.07)
    } USD.`
  );
} else {
  alert("Sorry, no discount for you. The disount starts from 200 USD");
}