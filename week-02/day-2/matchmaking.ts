'use strict'


'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]


let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a: string[], b: string[]) {
  let pairs: string[] = [];
    for (let i= 0; i < a.length; i++) {
      pairs = pairs.concat(girls[i], boys[i]);
    }
  return pairs;
}

console.log(makingMatches(girls, boys));


