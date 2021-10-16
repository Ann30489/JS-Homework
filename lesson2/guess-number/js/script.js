const guessingRange = (minValue, maxValue) => {
  let min = minValue;
  let max = maxValue;
  let notFinished = true;
  let activeNumber = max / 2;
  alert(`Choose a number from ${min} to ${max}`);
  do {
    const answer = prompt(
      `Is your number more than ${activeNumber} (>), less than ${activeNumber} (<) or uquals to ${activeNumber} (=) ?`
    );
    switch (answer) {
      case '>':
        min = Math.floor((max - min) / 2 + min);
        activeNumber = Math.floor(max - (max - min) / 2);
        break;
      case '<':
        max = activeNumber;
        activeNumber = Math.floor(min + (max - min) / 2);
        break;
      case '=':
        notFinished = false;
        break;
      default:
        alert('Choose one of the given variants!');
    }
  } while (notFinished);

  alert('Great!');
};
guessingRange(0, 100);