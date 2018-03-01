'use strict'

// Write a recursive function that takes one parameter: n and counts down from n.



function countDown(num: number) {
  if (num <= 1) {
    return 1;
  }
  else {
    return countDown(num -1);
  }
}
console.log(countDown(10));
