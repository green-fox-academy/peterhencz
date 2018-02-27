'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function printLines() {
  let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
  let lineNumbers: number[] = fileContent.split('\n');
  return lineNumbers.length;
}
try {
  console.log(printLines());
}
catch (error) {
  console.log('0');
}
