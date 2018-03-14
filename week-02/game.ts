'use strict'


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let grdbg = ctx.createLinearGradient(canvas.scrollWidth * 1.8, 0, 0, canvas.scrollHeight);

grdbg.addColorStop(0.1, "hsla(31, 18%, 88%, 0.9)");
grdbg.addColorStop(1, "hsla(41, 21%, 88%, 0.9)");
ctx.fillStyle = grdbg;
ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

