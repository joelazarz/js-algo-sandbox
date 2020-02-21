
// const str = "hello world"

// first attempt
function capitalize_alt(str) {
  const arr = str.split(' '); // ['hello', 'world']
  let newArr = [];

  for (let word of arr) {
    let wordArr = [];
    wordArr.push(word[0].toUpperCase());
    wordArr.push(word.slice(1));
    newArr.push(wordArr.join(''));
  };

  return newArr.join(' ');
}


// 
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  };

  return words.join(' ');
}


// how else can we capitalize?
function capitalize_alt2(str) {
  let result = str[0].toUpperCase();

  for (let i=1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}


module.exports = capitalize; 