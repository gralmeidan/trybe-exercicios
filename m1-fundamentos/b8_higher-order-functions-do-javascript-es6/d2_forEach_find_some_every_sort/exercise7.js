const arr = require('./books');

const expectedResult = false;

function authorUnique() {
  let r = true;
  arr.forEach((b1) => {
    arr.forEach((b2) => {
      if (b1.author.birthYear === b2.author.birthYear) {
        r = false;
      }
    });
  });
  return r;
}

console.log(authorUnique());
