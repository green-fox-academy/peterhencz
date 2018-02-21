'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let centerx: number = canvas.scrollWidth/2;
let centery: number = canvas.scrollHeight/2;
let squareSize: number = parseInt(prompt('Size of you square (in px): '));

ctx.fillStyle = 'pink';
ctx.fillRect(centerx - (squareSize/2), centery - (squareSize/2), squareSize, squareSize);


