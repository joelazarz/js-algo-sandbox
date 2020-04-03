

function steps(n) {

  for(let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if(column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    };

    console.log(stair);
  };
};

// alternate solution using recursion
function recursiveSteps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  };

  if (n === stair.length) {
    console.log(stair);
    return recursiveSteps(n, row + 1);
  };

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  };

  recursiveSteps(n, row, stair);
};


module.exports = steps;