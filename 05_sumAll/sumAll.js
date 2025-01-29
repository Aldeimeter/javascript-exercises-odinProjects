const sumAll = function (a, b) {
  let sum = 0;
  if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    const startingNumber = a < b ? a : b;
    const endingNumber = a > b ? a : b;
    for (let i = startingNumber; i <= endingNumber; i++) {
      sum += i;
    }
    return sum;
  }

  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
