'use strict'


// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.


function changeXToY(string: string) {
  if (string.indexOf('x') === -1) { 
    return string;
  }
  string = string.replace('x', 'y');
  return changeXToY(string);
}
console.log(changeXToY('xbbxbxbbbbxbbxbbxbbxbxbbxbbbx'))


