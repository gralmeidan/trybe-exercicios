const express = require('express');
const morgan = require('morgan');
const activities = require('./routes/activities');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/activities', activities);

module.exports = app;
