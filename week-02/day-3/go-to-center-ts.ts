'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let x: number = 0;
let y: number = 0;

/*
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(x, y);
ctx.stroke();
*/

function goToCenter(x : number, y : number) { 
    ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();

}

for (let i: number = 1; i <= 3; i++) {
    x = parseInt(prompt(`Mennyi az x${i}?`));
    y = parseInt(prompt(`Mennyi az y${i}?`));
    goToCenter(x, y);

}

/*

goToCenter(parseInt(myX),10);
goToCenter(30,120);
goToCenter(420, 342);
*/