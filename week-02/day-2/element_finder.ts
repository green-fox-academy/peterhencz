'use strict'

// // Write a function that checks if the array contains "7"
// // if it contains return "Hoorray" otherwise return "Noooooo"
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
// console.log(containsSeven(numbers));
// // The output should be: "Noooooo"
// // Do this again with a different solution using different list functions!
// export = containsSeven;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
let unHappy: string = "Nooooo"

function containsSeven(arr: number[]): string {
  arr.forEach(e => {
    e == 7 
    ? unHappy = 'Hooorrraaayy'
    : unHappy
  });
  return unHappy
}

console.log(containsSeven(numbers));




// function containsSeven (arr: number[]): string {
//   let check: string = 'Noooooo';
//   arr.forEach (function (item) {
//     if (item == 7) {
//       check = 'Hoorray';
//     }
//   });
//   return check;
// }