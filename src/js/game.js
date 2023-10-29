class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.gameIsOver = false;
    this.player = new Player();

    this.speed = 0.02;
    this.distanceOfMainCircle = 2.5;
    this.circles = [];
    this.smallCircle = new Circle(context, 300, 200, 25, "2");
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";

    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }

    mainCircle.createCircle();
    this.smallCircle.createCircle();

    window.requestAnimationFrame(() => this.gameLoop());
  }
}
