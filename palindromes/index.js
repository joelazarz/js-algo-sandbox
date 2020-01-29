
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;  // true
}


/////
function palindromeTwo(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];   // true
  });
}; 


// palindrome('aba')
// palindromeTwo('aba')

module.exports = palindrome;
module.exports = palindromeTwo;