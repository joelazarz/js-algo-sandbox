

function reverse(string) {
  let splitString = string.split('');
  let reverseArray = splitString.reverse();
  let joinedArray = reverseArray.join('');

  return joinedArray; 
};

module.exports = reverse;