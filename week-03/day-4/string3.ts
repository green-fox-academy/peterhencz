'use strict'

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function separatedByAStar(string: string) {
  if (string.charAt(string.length-2) == '*') {
    return string;
  }
  string = string.match(/.{1}/g).join('*');
  return separatedByAStar(string);
}
console.log(separatedByAStar('xbbxbxbbbbxbbxbbxbbxbxbbxbbbx'))