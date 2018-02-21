'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "#9ccfd3";
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(400, 100);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "#96aece";
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(400, 300);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "#ef733e";
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(200, 300);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "#ff829b";
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.lineWidth = 5;
ctx.stroke();