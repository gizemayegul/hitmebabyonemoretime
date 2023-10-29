class Player {
  constructor(width, height, radius) {
    this.level = 1;
    this.sticks = [5, 4, 3, 2, 1];
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.space = 30;
    this.top = 500;
    this.left = null;
    this.move = 100;
    this.currentIndex = 0;
    this.right = 0;
    this.bottom = 0;
    this.angle = 0;
    this.obstacle = [];
  }

  createCircle() {
    const theGameScreen = document.getElementById("game-screen");
    this.sticks.forEach((e) => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.innerHTML = e;
      theGameScreen.appendChild(circle);
      circle.style.width = this.width + "px";
      circle.style.height = this.height + "px";
      circle.style.borderRadius = this.radius + "%";
      circle.style.background = "black";
      circle.style.position = "absolute";
      circle.style.top = `${(this.top += this.space)}px`;
      circle.style.color = "white";
    });
  }

  appendChild() {
    const circles = document.getElementsByClassName("circle");
    const mainCircle = document.getElementById("spinning-circle");
    const currentCircle = circles[this.currentIndex];
    const currentCircleOffsetTop =
      currentCircle.offsetTop - mainCircle.offsetTop;
    const currentCircleOffsetLeft =
      currentCircle.offsetLeft - mainCircle.offsetLeft;

    // Move the currentCircle inside the mainCircle
    mainCircle.appendChild(currentCircle);

    // Update the position of the currentCircle relative to the mainCircle
    currentCircle.style.top = currentCircleOffsetTop + "px";
    currentCircle.style.left = currentCircleOffsetLeft + "px";

    mainCircle.appendChild(currentCircle);

    console.log(currentCircle);

    this.currentIndex++;
  }
}
