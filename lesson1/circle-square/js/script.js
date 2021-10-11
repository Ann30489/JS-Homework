alert("Let's check whether your circle fits your square");
let circle = +prompt("Enter the length of your circle");
let square = +prompt("Enter the perimeter of your square");

if (circle / (2 * Math.PI) <= square / 8) {
  alert("Yes, the circle fits the square!");
} else {
  alert("No, such circle won't fit this square!");
}