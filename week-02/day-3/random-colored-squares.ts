'use strict'


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let a = prompt('Think a number between 1 and 10: ');
let b = prompt('Nice, now let\'s see another between: 100 and 200');

function randomColorSqr {
    for (let i = 0; i<200; i++) {
        ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        ctx.fillRect((canvas.scrollWidth/2-(a*i)), (100 + (i*a)), (10 / i), (i*b));
        ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        ctx.fillRect((canvas.scrollWidth-(12*i)), b - (a * i), (120/a), (b/i));
    
    }
}
randomColorSqr();

