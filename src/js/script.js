window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  startButton.addEventListener("click", function () {
    game.start();
  });

  function spaceHandle(event) {
    if (event.code == "Space" || event.keyCode == 32) {
      console.log("Space key pressed");
      game.update();
      game.click();
    }
  }
  window.addEventListener("keyup", spaceHandle);
};
