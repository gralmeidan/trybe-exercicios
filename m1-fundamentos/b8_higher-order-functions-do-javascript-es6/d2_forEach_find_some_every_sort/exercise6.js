const arr = require('./books');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return arr.some(b => b.releaseYear < 1990 && b.releaseYear >= 1980)
}
console.log(someBookWasReleaseOnThe80s());