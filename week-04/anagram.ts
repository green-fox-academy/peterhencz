


'use strict'


// Anagram
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.
'use strict'

export function anagram(a: string, b: string): boolean { 
let letA = (a.split('').sort().join('').toLowerCase());
let letB = (b.split('').sort().join('').toLowerCase());

if (letA === letB) {
  return true
}
else {
  return false
}
}


console.log(anagram('Cream Deaf Oxygen', 'Green Fox Academy'))


