const { Book } = require('../models');

async function getAll() {
  const response = await Book.findAll();
  return response;
}

async function findById(id) {
  const response = await Book.findByPk(id);
  return response;
}

module.exports = {
  getAll,
  findById,
};
