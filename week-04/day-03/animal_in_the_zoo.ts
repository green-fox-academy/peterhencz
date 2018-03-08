


'use strict'

abstract class Animal {

	name: string;
	age: number = 0;
	species: string;

	constructor(name:string, age: number) {
		this.name = name;
		this.age = age;

	}

getName(): string {
		return this.name;
	}

	breed() {}
}

class Reptile extends Animal {

	breed(): string {
		return 'laying eggs';
	}
}

class Mammal extends Animal {

	breed(): string {
		return 'pushing miniature versions out.';
	}
}

export class Bird extends Animal {

	breed(): string {
		return 'laying eggs.';
	}
}


let myReptile = new Reptile("Crocodile", 5);
let mammal = new Mammal("Koala", 15);
let bird = new Bird("Parrot", 11);

console.log('\n' + "How do you breed?" + '\n');
console.log("A " + myReptile.getName() + " is breeding by " + myReptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed() + '\n');
