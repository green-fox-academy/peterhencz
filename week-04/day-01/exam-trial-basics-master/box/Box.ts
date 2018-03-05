'use strict'

// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters (numbers)
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume

class Cuboid {
  private x: number;
  private y: number;
  private z: number;
  public no: string = '';


  constructor(x: number, y: number, z: number, no: string) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.no = no;
  
  }

  get sizeA(): number {
    return this.x;
  }

  set sizeA(x: number) {
    this.x = x;
  }

  get sizeB(): number {
    return this.x;
  }

  set sizeB(y: number) {
    this.y = y;
  }

  get sizeC(): number {
    return this.z;
  }
  set sizeC(z: number) {
    this.z = z;
  }

  get NumberOfCuboid(): string {
    return this.no;
  }

  getSurface() {
    return 2 * (this.x * this.y + this.y * this.z + this.z * this.x);
  }
  getVolume() {
    return this.x * this.y * this.z;
  }

  statusSF() {
    console.log(`The surface of the ${this.no} is: ${this.getSurface()}`)
  }
  statusV() {
    console.log(`The volume of the ${this.no} is: ${this.getVolume()}`)
  }
}

let cube1 = new Cuboid(8, 6, 5, 'cube1');
let cube2 = new Cuboid(470, 103, 784, 'cube2');

cube1.statusSF();
cube1.statusV();

cube2.statusSF();
cube2.statusV();

