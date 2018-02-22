
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.



let x: number = 0;
let y: number = 0;

// 50x50 sqr with random color

function drawSquare(x : number, y : number) {  
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect(x, y, 50, 50);

}

// 3 sqrs with random starting positions inside the borders

for (let i = 1; i<=3; i++) {
    let x: number = (Math.random() * (canvas.scrollHeight - 50));  
    let y: number = (Math.random() * (canvas.scrollHeight - 50));
    drawSquare(x,y);
}



