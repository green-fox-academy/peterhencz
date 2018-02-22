'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)



// sky

let grds = ctx.createLinearGradient(canvas.scrollWidth/2, 0, canvas.scrollWidth/2.6, canvas.scrollHeight);
    grds.addColorStop(0.4,"#101b28");
    grds.addColorStop(1,"#1b2e47");
    ctx.fillStyle = grds;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

// stars

for (let i = 1; i<=135; i++) {
    let x: number = (Math.random() * (canvas.scrollWidth - 5));  
    let y: number = (Math.random() * (canvas.scrollHeight - 5));
    function drawStars(x,y) {  
        ctx.fillStyle = ctx.fillStyle = "rgba("+ (237) + "," + (199) + "," + (11)+ "," + (i * 0.025) + ")";
        ctx.fillRect(x, y, (0.012 * i), (0.012 * i));
        }
    drawStars(x,y);
}

// moon


function drawMoon() {  
    ctx.beginPath();
    ctx.arc(400, 130, 40, 0, Math.PI * 2, true); // Outer circle
    let grd = ctx.createLinearGradient(0, 0, canvas.scrollWidth/2, canvas.scrollHeight);
    grd.addColorStop(0.6, "#596d77");
    grd.addColorStop(0.7, "#242b30");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater() {  
    ctx.beginPath();
    ctx.arc(405, 108, 12, 0, Math.PI * 2, true); // Outer circle
    let grd = ctx.createLinearGradient(canvas.scrollWidth/4.5, 0, canvas.scrollWidth/2, canvas.scrollHeight);
    grd.addColorStop(0.44, "#242b30");
    grd.addColorStop(0.53, "#596d77");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater2() {  
    ctx.beginPath();
    ctx.arc(412, 150, 10, 0, Math.PI * 2, true); // Outer circle
    let grd = ctx.createLinearGradient(canvas.scrollWidth/2.6, 0, canvas.scrollWidth, canvas.scrollHeight);
    grd.addColorStop(0.42, "#242b30");
    grd.addColorStop(0.52, "#596d77");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater3() {  
    ctx.beginPath();
    ctx.arc(380, 140, 8, 0, Math.PI * 2, true); // Outer circle
    let grd = ctx.createLinearGradient(canvas.scrollWidth/2.6, 0, canvas.scrollWidth, canvas.scrollHeight);
    grd.addColorStop(0.34, "#242b30");
    grd.addColorStop(0.50, "#596d77");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

drawMoon();
drawMoonCrater();
drawMoonCrater2();
drawMoonCrater3();


// moon gradient

function drawMoonGrd {  
    let grdmg = ctx.createRadialGradient(405, 100, 140, 405, 100, 0);
    grdmg.addColorStop(0, 'rgba(40, 40, 40, 0)');
    grdmg.addColorStop(1, 'rgba(124, 146, 158, 0.4)');
    ctx.fillStyle = grdmg;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);


}

drawMoonGrd();