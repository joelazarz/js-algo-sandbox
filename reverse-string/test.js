const reverse = require('./index');
const reverseTwo = require('./index');
const reverseThree = require('./index');
const reverseFour = require('./index');
const reverseFive = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse function exists', () => {
  expect(reverseTwo).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseTwo('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseTwo('  abcd')).toEqual('dcba  ');
});

test('Reverse function exists', () => {
  expect(reverseThree).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseThree('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseThree('  abcd')).toEqual('dcba  ');
});

test('Reverse function exists', () => {
  expect(reverseFour).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseFour('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseFour('  abcd')).toEqual('dcba  ');
});

test('Reverse function exists', () => {
  expect(reverseFive).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseFive('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseFive('  abcd')).toEqual('dcba  ');
});