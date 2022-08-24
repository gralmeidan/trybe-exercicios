const express = require('express');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
} = require('../middlewares/validateActivity');
const appendData = require('../utils/appendData');
const activities = express.Router();

activities.use(validateName);
activities.use(validatePrice);
activities.use(validateDescription);
activities.use(validateCreatedAt);
activities.use(validateRating);

activities.post('/', async (req, res) => {
  const { body } = req;
  await appendData('activities', body);
  res.status(201).json({
    message: 'Atividade cadastrada com sucesso!',
  });
});

module.exports = activities;
