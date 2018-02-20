'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText :string = "";
let myTodo: string = 'My todo:\n';
let todoLine1: string = ' - Buy milk\n';
let todoLine2: string = ' - Download games\n';
let todoLine3: string = '      - Diablo';

todoText = myTodo.concat(todoLine1, todoLine2, todoLine3);
console.log(todoText);