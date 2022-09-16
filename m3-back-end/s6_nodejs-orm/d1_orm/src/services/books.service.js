const { Book } = require('../models');

async function getAll() {
  const response = await Book.findAll();
  return response;
}

async function findById(id) {
  const response = await Book.findByPk(id);
  return response;
}

async function create({ title, author, pageQuantity }) {
  const response = await Book.create({
    title,
    author,
    pageQuantity,
  });
  return response;
}

async function update(id, { title, author, pageQuantity }) {
  const entries = Object.entries({ title, author, pageQuantity });
  const notUndefined = entries.filter(([_key, value]) => Boolean(value));
  const [response] = await Book.update(Object.fromEntries(notUndefined), {
    where: {
      id,
    },
  });
  return response;
}

module.exports = {
  getAll,
  findById,
  create,
  update,
};
