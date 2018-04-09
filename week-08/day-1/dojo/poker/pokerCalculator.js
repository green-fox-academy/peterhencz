module.exports = (blackHand, whiteHand) => {
  let row = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  let rowWithNames = ['2', '3', '4', '5', '6', '7', '8', '9', 'Ten', 'Jumbo', 'Queen', 'King', 'Ace'];
  let winner = '';
  let hand = '';
  let highCardValue = '';
  let highestBIndex = row.indexOf(blackHand[4][0]);
  let highestWIndex = row.indexOf(whiteHand[4][0]);

  if (highestBIndex < highestWIndex) {
    winner = 'White';
    hand = 'High card';
    highCardValue = rowWithNames[highestWIndex];
  } 
  if (highestWIndex < highestBIndex) {
    winner = 'Black';
    hand = 'High card';
    highCardValue = rowWithNames[highestBIndex];
  }
  
  for (let i = 0; i < 4; i++) {
    let firstIndexB = row.indexOf(blackHand[i][0]);
    let firstIndexW = row.indexOf(whiteHand[i][0]);
    if (blackHand[i][0] === blackHand[i + 1][0]) {
      hand = 'Pair';
      winner = 'Black';
      highCardValue = rowWithNames[firstIndexB];
    }
    if (whiteHand[i][0] === whiteHand[i + 1][0]) {
      hand = 'Pair';
      winner = 'White';
      highCardValue = rowWithNames[firstIndexW];
    }
  }
  return `${winner} wins! - (${hand}: ${highCardValue})`;
};
