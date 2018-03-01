'use strict'

// Write a recursive function that takes one parameter: n and counts down from n.



function countDown(i: number) {
  if (i <= 1) {
    return 1;
  }
  else {
    return countDown(i - 1);
  }
}
console.log(countDown(10));
