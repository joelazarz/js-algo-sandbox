///

const string = "hello there!"
const chars = {}

for (let char of string) {
	if(!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char] ++;
  }
}

chars; // { h: 2, e: 3, l: 2, o: 1, ' ': 1, t: 1, r: 1, '!': 1}

// condensed
for (let char of string) {
	chars[char] = chars[char] + 1 || 1;
}

chars; // { h: 2, e: 3, l: 2, o: 1, ' ': 1, t: 1, r: 1, '!': 1} 


function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] ++;
    } else {
      charMap[char] = 1;
    };
  };

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }  
  }

  return maxChar; 

};

module.exports = maxChar;