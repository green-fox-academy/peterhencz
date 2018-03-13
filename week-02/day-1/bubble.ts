'use strict'

// //  Create a function that takes a list of numbers as parameter
// //  Returns a list where the elements are sorted in ascending numerical order
// //  Make a second boolean parameter, if it's `True` sort that list descending
// //  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
// //  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5]));
// //  should print [34, 24, 12, 9, 5]

function bubble(list: number[], choice: boolean): any {
  if (choice) { 
    return list.sort(((n1,n2) => n1 - n2));
  }
  else {
    return list.sort((n1,n2) => n1 - n2).reverse();
  }
}

console.log(bubble([34, 12, 24, 9, 5], true));
console.log(bubble([34, 12, 24, 9, 5], false));


