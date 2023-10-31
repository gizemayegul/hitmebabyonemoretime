window.onload = function () {
  const startButton = document.getElementById("start-button");
  const finishButton = document.getElementById("finish-button");
  const getStartSound = document.getElementById("game-startsound");
  const gameTargetSound = document.getElementById("game-target");
  console.log(getStartSound);
  const game = new Game();

  startButton.addEventListener("click", function () {
    game.start();
    getStartSound.play();
  });
  finishButton.addEventListener("click", function () {
    game.resetGame();
    game.start();
  });

  window.addEventListener("keyup", (e) => {
    e.key === " " ? game.click(e) : null;
    console.log("clicked");
    gameTargetSound.play();
  });

  setInterval(game.update, 1000 / 65);
};
