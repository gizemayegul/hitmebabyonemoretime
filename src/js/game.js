class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";

    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (game) {
      return;
    }

    window.requestAnimationFrame(() => this.gameLoop());
  }
  click() {
    if (game === null) {
      circles.forEach((circle) => {
        circle = circle.circle;
        if (circle.isFree) return;
        if (
          circles[countOfClick].circle.x >= circle.x - 25 &&
          circles[countOfClick].circle.x <= circle.x + 15 &&
          circle.y >= mainCircle.y / 2
        ) {
          game = false;
          return;
        }
      });
      circles[countOfClick].circle.isFree = false;
      if (countOfClick === theCount && game === null) {
        game = true;
      }
      countOfClick++;
    } else {
      window.location.reload();
    }
  }

  update() {
    if (game === null) {
      ctx.fillStyle = "antiquewhite";
    } else if (game) {
      ctx.fillStyle = "#green";
      speed -= speed > 0 ? 0.00025 : 0;
      distanceOfMainCircle += distanceOfMainCircle < 10 ? 0.05 : 0;
    } else {
      ctx.fillStyle = "#red";
      speed -= speed > 0 ? 0.00025 : 0;
      distanceOfMainCircle += distanceOfMainCircle > 0 ? 0.05 : 0;
    }
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    circles.forEach((circle) => {
      const firstY = circle.firstY; // this is the y position of the first circle
      circle = circle.circle;
      if (circle.isFree) {
        const y = firstY + countOfClick * 50; //
        circle.translate(circle.x, y);
      } else {
        circle.translate(
          mainCircle.x +
            Math.cos(circle.angle) * mainCircle.r * distanceOfMainCircle,
          mainCircle.y +
            Math.sin(circle.angle) * mainCircle.r * distanceOfMainCircle
        );

        circle.angle += speed;
        console.log(circle.angle, "angle", speed, "speed");

        circle.line(circle.x, circle.y, mainCircle.x, mainCircle.y);
      }
      circle.draw();
    });
    mainCircle.draw();
  }
}
