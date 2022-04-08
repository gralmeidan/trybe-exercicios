const arr = require('./books');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return arr.every(b => b.author.birthYear < 2000 && b.author.birthYear >= 1900);
}

console.log(everyoneWasBornOnSecXX());