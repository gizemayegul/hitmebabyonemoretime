class Player {
  constructor(width, height, radius) {
    this.level = 1;
    this.sticks = [5, 4, 3, 2, 1];
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.space = 30;
    this.top = 500;
    this.move = 15 0;
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
}
