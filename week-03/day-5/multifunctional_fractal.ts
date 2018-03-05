'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let grdbg = ctx.createLinearGradient(canvas.scrollWidth * 1.8, 0, 0, canvas.scrollHeight);
grdbg.addColorStop(0.1, "hsla(31, 18%, 88%, 0.9)");
grdbg.addColorStop(1, "hsla(41, 21%, 88%, 0.9)");
ctx.fillStyle = grdbg;
ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

// add angles of your shape & thickness of the lineWidth 

let numberOfSides: number = 0;
let lineWidth: number = 0;

let gradientAngle: number = 1.2;
let size: number = canvas.scrollHeight / 2;
let xCenter: number = canvas.scrollWidth / 2;
let yCenter: number = canvas.scrollHeight / 2;

// the cucc

function octa(numberOfSides: number, xCenter: number, yCenter: number, size: number, lineWidth: number, gradientAngle: number) {
  ctx.beginPath();
  ctx.moveTo(xCenter + size * Math.cos(0) / 1, yCenter + size * Math.sin(0) / 2); {
    for (let i = 1; i <= numberOfSides; i += 1) {
      ctx.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
  }

  // fill and stroke options

  let grd1 = ctx.createLinearGradient(canvas.scrollWidth * gradientAngle, 0, 0, canvas.scrollHeight);
  grd1.addColorStop(0.6, `hsla(217, 76%, 55%, ${Math.random() * Math.random() / 8})`);
  grd1.addColorStop(0.8, `hsla(20, 93%, 54%, ${Math.random() * Math.random() / 8})`);
  ctx.lineWidth = lineWidth;
  // ctx.strokeStyle = grd1;
  // ctx.stroke();
  ctx.fillStyle = grd1;
  ctx.fill();

  // method

  if (size >= 100 && lineWidth >= 0.1) {
    octa(numberOfSides, (xCenter + (size / 2)), yCenter, size / 2, lineWidth * 0.8, gradientAngle + 1.2);
    octa(numberOfSides, xCenter - (size / 2), yCenter, size / 2, lineWidth * 0.8, gradientAngle - 1.2);
    octa(numberOfSides, xCenter, yCenter + (size / 2), size / 2, lineWidth * 0.8, gradientAngle - 1.2);
    octa(numberOfSides, xCenter, yCenter - (size / 2), size / 2, lineWidth * 0.8, gradientAngle + 1.2);

  }
}
octa(numberOfSides = 4, xCenter, yCenter, size, lineWidth = 6, gradientAngle);


