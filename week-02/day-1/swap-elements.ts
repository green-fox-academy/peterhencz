'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

/*
var tmp = list[x];
list[x] = list[y];
list[y] = tmp;
*/

let abc : string [] = ['Arthur', 'Boe', 'Chloe'];
let i = abc[0];
    abc[0] = abc[2];
    abc[2] = i;

console.log(abc);
 
