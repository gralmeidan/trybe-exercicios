const arr = require('./books');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const callback = (bigger, book) =>
  bigger.name.length < book.name.length ? book : bigger;

function longestNamedBook() {
  return arr.reduce(callback);
}

console.log(longestNamedBook());
