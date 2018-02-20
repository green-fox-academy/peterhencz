'use strict';

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let newString: string = ("always takes longer than ");
let firstPart: string = quote.slice (0, quote.indexOf('you'));
let secondPart: string = quote.slice (quote.indexOf('you'), -1);


console.log(firstPart + newString + secondPart);