'use strict'


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColorSqr() {
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect((canvas.scrollWidth/3), 200, 100, 100);
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect((canvas.scrollWidth/2), 200, 100, 100);
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect((canvas.scrollWidth/3), 100, 100, 100);
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect((canvas.scrollWidth/2), 100, 100, 100);
}

randomColorSqr();