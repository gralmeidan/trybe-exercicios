require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksController = require('./src/controllers/books.controller');

app.use(express.json());

app.get('/books', BooksController.getAll);

app.listen(PORT, () => console.log('Ouvindo na porta', PORT));
