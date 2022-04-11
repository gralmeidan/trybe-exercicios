const arr = require("./books");

const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

function fantasyOrScienceFictionAuthors() {
  return arr
    .filter(
      (book) => book.genre === "Fantasia" || book.genre === "Ficção Científica"
    )
    .map((book) => book.author.name)
    .sort();
}

console.log(fantasyOrScienceFictionAuthors());
