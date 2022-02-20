//p5 10/10 grid (siezuremachine) - remove framerate

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (var x = 0; x < width; x += width / 10) {
    for (var y = 0; y < height; y += height / 10) {
      stroke(0);
      strokeWeight(0);
      line(x, 0, x, height);
      line(0, y, width, y);
      rect(x, y, width / 10, height / 10);
      if (mouseIsPressed) {
        frameRate();
        fill(random(255), random(255), random(255));
      }
    }
  }
}
