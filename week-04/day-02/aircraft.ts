


'use strict'


class Aircraft {
  name: string;
  ammo: number;
  maxAmmo: number;
  damage: number;
  baseDamage: number;

  constructor(name: string) { 
    this.name = name;
    this.ammo = 0;
    this.damage = this.baseDamage * this.ammo;
    this.baseDamage;

  }

  fight() {
    return this.damage;
  }

  refill() {
    this.ammo <= this.maxAmmo;
    this.ammo++
  }

}

class F16 extends Aircraft {
  
}


class F35 extends Aircraft {

}




