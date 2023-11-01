//* Global variables
const cnv = document.getElementById("game-screen");
const ctx = cnv.getContext("2d");

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
ctx.lineWidth = 1.5; //* styling for cirle

let circles = []; //* keeps small circles
let theLevel = 1; //*
let countOfClick = 0;
let theCount = 5; //* number of small circles
let game = null; //* game true then win// false game finished
let speed = 0.02;
let distanceOfMainCircle = 2.5; //* lines between main circle and small circles

const mainCircle = new Circle(ctx, 700, 200, 60, 1); //`${theLevel}`); //! can the values dynamic instead of hardcoded
//!the game is created when even game hasnt started, so to create a new value with new circle should be not static.
mainCircle.draw(); //?explain

//* create small circles
for (let i = 0; i < theCount; i++) {
  circles.push({
    circle: new Circle(ctx, 700, i * 40 + 200, 15, theCount - i),
    firstY: i * 40 + 500,
  });
  circles[i].circle.draw();
} // * creates small circles and after that you can do update on them
