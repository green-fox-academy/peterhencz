'use strict'


// //  Create a function that takes a list of numbers as a parameter
// //  Returns a list of numbers where every number in the list occurs only once
// function unique(arr) {

// }

// //  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
// //  should print: `[1, 11, 34, 52, 61]`



function unique(arr: number[]): any {
  arr = arr.sort().reduce((a, b) => {
    const length = a.length
    if (length === 0 || a[length - 1] !== b) {
       a.push(b);
    }
    return a;
  }, []);
  return arr;
}

console.log(unique([3, 500, 92, 3, 1,  500, 67, 32, 45, 1900, 32]))



