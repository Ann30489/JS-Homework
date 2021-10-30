const trafficLights = document.querySelector("span.traffic-light");

const redLight = document.getElementById("red");
const orangeLight = document.getElementById("orange");
const greenLight = document.getElementById("green");
const btn = document.getElementById("toggle-btn");

btn.addEventListener("click", function () {
    if (redLight.classList.contains("light-red")) {
        redLight.classList.remove("light-red");
        orangeLight.classList.add("light-orange");
    } else if (orangeLight.classList.contains("light-orange")) {
        orangeLight.classList.remove("light-orange");
        greenLight.classList.add("light-green");
    } else if (greenLight.classList.contains("light-green")) {
        greenLight.classList.remove("light-green");
        redLight.classList.add("light-red");
    }
});