
// // Dominoes
// // You have the list of Dominoes
// // Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
// // eg: [2, 4], [4, 3], [3, 5] ...

// class Domino {
//   values: number[];
//   constructor(valueA: number, valueB: number) {
//       this.values = [valueA, valueB];
//   }
// }

// export {Domino};


interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);