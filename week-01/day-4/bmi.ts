'use strict';


let massInKg: number = 81.2;
let heightInM: number = 1.78;
let bmi: number = massInKg / (heightInM * heightInM);

console.log('Your BMI is: ' + bmi.toFixed()); 



// other version with math.round

/* 

let massInKg: number = 81.2;
let heightInM: number = 1.78;
let bmi: number = Math.round(massInKg / (heightInM * heightInM));

console.log('Your BMI is: ' + bmi);

*/
