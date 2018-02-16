'use strict';

let firstNumber: number = 17296;
let secondNumber: number = 18416;
let sum: number = 0;
for(let i: number = 1; i < firstNumber; i++){
    if((firstNumber % i) === 0){
        sum += i;
    }
}
if(sum === secondNumber){
    sum = 0;
    for(let i: number = 1; i < secondNumber; i++){
        if((secondNumber % i) === 0){
            sum += i;
        }
    }
    if(sum === firstNumber){
        console.log(`${firstNumber} and ${secondNumber} are friendly numbers`);
    } else {
        console.log(`${firstNumber} and ${secondNumber} are NOT friendly numbers`);
    }
}