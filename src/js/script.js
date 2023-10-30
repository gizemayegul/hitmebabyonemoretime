window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  startButton.addEventListener("click", function () {
    game.start();
  });

  function spaceHandle(event) {
    if (event.code == "Space" || event.keyCode == 32) {
      console.log("Space key pressed");

      for (let i = 0; i < circles.length; i++) {
        const smallCircle = circles[i].circle;
        const theDistance = smallCircle.y - mainCircle.y;
        if (isFree) {
          smallCircle.transform(
            smallCircle.x, // 20 should be the speed of the big circle
            smallCircle.y - theDistance + mainCircle.r + smallCircle.r + 20 //the distance of line will be replaced by 20
          );
        } else {
          smallCircle.transform(
            mainCircle.x + Math.cos(angle) * mainCircle.r * 1,
            mainCircle.y + Math.sin(angle) * mainCircle.r * 1
          );
          angle += speed;
          console.log(smallCircle.x, smallCircle.y);
        }
      }
      theContext.clearRect(0, 0, canvas.width, canvas.height);
      // Update the positions of small circles

      // console.log(smallCircle);

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
