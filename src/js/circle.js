class Circle {
  constructor(ctx, x, y, r, text) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.text = text;
    this.isFree = true;
    this.angle = 45.5;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.fillStyle = "white";
    this.ctx.font = "12px Arial";
    this.ctx.fillText(this.text, this.x, this.y);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.lineWidth = 1.5;
    this.ctx.closePath();
  }

  translate(x, y) {
    this.x = x;
    this.y = y;
  }

  line(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
