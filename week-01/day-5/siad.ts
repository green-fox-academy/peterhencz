'use strict'


// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let everySeconds: number = 24 * 60 * 60;
let remainingSeconds: number = everySeconds - ((((currentHours * 60) + currentMinutes) * 60) + currentSeconds);
    console.log(remainingSeconds);
