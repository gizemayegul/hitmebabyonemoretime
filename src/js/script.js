window.onload = function () {
  const startButton = document.getElementById("start-button");
  const finishButton = document.getElementById("finish-button");
  const getStartSound = document.getElementById("game-startsound");
  const gameTargetSound = document.getElementById("game-target");

  function getVal() {
    const getName = document.getElementById("nameinput").value;
    console.log(getName);
    return getName;
  }

  getVal();
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
    console.log("clicked"); //!click part needs to be fixed
    gameTargetSound.play();
  });

  setInterval(game.update, 1000 / 65); //* for the circles animation
};
