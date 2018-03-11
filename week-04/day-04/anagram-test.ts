


'use strict'

import {test} from 'tape';
import {anagram} from './anagram';


test('testanagram', t => {
  const testA = 'Almafa';
  const testB = 'Fmalaa';
  t.equal(anagram(testA, testB), true);
  t.end();
});