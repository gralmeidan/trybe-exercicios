const express = require('express');
const appendData = require('../utils/appendData');
const activities = express.Router();

activities.post('/', async (req, res) => {
  const { body } = req;
  await appendData('activities', body);
  res.status(201).json({
    message: 'Atividade cadastrada com sucesso!',
  });
});

module.exports = activities;
