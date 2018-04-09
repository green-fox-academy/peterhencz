'use strict'

const test = require('tape');
const calculateResult = require('./calculate');

test('zero is 0', (t) => {
  const result = 0;
  const frames = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],                                
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})

