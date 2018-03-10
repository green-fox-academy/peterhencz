



'use strict'

export class SumClass {
  private list: any[];

  constructor(list: any[]) {
    this.list = list;
  }

  sum(): any {
      let sum = 0;
      this.list.forEach((item) => {
        if (typeof item === 'number') {
          sum += item;
        }
      });
      return sum;
  }
}




