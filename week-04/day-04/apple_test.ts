

'use strict'

import {test} from 'tape';
import {Fruits} from './apples'; 


test('apple equals', t => {
  const apple = new Fruits();

  let actual = apple.getApple();
  let expected = 'red apple';

   t.equal(actual, expected);
   t.end();
});

