const express = require('express');
const { validateName } = require('../middlewares/validateActivity');
const appendData = require('../utils/appendData');
const activities = express.Router();

activities.use(validateName);

activities.post('/', async (req, res) => {
  const { body } = req;
  await appendData('activities', body);
  res.status(201).json({
    message: 'Atividade cadastrada com sucesso!',
  });
});

module.exports = activities;
