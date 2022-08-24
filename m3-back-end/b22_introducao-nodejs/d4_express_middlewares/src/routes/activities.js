const express = require('express');
const {
  validateName,
  validatePrice,
} = require('../middlewares/validateActivity');
const appendData = require('../utils/appendData');
const activities = express.Router();

activities.use(validateName);
activities.use(validatePrice);

activities.post('/', async (req, res) => {
  const { body } = req;
  await appendData('activities', body);
  res.status(201).json({
    message: 'Atividade cadastrada com sucesso!',
  });
});

module.exports = activities;
