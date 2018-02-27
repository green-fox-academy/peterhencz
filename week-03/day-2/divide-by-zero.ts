'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


let a: number = 7;

function divide() {

  if(a === 0){
    console.log('FAIL');
  } else {
    console.log(10 / a);
  }
}

divide();
