

'use strict'

// Flyable

// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement yourˇFlyable interface


import {Bird} from './animal_in_the_zoo';

interface Flyable {
  land();
  fly();
  takeOff();
}


abstract class Vehicle {
	type: string;
	distanceFromDestination: number;
	altitude: 0;
	distance: 0;

	constructor(type: string, distanceFromDestination?: number, altitude?: number, distance?: number) {

		this.type = type;
		this.distanceFromDestination = distanceFromDestination;
		this.distance = 0;
		this.altitude = 0;
	}
}

class Helicopter extends Vehicle implements Flyable {
		
	land(): any {
		this.altitude--
		if (this.distanceFromDestination == 0) {
				console.log(`${this.type} reached the destination.`);
				return
			}
		else {
			return 'MAYDAY MAYDAY';
		}
 	}
	
	fly(): any {
		this.distance++;
		this.distanceFromDestination--;
		return
	}

	takeOff(): any { 
		this.altitude++  
		this.distance++
		this.distanceFromDestination--
		return 'Please fasten seat belt';
	}
}


let heli = new Helicopter('HellyPotter', 5);


console.log('\n');
console.log(heli);
console.log('\n');
console.log(heli.takeOff());
heli.fly();
heli.fly();
heli.fly();
heli.fly();
console.log('\n');
console.log(heli);
console.log('\n');
console.log(heli.land());
console.log('\n');
console.log(heli);
console.log('\n');




