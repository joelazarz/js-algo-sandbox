
function reverseInt(int) {
  return parseInt(Array.from(String(int)).reverse().join('')) * Math.sign(int);
}

module.exports = reverseInt;