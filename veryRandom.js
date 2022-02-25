const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048],
  pixlesPerInch: 320,
  scaleToView: true,
  scaleContext: true,
  resizeCanvas: true,
  styleCanvas: true,
  encodingQuality: 100,
  pixelated: false,
  id: "mySketch",
};

const sketch = () => {
  const createGrid = () => {
    const points = []; //local scoped points
    const count = Math.abs(random.gaussian() * 50);
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1); // -iterates a math range of 0.{count} x
        const v = count <= 1 ? 0.5 : y / (count - 1); // -iterates a math range of 0.{count} y
        points.push([u, v]);
      }
    }
    return points;
  };
  const points = createGrid(); // global scope - different points constant
  const margin = Math.random() * 100;
  return ({ context, width, height }) => {
    context.fillStyle = "#fff";
    // 0x, 0y
    context.fillRect(0, 0, width, height);
    points.forEach(([u, v]) => {
      const x = lerp(margin, width - margin, u); //lerp = linear interpolation, center the grid - min, max, t
      const y = lerp(margin, width - margin, v);

      context.beginPath();
      context.arc(
        x,
        y,
        Math.abs(random.gaussian() * 10),
        0,
        Math.PI * 2,
        false
      );
      context.strokeStyle = "black";
      context.lineWidth = Math.abs(random.gaussian() * 15);
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
