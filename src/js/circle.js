class Circle {
  constructor(ctx, xposition, yposition, radius, text) {
    this.ctx = ctx;
    this.xposition = xposition;
    this.yposition = yposition;
    this.radius = radius;
    this.text = text;
  }

  createCircle() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.border = "1px solid black";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //to draw we are passing a lot methods
    //creating super object
    //magic brush
    ctx.arc(this.xposition, this.yposition, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.stroke();
    ctx.fill();
  }
}
