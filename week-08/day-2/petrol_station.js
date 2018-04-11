'use strict';

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