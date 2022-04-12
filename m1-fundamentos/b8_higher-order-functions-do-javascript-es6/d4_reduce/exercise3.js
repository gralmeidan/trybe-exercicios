const arr = require('./books');

const expectedResult = 43;

const ageAtRelease = book => book.releaseYear - book.author.birthYear

function averageAge() {
  return arr.reduce((result, book) => result + ageAtRelease(book), 0) / arr.length
}

console.log(averageAge());