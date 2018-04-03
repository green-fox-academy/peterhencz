


'use strict'


class Plant {
	color: string;
	waterLevel: number;
  type: string;

	constructor(color:string) {
		this.color = color;
		this.waterLevel = 0;
		// this.type = '';
	}

	get plantColor(): string {
		return this.color;
	}

	get plantType(): string {
		return this.type;
	} 

	waterIt(amount: number) {
		this.waterLevel += amount;
	}

	needsWater(): boolean {
		return this.waterLevel < 5; 
	}
}

class Flower extends Plant {
	constructor(color: string) {
		super(color);
		this.type = 'flower';
	}
	
	waterIt(amount: number) {
    this.waterLevel += amount * 0.75;
  }
}

class Tree extends Plant {
	constructor(color: string) {
		super(color)
		this.type = 'tree';
	}

	needsWater(): boolean {
		return this.waterLevel < 10;
	}
	waterIt(amount: number) {
    this.waterLevel += amount * 0.4;
  }
}

class Garden {
	plants : Plant[];

	constructor() {
		this.plants = [];
	}

	addPlant(p: Plant) {
		this.plants.push(p);
	}

	listPlants() {
		for (let i = 0; i < this.plants.length; i++) {
			console.log(this.plants[i].plantColor);
		}
	}

	waterPlants(amount: number) {
		if(amount === 0) {
			return;
		}

		// 	this.plants.filter(function (plant) {
		// 	return plant.needsWater();
		// }).forEach(function(plant, index, array) {
		// 	plant.waterIt(amount / array.length)
		// })

this.plants.filter((e) => e.needsWater).forEach((e, i, a) => {e.waterIt(amount / a.length)
});
}
}
	

let garden = new Garden();
console.log(garden);
garden.addPlant(new Tree('yellow'));
garden.addPlant(new Flower('blue'));
console.log(garden);


