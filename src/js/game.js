class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
    this.finishPage = document.getElementById("finish-page");
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";
    if (game) {
      this.gameStart.style.backgroundColor = "green";
    } else if (game === false) {
      this.gameStart.style.backgroundColor = "red";
    }
    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (game === false) {
      setTimeout(() => {
        this.finishPage.style.visibility = "visible";
        this.gameScreen.style.visibility = "hidden";
        this.finishPage.style.visibility = "visible";
        console.log("game is finished");
      }, 1000); // Delay
      return console.log("game is finished");
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
          circles[countOfClick].circle.x <= circle.x + 15 + speed &&
          circle.y >= mainCircle.y / 2
        ) {
          game = false;
          return;
        }
      });
      circles[countOfClick].circle.isFree = false;
      countOfClick++;
      if (countOfClick === theCount) {
        game = true; // game wind
      }
    } else if (countOfClick === theCount && game === false) {
      game = false;
      window.location.reload();
    }
    console.log(game, "thetes");
  }

  update() {
    if (game === null) {
      ctx.fillStyle = "antiquewhite";
    } else if (game) {
      ctx.fillStyle = "green";
      speed -= speed > 0 ? 0.00025 : 0;
      distanceOfMainCircle += distanceOfMainCircle < 10 ? 0.05 : 0;
    } else {
      ctx.fillStyle = "red";
      speed -= speed > 0 ? 0.00025 : 0; //animation
      distanceOfMainCircle += distanceOfMainCircle > 0 ? 0.05 : 0;
    }
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    circles.forEach((circle) => {
      const firstY = circle.firstY; // this is the y position of the first circle
      circle = circle.circle;
      if (circle.isFree) {
        const y = firstY - countOfClick * 20; //
        circle.translate(circle.x, y);
      } else {
        circle.translate(
          mainCircle.x +
            Math.cos(circle.angle) * mainCircle.r * distanceOfMainCircle,
          mainCircle.y +
            Math.sin(circle.angle) * mainCircle.r * distanceOfMainCircle
        );

        circle.angle += speed;

        circle.line(circle.x, circle.y, mainCircle.x, mainCircle.y);
      }
      circle.draw();
    });
    mainCircle.draw();
  }
}
