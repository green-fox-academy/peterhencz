'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let grdbg = ctx.createLinearGradient(canvas.scrollWidth * 1.8, 0, 0, canvas.scrollHeight);
grdbg.addColorStop(0.3, "hsla(217, 48%, 8%, 0.95)");
grdbg.addColorStop(0.8, "hsla(217, 91%, 6%, 0.8)");
ctx.fillStyle = grdbg;
ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

// let a: = 10;
let gradientAngle = 1.2;
let line = 7;
let numberOfSides = 4;
let size = canvas.scrollHeight / 2;
let xCenter = canvas.scrollWidth / 2;
let yCenter = canvas.scrollHeight / 2;


function octa(numberOfSides: number, xCenter: number, yCenter: number, size: number, line: number) {
  ctx.beginPath();
  ctx.moveTo(xCenter + size * Math.cos(0) / 1, yCenter + size * Math.sin(0) / 2); {
    for (let i = 1; i <= numberOfSides; i += 1) {
      ctx.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
  }
  let grd1 = ctx.createLinearGradient(canvas.scrollWidth * 1.2, 0, 0, canvas.scrollHeight);
  grd1.addColorStop(0.3, 'hsla(240, 30%, 50%, 0.1');
  grd1.addColorStop(0.8, 'hsla(20, 76%, 50%, 0.1');
  ctx.strokeStyle = grd1;
  ctx.lineWidth = line;
  ctx.stroke();
  ctx.fillStyle = grd1;
  ctx.fill(); 
  if (size >= 30 && line >= 3) 
       {
    octa(numberOfSides, (xCenter + (size / 2)), yCenter, size / 2, line * 0.8);
    octa(numberOfSides, xCenter - size / 2, yCenter, size / 2, line * 0.8);
    octa(numberOfSides, xCenter, yCenter + (size / 2), size / 2, line * 0.8);
    octa(numberOfSides, xCenter, yCenter - (size / 2), size / 2, line * 0.8);
    

  }
}
octa(numberOfSides, xCenter, yCenter, size, line);

