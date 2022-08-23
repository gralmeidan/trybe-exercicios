const express = require('express');
const getData = require('./lib/getData');
const app = express();

app.use(express.json());

app.get('/chocolates/total', async (_req, res) => {
  const { chocolates } = await getData();
  res.status(200).json({
    totalChocolates: chocolates.length,
  });
});

module.exports = app;
