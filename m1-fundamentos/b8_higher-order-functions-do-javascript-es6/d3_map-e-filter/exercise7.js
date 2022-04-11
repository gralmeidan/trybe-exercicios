const arr = require("./books");

const expectedResult = "O Senhor dos Anéis";

function authorWith3DotsOnName() {
  return arr.find((book) => book.author.name.match(/^(\w\.\s){3}/)).name;
}

console.log(authorWith3DotsOnName());
