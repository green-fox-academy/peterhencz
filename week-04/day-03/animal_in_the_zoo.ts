


'use strict'

abstract class Animal {

	name: string;
 age: number = 0;
	species: string;

	constructor(name:string) {
		this.name = name;
	}


 // animalSpecies() {}

	// getAge() {}

	getName(): string {
		return this.name;
	}

	breed() {}

}

class Reptile extends Animal {
	
	constructor(name: string, age: number) {
		super(name);
		this.age = age;
	}

	breed(): string {
		return 'laying eggs';
	}

}


// abstract class Mammal extends Animal {

// }

// abstract class Bird extends Animal {

// }


let myReptile = new Reptile("Crocodile", 5);
// let mammal = new Mammal("Koala");
// let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + myReptile.getName() + " is breeding by " + myReptile.breed() + ".");
// console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
// console.log("A " + bird.getName() + " is breeding by " + bird.breed());
