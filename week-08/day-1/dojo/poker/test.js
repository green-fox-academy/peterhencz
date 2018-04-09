const test = require('tape');
const pokerCaculator = require('./pokerCalculator');

test('high card in whitehand: Ace', (t) => {
  const expectedResult = 'White wins! - (High card: Ace)';
  const blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'AH'];

  t.equal(pokerCaculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('high card in blackhand: Ace', (t) => {
  const expectedResult = 'Black wins! - (High card: Ace)';
  const blackHand = ['2H', '3D', '5S', '9C', 'AD'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'KD'];

  t.equal(pokerCaculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('high card in blackhand: Ten', (t) => {
  const expectedResult = 'Black wins! - (High card: Ten)';
  const blackHand = ['2H', '3D', '5S', '6C', 'TH'];
  const whiteHand = ['2C', '3H', '4S', '8C', '9D'];

  t.equal(pokerCaculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('pair in black hand', (t) => {
  const expectedResult = 'Black wins! - (Pair: 5)';
  const blackHand = ['2H', '5D', '5S', 'KC', 'AH'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'KD'];

  t.equal(pokerCaculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('pair in white hand', (t) => {
  const expectedResult = 'White wins! - (Pair: 8)';
  const blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];

  t.equal(pokerCaculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('drill in black hand', (t) => {
  const expectedResult = 'Black wins! - (Drill: 2)';
  const blackHand = ['2H', '2D', '2S', 'TC', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];

  t.equal(pokerCaculator(blackHand, whiteHand), expectedResult);
  t.end();
});