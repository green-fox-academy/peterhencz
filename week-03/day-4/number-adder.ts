'use strict'

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function countDown(i: number) {
  if (i === i) {
    return i;
  }
  else {
    return countDown(i + 1);
  }
}
console.log(countDown(10));