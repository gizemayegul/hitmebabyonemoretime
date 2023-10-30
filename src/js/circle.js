class Circle {
  constructor(x, y, r, text) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.text = text;
  }

  createCircle() {
    theContext.beginPath();

    theContext.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    theContext.fillStyle = "black"; // Set the circle color to black
    theContext.strokeStyle = "black"; // Set the circle border color to black

    theContext.fill();
    theContext.stroke();
    //this requires very  strict squence because otherwise the text will not be drawn properly when drawing the circle with a stroke style th

    theContext.fillStyle = "white"; // Set the text color to white
    theContext.font = "bold 15px Arial";
    theContext.textAlign = "center"; // Set the text alignment
    theContext.textBaseline = "middle"; //set the baseline

    theContext.fillText(this.text, this.x, this.y);

    theContext.closePath(); //what is that?
  }

  transform(x, y) {
    this.x = x;
    this.y = y;
  }

  line(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    theContext.beginPath();
    theContext.moveTo(this.x1, this.y1);
    theContext.lineTo(this.x2, this.y2);
    theContext.stroke();
    theContext.closePath();
  }
}
