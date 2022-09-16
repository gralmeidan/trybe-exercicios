const { Book } = require('../models');

async function getAll() {
  const response = await Book.findAll();
  return response;
}

module.exports = {
  getAll,
};
