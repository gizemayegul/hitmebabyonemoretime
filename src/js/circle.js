class Circle {
  constructor(x, y, r, text) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.text = text;
    this.theCount = 10;
  }

  createCircle() {
    theContext.beginPath();
    theContext.arc(this.x, this.y, this.r, Math.PI * 2, false);
    theContext.strokeStyle = "black";
    theContext.fill();
    theContext.stroke();
  }

  createSmallCircle() {
    for (let i = 0; i < this.theCount; i++) {
      theContext.beginPath();
      theContext.arc(this.x, this.y + i * 40, this.r, 0, Math.PI * 2);
      //radius,position,0 is radiance, pi is the angle

      theContext.fill();
      theContext.fillStyle = "black";
      theContext.stroke();
    }
  }
}
