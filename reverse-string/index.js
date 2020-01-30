

///// let str = 'hello'
function reverse(str) {
  let arr = str.split('');    // [h,e,l,l,o]
  arr.reverse();              // [o,l,l,e,h]
  return arr.join('');        // olleh
};


/////   let str = 'hello'
function reverseTwo(str) {
  return str
  .split('')        // [h,e,l,l,o]
  .reverse()        // [o,l,l,e,h]
  .join('');        // olleh
};


/////   let str = 'hello'
function reverseThree(str) {
  let reversed = '';                      // ''
  for (let character of str) {
    reversed = character + reversed;      // h, eh, leh, lleh, olleh    
  };
  
  return reversed;                        // olleh
};



/////   let str = 'hello'
function reverseFour(str) {
  return Array.from(String(str)).reverse().join('');  // olleh
};



/////    let str = 'hello'
function reverseFive(str) {
  str.split('').reduce((rev, char) => char + rev, '');  // olleh
};



// reverse('hello')
// reverseTwo('hello')
// reverseThree('hello')
// reverseFour('hello')
// reverseFive('hello')

module.exports = reverse;
module.exports = reverseTwo;
module.exports = reverseThree;
module.exports = reverseFour;
module.exports = reverseFive;