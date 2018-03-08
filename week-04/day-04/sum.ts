'use strict'

export class SumClass {
  private list: number[];

  constructor(list: number[]) {
    this.list = list;
  }

  sum(): any {
    if (Array.isArray(this.list)) {
      return this.list.reduce((a, b) => a + b, 0);
    }
    else {
      return '0'
    }
  }
}


