const arr = require('./books');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooksOrdered() {
  return arr
    .filter((book) => 2022 - book.releaseYear > 60);
}

function oldBooks() {
  return oldBooksOrdered().map(book => book.name)
}

console.log(oldBooks());