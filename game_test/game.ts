'use strict'


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

window.onload=function(){
let x=(canvas.scrollWidth / 2) - 25;
let y=(canvas.scrollHeight / 2) - 25;
let xNelli=100;
let yNelli=100;
let xBalazskaxd=100;
let yBalazskaxd=100;
let key,pos=0;
let xNelliRand = Math.floor((canvas.scrollWidth - 50)* Math.random());
let yNelliRand = Math.floor((canvas.scrollHeight - 50) * Math.random());
let xBalazskaxdRand = Math.floor((canvas.scrollWidth - 50)* Math.random());
let yBalazskaxdRand = Math.floor((canvas.scrollHeight - 50) * Math.random());
let magicHP = 0;
let magicSP = 0;


let grdbg = ctx.createLinearGradient(canvas.scrollWidth, 0, canvas.scrollWidth,canvas.scrollHeight);
  grdbg.addColorStop(0.1, "hsla(218, 34%, 34%, 1)");
  grdbg.addColorStop(1, "hsla(218, 19%, 66%, 1)");
  ctx.fillStyle = grdbg;
  ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

// nelli image

let imgNelli=new Image();
imgNelli.onload=function()
{
  ctx.drawImage(imgNelli,xNelliRand,yNelliRand);
}
imgNelli.src="nelli.png";

let imgBalazskaxd=new Image();
imgBalazskaxd.onload=function()
{
  ctx.drawImage(imgBalazskaxd,xBalazskaxdRand,yBalazskaxdRand);
}
imgBalazskaxd.src="balazskaxd.png";


// hero image

let img=new Image();
img.onload=function()
{
  ctx.drawImage(img,x,y);
}
img.src="peti.png";

document.onkeydown=function(e)
{
  pos=1;
  key=window.event?e.keyCode:e.which;
}
document.onkeyup=function(e){pos=0;}

// moving

setInterval(function()
{ 
  magicHP -= 1;
  magicSP -= 1;

  let checkNelliX = [];
  let checkNelliY = [];
  for(let i = - 25; i < 25; i++) {
    checkNelliX.push(xNelliRand + i);
    checkNelliY.push(yNelliRand + i);
  }

  let checkBalazskaxdX = [];
  let checkBalazskaxdY = [];
  for(let i = - 25; i < 25; i++) {
    checkBalazskaxdX.push(xBalazskaxdRand + i);
    checkBalazskaxdY.push(yBalazskaxdRand + i);

  }
// mentors new random positon

  if (checkNelliX.indexOf(x) !== -1 && checkNelliY.indexOf(y) !== -1){ 
     xNelliRand = Math.floor((canvas.scrollWidth - 50)* Math.random());
     yNelliRand = Math.floor((canvas.scrollWidth - 50)* Math.random());
      magicHP = 100;
      
  } 

 if (checkBalazskaxdX.indexOf(x) !== -1 && checkBalazskaxdY.indexOf(y) !== -1){ 
     xBalazskaxdRand = Math.floor((canvas.scrollWidth - 50)* Math.random());
     yBalazskaxdRand = Math.floor((canvas.scrollWidth - 50)* Math.random());
      magicSP = 100;
      
  } 
  if (magicHP > 0 || magicSP > 0) {

  }
  if(pos==0)return;
  
  if(x >= 0) {
    if(key==37)x-=2;
    if(key==37)img.src = magicHP > 0 
      ? "peti_left_hp.png" 
      : magicSP > 0 
        ? "peti_left_sp.png" 
        : "peti_left.png";
    if(key==37)xNelli = xNelliRand;
    if(key==37)yNelli = yNelliRand;
    if(key==37)xBalazskaxd = xBalazskaxdRand;
    if(key==37)yBalazskaxd = yBalazskaxdRand;

  }
  if(y >= 0) {
    if(key==38)y-=2;
    if(key==38)img.src = magicHP > 0 
      ? "peti_back_hp.png" 
      : magicSP > 0 
        ? "peti_back_sp.png" 
        : "peti_back.png";
    if(key==38)yNelli = yNelliRand;
    if(key==38)xNelli = xNelliRand;
    if(key==38)yBalazskaxd = yBalazskaxdRand;
    if(key==38)xBalazskaxd = xBalazskaxdRand;
  }
  
  if(x <= canvas.width - 50) {
    if(key==39)x+=2;
    if(key==39)img.src = magicHP > 0 
      ? "peti_right_hp.png" 
      : magicSP > 0 
        ? "peti_right_sp.png" 
        : "peti_right.png";
    if(key==39)xNelli = xNelliRand;
    if(key==39)yNelli = yNelliRand;
    if(key==39)xBalazskaxd = xBalazskaxdRand;
    if(key==39)yBalazskaxd = yBalazskaxdRand;
  }

  if(y <= canvas.height - 50) {
    if(key==40)y+=2;
    if(key==40)img.src = magicHP > 0 
      ? "peti_hp.png" 
      : magicSP > 0 
        ? "peti_sp.png" 
        : "peti.png";
    if(key==40)yNelli = yNelliRand;
    if(key==40)xNelli = xNelliRand;
    if(key==40)yBalazskaxd = yBalazskaxdRand;
    if(key==40)xBalazskaxd = xBalazskaxdRand;
  }
  canvas.width=canvas.width;
 
  //background gradient

  grdbg.addColorStop(0.1, "hsla(218, 34%, 34%, 1)");
  grdbg.addColorStop(1, "hsla(218, 19%, 66%, 1)");
  ctx.fillStyle = grdbg;
  ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);
  
  // hero
  ctx.drawImage(img,x,y);
  
  // nelli
  ctx.drawImage(imgNelli,xNelli,yNelli);

  // balazskaxd
  ctx.drawImage(imgBalazskaxd,xBalazskaxd,yBalazskaxd);
  
 

},5);
}//]]>  