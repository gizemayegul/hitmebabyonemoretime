class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.gameIsOver = false;
    this.player = new Player();
    this.mainCircle = new Circle(ctx, 600, 100, 50, "1");
    this.speed = 0.02;
    this.distanceOfMainCircle = 2.5;
    this.circles = [];
    this.count = 20;
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";
    this.mainCircle.createCircle();

    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }
    window.requestAnimationFrame(() => this.gameLoop());
  }
  smallCircles() {
    for (let i = 0; i < this.count; i++) {
      this.circles.push({
        circle: new Circle(ctx, 600, i * 50, 12, 5, i + 1),
      });
    }
  }
}
