function Animal () {
  this.hunger = 5;
  this.thirst = 5;
  
  this.eat = function() {
    this.hunger--;
  }
  this.drink = function() {
    this.thirst--;
  }
  this.play = function() {
    this.hunger++;
    this.thirst--;
  }
}

function Farm (amount) {
  this.slot = amount;
  this.animals = [];
  
  this.breed = function() {
    if (this.animals.length < this.slot) {
      this.animals.push(new Animal());
    }
  }

  this.adopte = function() {
    this.animals = this.animals.sort(function(animal1, animal2) {
      return animal2.hunger - animal1.hunger;
    });
    this.animals.pop();
  }

  this.report = function() {
    let animalStatus = '';
    if (this.animals.length === 0) {
      this.animalStatus = 'bankrupt'
    }

    if (this.animals.length < this.slot) {
      this.animalStatus = 'okay'
    }

    if (this.animals.length === this.slot) {
      this.animalStatus = 'full'
    }   
    console.log(`The farm has ${this.animals.length} living animals, we are ${this.animalStatus}`);
  }

  // this.progress = function() {
  //   for(let i = 0; i < this.animals.length; i++) {
  //     if (Math.random() >= 0.5) {
  //       Farm.animals.drink();
  //     }
  //   }
  // }
};

const SheepFarm = new Farm(20);

SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
// SheepFarm.progress();
SheepFarm.report();

// for(let i = 0; i < 8; i++) {
//   SheepFarm.animals.forEach(e => Math.random() < 0.2 ? e.play() : e.drink());
// }

console.log(SheepFarm.animals);
SheepFarm.adopte();
console.log('\n-------------------------------\n'); 
console.log(SheepFarm.animals);
console.log('\n-------------------------------\n'); 
SheepFarm.report();
 