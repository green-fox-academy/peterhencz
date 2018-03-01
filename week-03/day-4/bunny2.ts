'use strict'

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars(i: number) {
  let ears: number = 0;
  if (i < 1) {
    return ears;
  }
  ears += 2;
  i -= 1;
  if (i < 1) {
    return ears;
  }
  ears += 3;
  i -= 1;
  return ears += bunnyEars(i);
}

console.log(bunnyEars(120));


