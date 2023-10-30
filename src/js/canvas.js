const canvas = document.getElementById("game-screen");
const theContext = canvas.getContext("2d");
canvas.style.border = "1px solid black";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const circles = [];
const theCount = 9;
const speed = 20;
const isFree = true;

const mainCircle = new Circle(700, 200, 60, 1);
//const smallCircle = new Circle(700, 500, 50);

//smallCircle

for (let i = 0; i < theCount; i++) {
  circles.push({
    circle: new Circle(700, 500 + i * 40, 15, theCount - i),
  });
  circles[i].circle.createCircle();
}
