const arr = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return (
    arr
      .reduce((str, book) => `${str}, ${book.author.name}`, '')
      .replace(/^, /, '') + '.'
  );
}

console.log(reduceNames());