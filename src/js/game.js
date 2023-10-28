class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.gameIsOver = false;
    this.player = new Player(20, 20, 50);
    this.obstacles = [];
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";
    this.player.createCircle();
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
