'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function grd1() { 
  let grd1 = ctx.createLinearGradient(canvas.scrollWidth*1.2, 0, 0, canvas.scrollHeight);
  grd1.addColorStop(0.3, "hsla(12, 100%, 43%, 1)");
  grd1.addColorStop(0.5, "hsla(25, 24%, 64%, 1)");
  grd1.addColorStop(0.6, "hsla(25, 24%, 64%, 1)");
  grd1.addColorStop(0.8, "hsla(12, 100%, 43%, 1)");
  ctx.fillStyle = grd1;
  ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);
  }

function grd2() { 
  let grd2 = ctx.createLinearGradient(0, canvas.scrollHeight*0.2, canvas.scrollWidth, canvas.scrollHeight);
  grd2.addColorStop(0, "hsla(23, 26%, 43%, 1)");
  grd2.addColorStop(0.4, "hsla(23, 17%, 73%, 1)");
  grd2.addColorStop(0.5, 'hsla(0, 0%, 50%, 0');
  ctx.fillStyle = grd2;
  ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);
}

function grd3() { 
  let grd3 = ctx.createLinearGradient(canvas.scrollWidth*2.3, 0, canvas.scrollWidth, canvas.scrollHeight);
  grd3.addColorStop(0.3, "hsla(188, 46%, 31%, 1)");
  grd3.addColorStop(1, 'hsla(0, 0%, 50%, 0');
  ctx.fillStyle = grd3;
  ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);
}
  
function grd4() { 
  let grd4 = ctx.createLinearGradient(0, canvas.scrollHeight*0.1, canvas.scrollWidth, canvas.scrollHeight);
  grd4.addColorStop(0.2, 'hsla(0, 0%, 50%, 0');
  grd4.addColorStop(0.5, "hsla(21, 93%, 29%, 1)");
  grd4.addColorStop(0.55, "hsla(21, 93%, 29%, 1)");
  grd4.addColorStop(0.8, 'hsla(0, 0%, 50%, 0');
  grd4.addColorStop(1, 'hsla(0, 0%, 50%, 0');
  ctx.fillStyle = grd4;
  ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);
}


grd1()
grd2() 
grd3()
grd4() 

        