const express = require('express');
const getData = require('./lib/getData');
const queryByChocolateName = require('./lib/queryByChocolateName');
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

module.exports = app;
