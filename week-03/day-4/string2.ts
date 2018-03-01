'use strict'


// Given a string, compute recursively a new string where all the 'x' chars have been removed.


function changeXToY(string: string) {
  if (string.indexOf('x') === -1) { 
    return string;
  }
  string = string.replace('x', '');
  return changeXToY(string);
}
console.log(changeXToY('xbbxbxbbbbxbbxbbxbbxbxbbxbbbx'))


