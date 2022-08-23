const express = require('express');
const getData = require('./lib/getData');
const queryByChocolateName = require('./lib/queryByChocolateName');
const updateChocolate = require('./lib/updateChocolate');
const app = express();

app.use(express.json());

app.get('/chocolates/total', async (_req, res) => {
  const { chocolates } = await getData();
  res.status(200).json({
    totalChocolates: chocolates.length,
  });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const response = await queryByChocolateName(name);
  res.status(response[0] ? 200 : 404).json(response);
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const newObj = req.body;
  try {
    const chocolate = await updateChocolate(id, newObj);
    res.status(200).json({ chocolate });
  } catch (e) {
    res.status(404).json({
      message: 'chocolate not found',
    });
  }
});

module.exports = app;
