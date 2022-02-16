//isEven oporators to try - ||, |, &

const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");

const settings = {
  dimensions: [2048, 2048],
};

function isEven(value) {
  if (value % 2 == 0) return true;
  else return false;
}

const sketch = () => {
  const createGrid = () => {
    const points = []; //local scoped points
    const count = 50;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1); // -iterates a math range of 0.{count} x
        const v = count <= 1 ? 0.5 : y / (count - 1); // -iterates a math range of 0.{count} y
        points.push([u, v]); //u*2 v*2
      }
    }
    return points;
  };
  const points = createGrid(); // global scope - different points constant
  const margin = 100;
  return ({ context, width, height }) => {
    context.fillStyle = "#fff";
    // 0x, 0y
    context.fillRect(0, 0, width, height);
    points.forEach(([u, v]) => {
      const x = lerp(margin, width - margin, u); //lerp = linear interpolation, center the grid - min, max, t
      const y = lerp(margin, height - margin, v);
      if (isEven(x) || isEven(y)) {
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.strokeStyle = "black";
        context.lineWidth = 15;
        context.stroke();
      } else {
        context.beginPath();
        context.fillRect(x, y, Math.random() * 30, Math.random() * 30);
        context.strokeStyle = "black";
        context.lineWidth = Math.random() * 15;
        context.stroke();
      }
    });
  };
};

canvasSketch(sketch, settings);
