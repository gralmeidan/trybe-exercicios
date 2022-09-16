const BooksService = require('../services/books.service');

async function getAll(_req, res) {
  const response = await BooksService.getAll();
  res.status(200).json(response);
}

async function findById(req, res) {
  const { id } = req.params;
  const response = await BooksService.findById(id);
  if (!response) {
    return res.status(404).json({
      message: 'Book not found',
    });
  }
  res.status(200).json(response);
}

async function create(req, res) {
  const response = await BooksService.create(req.body);
  res.status(201).json(response);
}

module.exports = {
  getAll,
  findById,
  create,
};
