class Bit {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.diameter = d;
    this.state = false;
  }

  setState(state) {
    this.state = Boolean(parseInt(state));
  }

  toggle (x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d< this.diameter/2) {
      this.state = !this.state;
    }
  }

  show() {
    noStroke();
    if (this.state) {
      fill(255, 200, 0);
    } else {
      fill(255);
    }
    ellipse(this.x, this.y, this.diameter);
  }
}