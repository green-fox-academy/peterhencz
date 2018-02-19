'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial

let elements: number = 5;

function sum(e: number): number {
  let total: number = 1;
  for (let n: number = 1; n <= e; n++) {
    total = n * total;
  }
  return total;
}
//console.log(sum);

console.log(sum(elements));