const arr = require('./books');

function smallerName() {
  let nameBook = arr[0].name;
  arr.forEach((b) => {
    if (b.name.length < nameBook.length) nameBook = b.name;
  });
  return nameBook;
}

console.log(smallerName());