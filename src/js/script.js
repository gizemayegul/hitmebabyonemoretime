window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  startButton.addEventListener("click", function () {
    game.start();
  });

  function spaceHandle(event) {
    const key = event.key;
    if (event.code == "Space" || event.keyCode == 32) {
    }
  }

  window.addEventListener("keyup", spaceHandle);
};
