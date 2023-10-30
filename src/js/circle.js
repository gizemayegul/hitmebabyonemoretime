class Circle {
  constructor(ctx, x, y, radius, text) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.text = text;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
