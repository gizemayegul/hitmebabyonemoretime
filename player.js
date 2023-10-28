class Player {
  constructor(width, height, radius) {
    this.level = 1;
    this.sticks = [1, 2, 3, 4, 5];
    this.width = width;
    this.height = height;
    this.radius = radius;
    //this.position = position;
  }

  createCircle() {
    const thegamesscreen = document.getElementById("game-screen");
    this.sticks.forEach((e) => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.innerHTML = e;
      thegamesscreen.appendChild(circle);
      circle.style.width = this.width + "px";
      circle.style.height = this.height + "px";
      circle.style.borderRadius = this.radius + "%";
      circle.style.background = "black";
    });
  }
}
