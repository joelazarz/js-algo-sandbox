// console logs the numbers from 1 to n 
// for multiples of three "fizz" is logged
// for multiples of five "buzz" is logged
// for multipes of three and five "fizzbuzz" is logged

function fizzbuzz(n) {
  for(i=1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  };
}

module.exports = fizzbuzz;