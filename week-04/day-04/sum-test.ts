


'use strict'

import {test} from 'tape';
import {SumClass} from './sum';

test('Test empty sum list', t => {
  let sumTest1 = new SumClass([]);

  let actual = sumTest1.sum();
  let expected = 0;

   t.equal(actual, expected);
   t.end();
});

test('Test sum list with one element', t => {
  let sumTest2 = new SumClass([418]);

  let actual = sumTest2.sum();
  let expected = 418;

   t.equal(actual, expected);
   t.end();
});

test('Test sum list with elements', t => {
  let sumTest3 = new SumClass([1, 2, 3, 4, 5]);

  let actual = sumTest3.sum();
  let expected = 15;

   t.equal(actual, expected);
   t.end();
});

test('Test sum list with a null', t => {
  let sumTest4 = new SumClass(null);

  let actual = sumTest4.sum();
  let expected = 0;

   t.equal(actual, expected);
   t.end();
});

test('Test sum list with a string', t => {
  let sumTest5 = new SumClass(['asdfasdf', 12, 'sdsfgdfg']);

  let actual = sumTest5.sum();
  let expected = 12;

   t.equal(actual, expected);
   t.end();
});

