const palindromes = function (str) {
  const cleanedWord = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char))
    .join("");
  return cleanedWord === cleanedWord.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
