const fibonacci = function (n) {
  const parsedN = Number(n);
  if (parsedN < 0) return "OOPS";
  const arr = [0, 1, 1];
  for (let i = 3; i <= parsedN; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[parsedN];
};

// Do not edit below this line
module.exports = fibonacci;
