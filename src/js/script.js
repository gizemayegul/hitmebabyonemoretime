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
        console.log(mainCircle.y, "main");
        const smallCircle = circles[i].circle;
        console.log(smallCircle.y, "smallCircle");
        const theDistance = smallCircle.y - mainCircle.y;
        console.log(theDistance, "distance");
        smallCircle.transform(
          smallCircle.x, // 20 should be the speed of the big circle
          smallCircle.y - theDistance + mainCircle.r + smallCircle.r + 20 //the distance of line will be replaced by 20
        );
        console.log(speed, "speed", smallCircle.x);
        theContext.clearRect(0, 0, canvas.width, canvas.height);

        // console.log(smallCircle);
      }

      // Clear the canvas

      // Redraw the circles
      mainCircle.createCircle();
      for (let i = 0; i < circles.length; i++) {
        circles[i].circle.createCircle();
      }
    }
  }

  window.addEventListener("keyup", spaceHandle);
};
