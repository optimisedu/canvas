const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.beginPath();

    //Math.PI/2 = half circle, (1st,2nd arg = canvas relative position,
    //3rd argument diamiter 4th, =  clip  + a very rough golden ratio 1.161

    context.arc(width / 2, height / 2, 500 / 1.161, 0, Math.PI * 2, false);

    //Fill / Stroke - Stroke for spectral analysis

    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 60 / 1.161;
    context.strokeStyle = "purple";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
