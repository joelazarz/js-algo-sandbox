const palindrome = require('./index');
const palindromeTwo = require('./index');


test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

///
test('palindrome function is defined', () => {
  expect(typeof palindromeTwo).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindromeTwo('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindromeTwo(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindromeTwo('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindromeTwo('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindromeTwo('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindromeTwo('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindromeTwo('pennep')).toBeTruthy();
});
