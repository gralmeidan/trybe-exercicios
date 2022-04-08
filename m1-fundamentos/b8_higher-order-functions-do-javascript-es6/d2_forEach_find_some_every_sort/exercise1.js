const arr = require('./books');

function authorBornIn1947() {
  console.log(arr.find(e => e.author.birthYear === 1947));
}

authorBornIn1947()