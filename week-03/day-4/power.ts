'use strict'

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(i: number, j: number) {
  if (j === 0) {
    return 1;
  }
    else { 
    return i * power(i, j - 1);
  }
}

console.log(power(5, 0))
