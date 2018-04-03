

'use strict'

// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

let list: string [] = ['1', '2', '3', '4', '5', '6', '7'];

function secondFromTheList (l: string[]): any { 
return list.filter(function(value, index, arr) {
    return index % 2 == 1;
  });
}

// function secondFromTheList (l: string[]): any { 
// return list.filter(function(value, index, arr) {
//   return index % 2 == 0;
//   });
// }

console.log(secondFromTheList(list));

