const canvas = document.getElementById("game-screen");
const context = canvas.getContext("2d");
const smallCircleCount = 20;
const speed = 0.03;
const mainCircle = new Circle(context, 500, 100, 50, "1");

const smallCircle = new Circle(context, 300, 200, 25, "2");
