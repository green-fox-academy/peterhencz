
let counter = (() => {
  var privateCounter = 0;

  return {
    increment: () => {
      privateCounter += 1;
    },
    decrement: () => {
      privateCounter -= 1;
    },
    value: () => {
      return privateCounter;
    }
  }
})();

function getObj () {
  return {
    increment: () => {
      privateCounter += 1;
    },
    decrement: () => {
      privateCounter -= 1;
    },
    value: () => {
      return privateCounter;
    }
  }
}

let counter = getObj()

(function() {
  return 3
})()