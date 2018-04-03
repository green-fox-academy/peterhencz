'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function candy(arr: any[]) {
  let candy: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    candy += arr[i].candies;
  }
  return candy;
}

function age(arr: any[]) {
  let ages: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].candies < 5) {
      ages += arr[i].age;
    }
  }
}


// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


console.log(candy(students));
console.log(age(students));

