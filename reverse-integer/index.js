
// let int = -23
function reverseInt(int) {
  return parseInt(Array.from(String(int)).reverse().join('')) * Math.sign(int);   // -32
}


// let int = -23
function reverseIntTwo(int) {
  return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int)   // -32
}


// easier to understand
// let int = -23
function reverseIntThree(int) {
  const reversed = int
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(int);       // -32
}



module.exports = reverseInt; 
module.exports = reverseIntTwo; 
module.exports = reverseIntThree; 