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

test('first frame\'s value', (t) => {
  const result = 1;
  const frames = [
    [1, 0],
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

test('first frame\'s result', (t) => {
  const result = 7;
  const frames = [
    [1, 6],
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

test('all frame\'s result', (t) => {
  const result = 13;
  const frames = [
    [1, 6],
    [2, 4],
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

test('all frame\'s result + spare', (t) => {
  const result = 23;
  const frames = [
    [1, 6],
    [5, 5],
    [3, 0],
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