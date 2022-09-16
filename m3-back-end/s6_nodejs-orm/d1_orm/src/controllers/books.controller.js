const BooksService = require('../services/books.service');

async function getAll(_req, res) {
  const response = await BooksService.getAll();
  res.status(200).json(response);
}

module.exports = {
  getAll,
};
