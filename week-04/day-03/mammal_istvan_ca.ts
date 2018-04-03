


/************
 * Abstract *
 ************/

abstract class Mammal {

  private hungerness: number = 50;

  private tireness: number = 50;

  eat() {
    this.hungerness--;
  }

  sleep() {
    this.tireness--;
  }

  doDailyRoutine() {
    this.haveSomeFun();
    this.eat();
    this.sleep();
  }

  abstract haveSomeFun();

  abstract die();
}

let myMammal: Mammal = new Mammal();
myMammal.haveSomeFun();

abstract class Human extends Mammal {
  die() {
    //
  }
}

class Female extends Human {
  haveSomeFun() {

  }
}

class Dolphin extends Mammal {
  haveSomeFun() {
    
  }
}

class Horse extends Mammal {
  haveSomeFun() {
    
  }
}