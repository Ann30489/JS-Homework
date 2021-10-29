class Circle {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }
  set radius(r) {
    this.r = r;
  }
  get d() {
    return this.r * 2;
  }
  area() {
    return Math.floor(Math.PI * this.r * this.r);
  }
  circumference() {
    return Math.floor(Math.PI * this.r * 2);
  }
}

let diamBtn = document.getElementById("diameter");
let areaBtn = document.getElementById("area");
let circumBtn = document.getElementById("circum");

diamBtn.addEventListener("click", () => {
  let circleNum = +document.getElementById("circle-num").value;
  let circle = new Circle(circleNum);
  document.getElementById("diam-info").innerHTML = circle.d;
});

areaBtn.addEventListener("click", () => {
  let circleNum = +document.getElementById("circle-num").value;
  let circle = new Circle(circleNum);
  document.getElementById("area-info").innerHTML = circle.area();
});

circumBtn.addEventListener("click", () => {
  let circleNum = +document.getElementById("circle-num").value;
  let circle = new Circle(circleNum);
  document.getElementById("circum-info").innerHTML = circle.circumference();
});