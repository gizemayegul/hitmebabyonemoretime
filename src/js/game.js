class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.gameIsOver = false;
    this.player = new Player();
    this.speed = 0.02;
    this.distanceOfMainCircle = 2.5;
    this.circles = [];
    this.mainCircle = new Circle(700, 200, 100);
    this.smallCircle = new Circle(700, 600, 15);
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";
    this.mainCircle.createCircle();
    this.smallCircle.createSmallCircle();
    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }

    window.requestAnimationFrame(() => this.gameLoop());
  }
}
