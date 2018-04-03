


'use strict'


class Plant {
  color: string;
  waterLevel: number;
  type: string;

  constructor(color: string) {
    this.color = color;
    this.waterLevel = 0;
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
    super(color);
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
  plants: Plant[];

  constructor() {
    this.plants = [];
  }

  addPlant(p: Plant) {
    this.plants.push(p);
  }

  listPlants() {
    for(let i = 0; i < this.plants.length; i++) {
      console.log(this.plants[i].plantColor);
    }
  }
  
  waterPlants(amount: number) {
    if (amount === 0) {
      return;
    }
    let thirstyPlants = 0;
    for(let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        thirstyPlants += 1;
      }
    }
    if (thirstyPlants !== 0) {
      const dose = amount / thirstyPlants;
      for(let i = 0; i < this.plants.length; i++) {
        if (this.plants[i].needsWater()) {
          this.plants[i].waterIt(dose);
        }
      }
    }
  }
}
let garden = new Garden();
garden.addPlant(new Flower('blue'));
garden.addPlant(new Tree('green'));
garden.addPlant(new Flower('purple'));
console.log(garden);
console.log('-----------------');
garden.plants[0].waterIt(9);
console.log(garden);
garden.listPlants();
garden.waterPlants(40);
console.log(garden);
