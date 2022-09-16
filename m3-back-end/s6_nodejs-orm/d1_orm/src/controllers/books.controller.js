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

async function update(req, res) {
  const { id } = req.params;
  const response = await BooksService.update(id, req.body);
  if (!response) {
    return res.status(404).json({
      message: 'Book not found',
    });
  }
  res.status(200).json({
    message: 'Book updated',
  });
}

async function remove(req, res) {
  const { id } = req.params;
  const response = await BooksService.remove(id);
  if (!response) {
    return res.status(404).json({
      message: 'Book not found',
    });
  }
  res.status(200).json({
    message: 'Book removed',
  });
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
};
