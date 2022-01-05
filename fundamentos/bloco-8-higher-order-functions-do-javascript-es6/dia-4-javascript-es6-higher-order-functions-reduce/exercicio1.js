
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten() {
  // escreva seu código aqui
  return arrays.reduce((result, array) => {
    array.forEach(item => result.push(item));
    return result;
  },[]);
};

console.log(flatten(arrays));
assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);

