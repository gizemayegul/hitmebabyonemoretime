window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  startButton.addEventListener("click", function () {
    game.start();
  });

  window.addEventListener("keyup", (e) =>
    e.key === " " ? game.click(e) : null
  );
  cnv.addEventListener("click", game.click);
  setInterval(game.update, 1000 / 65);
};
