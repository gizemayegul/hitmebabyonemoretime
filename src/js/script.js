window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  startButton.addEventListener("click", function () {
    game.start();
  });

  function spaceHandle(event) {
    if (event.code == "Space" || event.keyCode == 32) {
      console.log("Space key pressed");

      // Update the positions of small circles
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
  }

  window.addEventListener("keyup", spaceHandle);
};
