function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(str) {
  return str.replace(
    /(a|e|i|o|u)/g,
    (match) => ['a', 'e', 'i', 'o', 'u'].indexOf(match) + 1
  );
}
function decode(str) {
  return str.replace(
    /(1|2|3|4|5)/g,
    (match) => ['a', 'e', 'i', 'o', 'u'][match - 1]
  );
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };
