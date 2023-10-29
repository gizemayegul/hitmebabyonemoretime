class Circle {
  constructor(context, xposition, yposition, radius, text) {
    this.context = context;
    this.xposition = xposition;
    this.yposition = yposition;
    this.radius = radius;
    this.text = text;
  }

  createCircle() {
    canvas.style.border = "1px solid black";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //to draw we are passing a lot methods
    //creating super object
    //magic brush
    context.arc(
      this.xposition,
      this.yposition,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.textAlign = "center";

    context.stroke();
    context.fill();
  }
}
