'use strict';  
  
class Pirate {
  name: string;
  hasWoodenLeg: boolean;
  gold: number;

  constructor(name: string, hasWoodenLeg: boolean, gold: number) {
    this.name = name;
    this.hasWoodenLeg = hasWoodenLeg;
    this.gold = gold;
  }
}
  
// Given this list...
function initializePirates(): Pirate[] {
  let pirates = [];
  pirates.push(new Pirate("Olaf", false, 12));
  pirates.push(new Pirate("Uwe", true, 9));
  pirates.push(new Pirate("Jack", true, 16));
  pirates.push(new Pirate("Morgan", false, 17));
  pirates.push(new Pirate("Hook", true, 20));
  return pirates;
}


function print(pirates: Pirate[]) {
  pirates.forEach(function (value) {
      console.log(value);
  });
}

let pirates = initializePirates(); { 
 
 function listedPirates() {  
  pirates.filter(function (hasWoodenLeg) { 
    return Boolean(true); 
  });
    console.log(listedPirates());
}
    print(pirates);
}


// Write a function that takes any list that contains pirates as in the example,
// And returns a list of names containing the pirates that
// - have wooden leg and
// - have more than 15 gold
