/***************
 * Interface I *
 ***************/

class PetrolStation {
  fill(anything: Fillable) {
    anything.fill();
  }
}

interface Fillable {
  fill();
}

interface Washable {
  wash();
}

class Vehicle implements Fillable, Washable {
  private tank: number;
  private clearness: number;

  wash() {
    this.clearness += 10;
  }

  fill() {
    this.tank += 20;
  }
}

class Glass implements Fillable {
  fill() {
    undefined;
  }

  empty() {
    undefined;
  }
}

class Car extends Vehicle {}
class Motor extends Vehicle {}

let myPetrolStation: PetrolStation = new PetrolStation()
let myCar = new Car();
let myGlass = new Glass();
myPetrolStation.fill(myCar);
myPetrolStation.fill(myGlass);