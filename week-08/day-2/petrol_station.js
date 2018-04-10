'use strict';
// Create and object called car
//  - It should store its petrol level called petrolLevel
//  - It should store its petrol capacity called petrolCapacity
//  - It should have a refill(amount) method, that increments the petrol level,
//    than returns how much petrol it consumed from the given amount
//  - Initialize the petrol level to zero and the capacity to 50 
//
// Create an object called station
//  - It should store petrol amount called petrolStorage
//  - It should have a provide(car) method that calls the refill method of the car
//    with the stored petrol amount as a parameter, then decrement the used petrol
//  - Initialize the petrol amount to 3000

const car = {
  petrolLevel: 5,
  petrolCapacity: 50,
  refill: function (amount) {
    const petrol = amount - (this.petrolCapacity - this.petrolLevel);
    this.petrolLevel += amount - petrol;
    return petrol;
  }
};

const oilCompany = {
  oilBarrels: 1000,
  getFuel: function(request) {
    this.oilBarrels -= request;
    return request;
  },
  getStorage: function() {
    return this.oilBarrels;
  },
  addFuel: function(fuel) {
    this.oilBarrels += fuel;
  }
};

const station = {
  petrolStorage: 500,
  minPatrolLevel: 100,
  provide: function(car) {
    if (this.petrolStorage <= this.minPatrolLevel) {
      this.petrolStorage += oilCompany.getFuel(500 - this.petrolStorage) 
    }
    this.petrolStorage = car.refill(this.petrolStorage);
  }
};


setInterval(() => {
  if (this.oilBarrels <= 600) { 
    oilCompany.addFuel(10);
    return this.oilBarrels;
  }
}, 1000);

console.log(station.minPatrolLevel);
console.log(`Car's petrolLevel: ${car.petrolLevel}`);
console.log(`Station's petrolStorage: ${station.petrolStorage}`);

station.provide(car);

console.log(`Car's petrolLevel: ${car.petrolLevel}`);
console.log(`Station's petrolStorage: ${station.petrolStorage}`);


car.petrolLevel = 30;
station.provide(car);

console.log(`Car's petrolLevel: ${car.petrolLevel}`);
console.log(`Station's petrolStorage: ${station.petrolStorage}`);

car.petrolLevel = 10;
station.provide(car);


console.log(`Car's petrolLevel: ${car.petrolLevel}`);
console.log(`Station's petrolStorage: ${station.petrolStorage}`);

car.petrolLevel = 40;
station.provide(car);
car.petrolLevel = 40;
station.provide(car);
car.petrolLevel = 0;
station.provide(car);
car.petrolLevel = 0;
station.provide(car);
car.petrolLevel = 0;
station.provide(car);
car.petrolLevel = 0;
station.provide(car);
car.petrolLevel = 0;
station.provide(car);
car.petrolLevel = 0;
station.provide(car);

console.log(`Car's petrolLevel: ${car.petrolLevel}`);
console.log(`Station's petrolStorage: ${station.petrolStorage}`);

car.petrolLevel = 0;
station.provide(car);


console.log(`Car's petrolLevel: ${car.petrolLevel}`);
console.log(`Station's petrolStorage: ${station.petrolStorage}`);