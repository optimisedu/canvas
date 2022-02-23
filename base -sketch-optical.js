const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");

const settings = {
  //should be usual settings for all 2d sketches I generate
  dimensions: [2048, 2048],
  pixlesPerInch: 320,
  scaleToView: true,
  bleed: Math.random() * 40,
  scaleContext: true,
  resizeCanvas: true,
  styleCanvas: true,
  encodingQuality: 100,
  pixelated: false,
  id: "mySketch",
};

const sketch = () => {
  function generateRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const sat = Math.floor(Math.random() * (0 + 1)) + "%";
    const lgt = Math.floor(Math.random() * (0 + 1)) + "%";
    const a = 0.5;
    return "hsl(" + hue + "deg, " + sat + ", " + lgt + "," + a + ")";
  }
  const createGrid = () => {
    const points = []; //local scoped points
    const count = 50;
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
  const margin = 100;
  return ({ context, width, height }) => {
    context.fillStyle = "#fff";
    // 0x, 0y

    context.fillRect(0, 0, width, height);
    points.forEach(([u, v]) => {
      const x = lerp(margin, width - margin, u); //lerp = linear interpolation, center the grid - min, max, t
      const y = lerp(margin, width - margin, v);
      context.beginPath();
      context.arc(x, y, 50, 0, Math.PI * 2, false);
      context.strokeStyle = generateRandomColor();
      context.lineWidth = 15;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
