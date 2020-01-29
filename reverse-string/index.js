

function reverse(str) {
  let arr = str.split('');
  arr.reverse();
  return arr.join(''); // olleh
};


/////
function reverseTwo(str) {
  return str
  .split('')
  .reverse()
  .join(''); // olleh
};


/////
function reverseThree(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  };
  
  return reversed; // olleh
};

/////
function reverseFour(str) {
  return Array.from(String(str)).reverse().join('');  // olleh
};

/////
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