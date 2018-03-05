'use strict'

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
  private color: string = '';
  private width: number = 0;
  public inkAmount: number = 0;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount--;
  }
}

let redSharpie = new Sharpie('red', 3);
redSharpie.use();
redSharpie.use();
redSharpie.use();

console.log(redSharpie);


