const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  const createGrid = () => {
    const points = []; //local scoped points
    const count = 5;
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
  return ({ context, width, height }) => {
    context.fillStyle = "#fff";
    // 0x, 0y
    context.fillRect(0, 0, width, height);
    points.forEach(([u, v]) => {
      const x = u * width;
      const y = v * height;

      context.beginPath();
      context.arc(x, y, 50, 0, Math.PI * 2, false);
      context.strokeStyle = "black";
      context.lineWidth = 30;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
