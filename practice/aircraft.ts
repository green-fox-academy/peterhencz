
'use strict'

class Aircraft {
  private type: string;
  private ammo: number = 0;
  protected baseDamage: number;
  protected maxAmmo: number;
  private damage: number;
  
  fight() {
    this.ammo -= this.ammo;
    return this.damage = this.baseDamage * this.ammo;
  }

  refill(amount: number) {
    if (this.ammo = this.maxAmmo) {
      console.log('Ammo is full');
    } 
    else {
      return amount -= this.maxAmmo;
      console.log('Filled!');
    }
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.damage}`;
  }

  isPriority() {
  }

}


class F16 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}

class F35 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}


class Carrier {
  name: string;
  aircrafts: Aircraft [];
  storeOfAmmo: number;
  healthPoint: number;

  add() {

  }

  fill() {

  }

  fight() {

  }

  getStatus() {

  } 

}

