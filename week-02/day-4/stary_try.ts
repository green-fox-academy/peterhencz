'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


/*  tasks for the weekend:
                        
    - fix the rng parts
    - change colors to hsla (almost done)
    - write one loop for the craters ( - crater positions inside the moon area
                                       - crater sizes between ? and ?  
                                       - gradient colorstop positions  )
                                       
    - set canvas-free values with canvas.scrollWidth & canvas.scrollHeight
    - milky way oriented stars (left & right side?) (aron did it!)
    - add clouds, planes and angels

*/

// sky

let grds = ctx.createLinearGradient(0, canvas.scrollHeight*0.4, canvas.scrollWidth, canvas.scrollHeight*0.8);
    grds.addColorStop(0, 'hsla(203, 33%, 11%, 1)');
    grds.addColorStop(0.3, 'hsla(203, 18%, 20%, 1)');
    grds.addColorStop(0.6, 'hsla(203, 33%, 11%, 1)');
    ctx.fillStyle = grds;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);


// aron fele csillageloszlas - right side

for (let i = 1; i<= 1200; i++) {
    let x: number = (canvas.scrollWidth)/0.002/(0.4*(i*5))+140;
    let y: number = ((Math.random() * (canvas.scrollHeight)));
    for (let j: number = 0; j < 100; j++) {
        if (j * 4 < y && ((j + 1) * 4) > y) {     
        x -= j * 1.2;
        function drawStars(x,y) {  
            ctx.fillStyle = ctx.fillStyle = "rgba("+ (237) + "," + (199) + "," + (11)+ "," + (((i*4) * 0.001)/1.2) + ")";
            ctx.fillRect(x, y, (i*0.00056), (i*0.00056));
            }
   drawStars(x,y);
        }
    }
}
// aron fele csillageloszlas - left side

for (let i = 1; i<=1200; i++) {
    let x: number = (canvas.scrollWidth)*3/(6/(i*0.00032))+150;
    let y: number = ((Math.random() * (canvas.scrollHeight)));
    for (let j: number = 0; j < 100; j++) {
        if (j * 4 < y && ((j + 1) * 4) > y) {     
        x -= j * 1.2;
        function drawStars(x,y) {  
            ctx.fillStyle = ctx.fillStyle = "rgba("+ (237) + "," + (199) + "," + (11)+ "," + (((i*4) * 0.001)/1.2) + ")";
            ctx.fillRect(x, y, (i*0.00056), (i*0.00056));
            }
         drawStars(x,y);
        }
    }
}


    // stars - third layer (for full canvas)

for (let i = 1; i<=1000; i++) {
    let x: number = ((Math.random() * (canvas.scrollWidth)));
    let y: number = ((Math.random() * (canvas.scrollHeight)));
    function drawStars(x,y) {  
        ctx.fillStyle = ctx.fillStyle = 'hsla('+ (50) + ',' + (91) + ',' + (49)+ ',' + (i * 0.00006) + ')';
        ctx.fillRect(x, y, (i*0.00076), (i*0.00076));
        }
     drawStars(x,y);
}


// moon

function drawMoonGrd() {  
    let grdmg = ctx.createRadialGradient(390, 140, 100, 370, 140, 0);
    grdmg.addColorStop(0, 'hsla(0, 0%, 16%, 0)');
    grdmg.addColorStop(1, 'hsla(200, 23%, 37%, 0.5)');
    ctx.fillStyle = grdmg;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

}

function drawMoon() {  
    ctx.beginPath();
    ctx.arc(400, 130, 41, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollHeight/4, canvas.scrollWidth, canvas.scrollWidth*1.5, canvas.scrollHeight/2);
    grd.addColorStop(0.5, 'hsla(200, 13%, 37%, 1)');
    grd.addColorStop(0.55, 'hsla(201, 23%, 17%, 1)');
    ctx.fillStyle = grd;
    ctx.fill();
 
}

// moon craters


function drawMoonCrater1() {  
    ctx.beginPath();
    ctx.arc(405, 108, 9.6, 0, Math.PI * 2, true);
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.2, 'hsla(200, 13%, 37%, 1)');
    grd.addColorStop(0.48, 'hsla(201, 23%, 17%, 1)');
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater2() {  
    ctx.beginPath();
    ctx.arc(412, 150, 6, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.44, 'hsla(200, 13%, 37%, 1)');
    grd.addColorStop(0.5, 'hsla(201, 23%, 17%, 1)');
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater3() {  
    ctx.beginPath();
    ctx.arc(380, 140, 8, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.5065, 'hsla(200, 13%, 37%, 1)');
    grd.addColorStop(0.53, 'hsla(201, 23%, 17%, 1)');
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater4() {  
    ctx.beginPath();
    ctx.arc(380, 113, 4, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.48, 'hsla(200, 13%, 37%, 1)');
    grd.addColorStop(0.51, 'hsla(201, 23%, 17%, 1)');
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater5() {  
    ctx.beginPath();
    ctx.arc(424, 130, 7, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.41, 'hsla(200, 13%, 37%, 1)');
    grd.addColorStop(0.46, 'hsla(201, 23%, 17%, 1)');
    ctx.fillStyle = grd;
    ctx.fill();
 
}

drawMoonGrd();
drawMoon();
drawMoonCrater1();
drawMoonCrater2();
drawMoonCrater3();
drawMoonCrater4();
drawMoonCrater5();



