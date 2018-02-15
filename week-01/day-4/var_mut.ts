'use strict'

let a: number = 3;
    a += 10;
        console.log(a);

let b: number = 100;
    b -= 7;
        console.log(b);

let c: number = 44;
    c *= 2;
        console.log(c);

let d: number = 125;
    d /= 5;
        console.log(d);

        
let e: number = 8;
    console.log(Math.pow(e, 3));

/* 

// lelkes megoldas, csak nem ez volt a feladat :(


let f1: number = 123;
let f2: number = 345;
    if (f1 > f2) {
        console.log(f1 + ' is bigger then ' + f2);
}   else {
        console.log(f1 + ' is smaller then ' + f2);
}

let g1: number = 350;
let g2: number = 200;
    if (g1 * 2 < g2 * 2) {
        console.log(g1 + ' is smaller then ' + g2);
    } else {
        console.log(g1 + ' is bigger then ' + g2);
    }

*/

let f1: number = 123;
let f2: number = 345;
let fresult: boolean = f1 > f2;
    console.log(fresult);


let g1: number = 350;
let g2: number = 200;
let gresult: boolean = g2 * 2 > g1;
    console.log(gresult);

let h: number = 1357988018575474;
let hresult: boolean = (h % 11) == 0;
    console.log(hresult);


// for the 'i' task i've two version, this is the first one

let i1: number = 10;
let i2: number = 3;
let iresult: boolean = (Math.pow(i2, 2) < i1) && (i1 < Math.pow(i2, 3));
    console.log(iresult);

// and this is the second

let i1a: number = 10;
let i2a: number = 3;
let iresulta: boolean = (Math.pow(i2a, 2) < i1a);
let iresulta2: boolean = (Math.pow(i2a, 3) > i1a);
    console.log(iresulta && iresulta2);

