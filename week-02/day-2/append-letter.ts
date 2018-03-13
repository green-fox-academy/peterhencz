'use strict'

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];


function appendA(a: string[]) {
  return a.map(x => x + 'a');

}


console.log(appendA(far)); 

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'

export = appendA;