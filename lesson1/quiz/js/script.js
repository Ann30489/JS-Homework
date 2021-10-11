let i = 0;

alert("How well do you know the US states? Let's check it!;)");

let questionFirst = prompt(
  "Which state was named in honour of the wife of King Charles I? Louisiana, Maryland or Virginia?"
);

switch (questionFirst) {
  case "Louisiana":
  case "Virginia":
    alert("No, it's Maryland!");
    break;
  case "Maryland":
    alert("Awesome! You get 2 points!");
    i += 2;
    break;
  default:
    alert("Write only one of the three states!");
    let questionFirst = prompt(
      "Which state was named in honour of the wife of King Charles I? Louisiana, Maryland or Virginia?"
    );
    break;
}

if (i > 0) {
  alert("Not bad! Let's go further!");
} else {
  alert("It's ok, pull yourself together;)");
}

let questionSecond = prompt(
  "Which state is also known as the Bluegrass State? Kentucky, Rhode Island or Alabama?"
);

switch (questionSecond) {
  case "Rhode Island":
  case "Alabama":
    alert("Nope, it's Kentucky!");
    break;
  case "Kentucky":
    alert("You rock! You get 2 points!");
    i += 2;
    break;
  default:
    alert("Write only one of the three states!");
    let questionSecond = prompt(
      "Which state is also known as the Bluegrass State? Kentucky, Rhode Island or Alabama?"
    );
    break;
}

if (i > 0) {
  alert("Great! Let's go further!");
} else {
  alert("Don't worry! There is one more question!");
}

let questionThird = prompt(
  "Which is the capital of Wyoming? Cheyenne, Phoenix or Jefferson City?"
);

switch (questionThird) {
  case "Phoenix":
  case "Jefferson City":
    alert("Oops! It's Cheyenne!");
    break;
  case "Cheyenne":
    alert("Wow! You get 2 points!");
    i += 2;
    break;
  default:
    alert("Write only one of the three states!");
    let questionThird = prompt(
      "Which is the capital of Wyoming? Cheyenne, Phoenix or Jefferson City?"
    );
    break;
}

if (i === 0) {
  alert("Sorry! Your score is 0. Good luck next time!");
} else if (i === 2 || i === 4) {
  alert(`Good! You get ${i} points!`);
} else if (i === 6) {
  alert(`Congrats! You get ${i} points! You win!!!`);
}
