function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  noStroke();
  rotateY(frameCount * 0.01);
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 20, 20, 20);
  specularMaterial(250);
  for (let j = 0; j < 5; j++) {
    pop();
    for (let i = 0; i < 80; i++) {
      translate(
        cos(frameCount * 0.002 + j) * 100,
        cos(frameCount * 0.002 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(20);
      shininess(1);
      pop();
    }
    shininess(20);
    pop();
  }
}
