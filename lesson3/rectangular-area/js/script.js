function findArea(length, width) {
  if (length === 0 || width === 0) {
    return length * length || width * width;
  } else {
    return length * width;
  }
}

let length = +prompt('Enter length of the rectangular', '');
let width = +prompt('Enter width of the rectangular', '');

alert(`The area of your rectangular is ${findArea(length, width)}`);