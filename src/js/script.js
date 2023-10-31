window.onload = function () {
  const startButton = document.getElementById("start-button");
  const finishButton = document.getElementById("finish-button");
  const game = new Game();

  startButton.addEventListener("click", function () {
    game.start();
  });
  finishButton.addEventListener("click", function () {
    game.resetGame();
    game.start();
  });

  window.addEventListener("keyup", (e) =>
    e.key === " " ? game.click(e) : null
  );

  setInterval(game.update, 1000 / 65);
};
