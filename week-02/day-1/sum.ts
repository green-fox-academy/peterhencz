'use strict'


// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result


let elements: number = 10;

function sum(e: number): number {
  let total: number = 0;
  for (let n: number = 1; n <= e; n++) {
    total = n + total;
  }
  return total;
}
//console.log(sum);

console.log(sum(elements));