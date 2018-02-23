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
    - write one loop for the craters ( - crater positions inside the moon area
                                       - crater sizes between ? and ?  
                                       - gradient colorstop positions  )
    - add clouds, planes and angels
    - set canvas-free values with canvas.scrollWidth & canvas.scrollHeight
    - milky way oriented stars
    - add clouds, planes and angels

    */

// sky

let grds = ctx.createLinearGradient(0, canvas.scrollHeight*0.4, canvas.scrollWidth, canvas.scrollHeight*0.8);
    grds.addColorStop(0,"#161e23");
    grds.addColorStop(0.3,"#253742");
    grds.addColorStop(0.6,"#161e23");
    ctx.fillStyle = grds;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

// stars - normal version

for (let i = 1; i<=1000; i++) {
    let x: number = ((Math.random() * (canvas.scrollWidth)));  
    let y: number = ((Math.random() * (canvas.scrollHeight)));
    function drawStars(x,y) {  
        ctx.fillStyle = ctx.fillStyle = "rgba("+ (237) + "," + (199) + "," + (11)+ "," + (i * 0.001) + ")";
        ctx.fillRect(x, y, (i/1000), (i/1000));
        }
   drawStars(x,y);
}



// sun gradient

function sunBGrd() {  
    let grdsnbgrd = ctx.createRadialGradient(220, 100, 20, 220, 100, 0);
    grdsnbgrd.addColorStop(0.8, 'rgba(40, 40, 40, 0)');
    grdsnbgrd.addColorStop(1, 'rgba(178, 148, 1, 1)');
    ctx.fillStyle = grdsnbgrd;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

}


// moon

function drawMoonGrd() {  
    let grdmg = ctx.createRadialGradient(390, 140, 100, 370, 140, 0);
    grdmg.addColorStop(0, 'rgba(40, 40, 40, 0)');
    grdmg.addColorStop(1, 'rgba(73, 102, 117, 0.5)');
    ctx.fillStyle = grdmg;
    ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);

}

function drawMoon() {  
    ctx.beginPath();
    ctx.arc(400, 130, 41, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollHeight/4, canvas.scrollWidth, canvas.scrollWidth*1.5, canvas.scrollHeight/2);
    grd.addColorStop(0.51, "#496675");
    grd.addColorStop(0.56, "#212e35");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

// moon craters


function drawMoonCrater1() {  
    ctx.beginPath();
    ctx.arc(405, 108, 9.6, 0, Math.PI * 2, true);
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.26, "#496675");
    grd.addColorStop(0.51, "#212e35");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater2() {  
    ctx.beginPath();
    ctx.arc(412, 150, 6, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.44, "#496675");
    grd.addColorStop(0.5, "#212e35");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater3() {  
    ctx.beginPath();
    ctx.arc(380, 140, 7, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.5065, "#496675");
    grd.addColorStop(0.53, "#212e35");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater4() {  
    ctx.beginPath();
    ctx.arc(380, 113, 3, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.48, "#496675");
    grd.addColorStop(0.51, "#212e35");
    ctx.fillStyle = grd;
    ctx.fill();
 
}

function drawMoonCrater5() {  
    ctx.beginPath();
    ctx.arc(424, 130, 7, 0, Math.PI * 2, true); 
    let grd = ctx.createLinearGradient(canvas.scrollWidth*1.5, canvas.scrollHeight/2, canvas.scrollWidth/4, canvas.scrollWidth);
    grd.addColorStop(0.43, "#496675");
    grd.addColorStop(0.45, "#212e35");
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



