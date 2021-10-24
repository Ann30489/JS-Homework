let lamborghiniCar = {
  Manufacturer: "Automobili Lamborghini",
  model: "Gallardo LP560-4",
  year: 2012,
  speed: 150 + ' km/h'
};

// Function to output object on the screen
function output(obj) {
  let newArr = [];
  Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    newArr.push(`${key}: ${value}`);
  });
  let arrTwo = newArr.join("; ");
  return arrTwo;

}

document.getElementById("button-info").addEventListener("click", function () {
  document.getElementById("car-info").innerHTML = output(lamborghiniCar);
});

// Function to find out necessary time
function getTime(distance) {
  const speed = lamborghiniCar.speed.replace(" km/h", "");
  let time = distance / speed;
  let timeHour = Math.trunc(distance / speed);
  let minute = Math.floor((time - timeHour) * 60);
  let timeRest = (timeHour % 4) == 0 ? (timeHour / 4 | 0) - 1 : timeHour / 4 | 0;
  let hours = timeHour + timeRest;
  return `You'll need ${hours} h ${minute} m`;
}


document.getElementById("calc-time").addEventListener("click", function () {
  let myDistance = document.getElementById("distance");
  document.getElementById("distance-result").innerHTML = getTime(myDistance.value);
});