


'use strict'


// Anagram
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.
'use strict'

export function anagram(a: string, b: string): boolean { 
let letA = a.toLowerCase().split('').sort().join('');
let letB = b.toLowerCase().split('').sort().join('');

if (letA === letB) {
  return true
}
else {
  return false
}
}
console.log(anagram('Green Fox Academy', 'Cream Fade Oxygen'));


 