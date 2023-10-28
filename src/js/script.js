window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  startButton.addEventListener("click", function () {
    game.start();
  });

  function spaceHandle(event) {
    const key = event.key;
    if (event.code == "Space" || event.keyCode == 32) {
      //key number/
      const circles = document.getElementsByClassName("circle");
      console.log([...circles[0].top]);
      //console.log(circles);
      for (let i = 0; i < circles.length; i++) {
        const currentCirle = circles[i]; //takes the first circle
        //console.log(currentCirle);
        const topValue = parseInt(currentCirle.style.top || game.player.top);
        currentCirle.style.top = `${topValue - game.player.move}px`;
      }

      console.log("space pressed");
    }
  }

  window.addEventListener("keyup", spaceHandle);

  console.log("lol");
};
