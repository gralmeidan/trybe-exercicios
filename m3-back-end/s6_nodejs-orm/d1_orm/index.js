require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksController = require('./src/controllers/books.controller');

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.findById);

app.post('/books', BooksController.create);

app.put('/books/:id', BooksController.update);

app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log('Ouvindo na porta', PORT));
