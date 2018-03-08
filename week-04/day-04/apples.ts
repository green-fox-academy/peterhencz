

'use strict'

export class Fruits {
  fruit: string;

  getApple(): string {
   return 'red apple'
  }
}

let apple = new Fruits;
console.log(apple.getApple());
