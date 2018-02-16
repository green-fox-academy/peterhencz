'use strict'


// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.


for (let n: number = 1; n <= 100 ; n++) { 
    if ((n % 3 == 0) && (n % 5 == 0)) {
        console.log("FIZZBUZZ!");
        continue;
        }

    if ((n % 3 != 0) && (n % 5 == 0)) {
        console.log("FIZZ!");
        continue;
        }

    if ((n % 3 == 0) && (n % 5 != 0)) {
        console.log("BUZZ!");
        continue;
        }
        { 
        console.log(n);
        }
}
