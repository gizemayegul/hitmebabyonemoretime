//* Global variables
const cnv = document.getElementById("game-screen");
const ctx = cnv.getContext("2d");

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
ctx.lineWidth = 1.5; //* styling for circle

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

let circles = []; //* keeps small circles
let theLevel = 1; //*
let countOfClick = 0;
let theCount = 5; //* number of small circles
let game = null; //* game true then win// false game finished
let speed = 0.02;
let distanceOfMainCircle = 2.5; //* lines between main circle and small circles

const mainCircle = new Circle(ctx, cnv.width / 2, cnv.height / 4, 60, 1);
mainCircle.draw();

//* create small circles to push inside the array
function drawCircles() {}
for (let i = 0; i < theCount; i++) {
  circles.push({
    circle: new Circle(
      ctx,
      cnv.width / 2,
      i * 40 + cnv.height / 2,
      15,
      theCount - i
    ),
    firstY: i * 40 + cnv.height / 2,
  });
  circles[i].circle.draw();
} // * creates small circles and after that you can do update on them
