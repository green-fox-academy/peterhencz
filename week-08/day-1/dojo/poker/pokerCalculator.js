module.exports = (blackHand, whiteHand) => {
  // let suit = ['1', '2', '3', '4'];
  // let suitWithNames = ['H', 'D', 'C', 'S'];
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
  
  for (let i = 0; i < 3; i++) {
    let drillIndexB = row.indexOf(blackHand[i][0]);
    let drillIndexW = row.indexOf(whiteHand[i][0]);
    if (blackHand[i][0] === blackHand[i + 1][0] && blackHand[i][0] === blackHand[i + 2][0]) {
      hand = 'Drill';
      winner = 'Black';
      highCardValue = rowWithNames[drillIndexB];
    }
    if (whiteHand[i][0] === whiteHand[i + 1][0] && whiteHand[i][0] === whiteHand[i + 2][0]) {
      hand = 'Drill';
      winner = 'White';
      highCardValue = rowWithNames[drillIndexW];
    }
  }


  if (blackHand[0][1] === blackHand[1][1] && blackHand[0][1] === blackHand[2][1] && blackHand[0][1] === blackHand[3][1] && blackHand[0][1] === blackHand[4][1]) {
    hand = 'Flush';
    winner = 'Black';
    highCardValue = blackHand[0][1];
  }
  if (whiteHand[0][1] === whiteHand[1][1] && whiteHand[0][1] === whiteHand[2][1] && whiteHand[0][1] === whiteHand[3][1] && whiteHand[0][1] === whiteHand[4][1]) {
    hand = 'Flush';
    winner = 'White';
    highCardValue = whiteHand[0][1];
  }


  return `${winner} wins! - (${hand}: ${highCardValue})`;
};
