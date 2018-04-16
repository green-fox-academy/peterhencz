'use strict'

require('es6-promise');
   
//task 2.    

/* 
var cica= new Promise(function (fulfill, reject) {
  setTimeout(function() { 
   fulfill("FULFILLED!");
  }, 300);
})
.then(console.log);
*/


// task 3.

// var cica2 = new Promise(function (fulfill, reject) {
// setTimeout(function() { 
//    reject(new Error('REJECTED!'));
//   }, 300);
// })

// function onReject (error) {
//   console.log(error.message)
// }

// cica2.then(null, onReject);

//task 4

var cica3 = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message)
};

cica3.then(console.log, onReject);
