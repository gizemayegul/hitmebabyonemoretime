class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.gameIsOver = false;
    this.gameIsNotOver = true;
    this.player = new Player(20, 20, 50);

    //[...document.getElementById()] the obstacle should be inside the
    //circle,if I get the circle's children as a obstacle,
    //but not the maincirlce then i have the game i guess;
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
