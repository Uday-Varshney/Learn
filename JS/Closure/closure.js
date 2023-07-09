// closure is the combination of a function bundled together with references to its surrounding state
var sum = function (a, b, c) {
  return {
    getSumOfTwo: function () {
      return a + b;
    },
    getSumOfThree: function () {
      return a + b + c;
    },
  };
};

var store = sum(1, 4, 7);
console.log(store.getSumOfTwo());
console.log(store.getSumOfThree());
