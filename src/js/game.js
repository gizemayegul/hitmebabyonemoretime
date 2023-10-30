class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.gameIsOver = false;
    this.keyPressed = false;
    this.player = new Player();
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";
    mainCircle.createCircle(700, 200, 29, "1");

    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }
    if (this.keyPressed) {
      for (let i = 0; i < circles.length; i++) {
        const smallCircle = circles[i].circle;
        smallCircle.transform(smallCircle.x, smallCircle.y - 100);
      }

      // Clear the canvas
      theContext.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw the circles
      mainCircle.createCircle();
      for (let i = 0; i < circles.length; i++) {
        circles[i].circle.createCircle();
      }
    }

    window.requestAnimationFrame(() => this.gameLoop());
  }
}
