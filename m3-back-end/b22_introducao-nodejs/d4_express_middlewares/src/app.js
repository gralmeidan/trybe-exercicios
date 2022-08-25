const express = require('express');
const morgan = require('morgan');
const activities = require('./routes/activities');
const signup = require('./routes/signup');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/activities', activities);
app.use('/signup', signup);

module.exports = app;
