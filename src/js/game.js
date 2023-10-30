class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.gameStart = document.getElementById("start-page");
  }

  start() {
    this.gameScreen.style.visibility = "visible";
    this.gameStart.style.visibility = "hidden";
    mainCircle.createCircle(700, 200, 29, "1");

    this.gameLoop();
  }
  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }

    window.requestAnimationFrame(() => this.gameLoop());
  }
  click() {
    if (game === null) {
      circles.forEach((circleData) => {
        const circle = circleData.circle;
        if (circle.isFree) return;
        if (
          circles[countOfClick].circle.x > circle.x - 25 &&
          circles[countOfClick].circle.x < circle.x + 12.5 &&
          circle.y > cnv.height / 2
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
      ctx.fillStyle = "green";
    } else {
      ctx.fillStyle = "red";
    }
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    circles.forEach((circleData) => {
      const circle = circleData.circle;
      const firstY = circleData.firstY;

      if (circle.isFree) {
        const y = firstY - countOfClick * 50;
        circle.transform(circle.x, y);
      } else {
        circle.transform(
          mainCircle.x +
            Math.cos(circle.angle) * mainCircle.r * distanceOfMainCircle,
          mainCircle.y +
            Math.sin(circle.angle) * mainCircle.r * distanceOfMainCircle
        );
        circle.angle += speed;
        circle.line(circle.x, circle.y, mainCircle.x, mainCircle.y);
      }
      circle.createCircle();
    });
    mainCircle.createCircle();
  }
}
