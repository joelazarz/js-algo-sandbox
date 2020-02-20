
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


module.exports = capitalize; 