



'use strict'

// Create a function that takes a filename as string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// If the file does not exist, the function should return 0 and not break.

// example: on the input "afile.txt" the function should return 28 - print this result
// example: on the input "not-a-file" the function should return 0 - print this result

let a = require('fs');

function countAs(a: number) {
  let fileContent = a.readFileSync('afile.txt', 'utf-8');
  let as: number [] = fileContent.split('a');
  return as.length;
}
try {
  console.log(countAs(a));
}
catch (error) {
  console.log('0');
}


// function printLines() {
//   let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
//   let lineNumbers: number[] = fileContent.split('\n');
//   return lineNumbers.length;
// }
// try {
//   console.log(printLines());
// }
// catch (error) {
//   console.log('0');
// }
