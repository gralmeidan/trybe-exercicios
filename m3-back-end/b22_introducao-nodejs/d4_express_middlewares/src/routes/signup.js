const express = require('express');
const validateSignup = require('../middlewares/validateSignup');
const appendData = require('../utils/appendData');
const generateToken = require('../utils/generateToken');
const signup = express.Router();

signup.use(validateSignup);

signup.post('/', (req, res) => {
  const token = generateToken();
  const { email, password, firstName, phone } = req.body;
  appendData('users', {
    email,
    password,
    firstName,
    phone,
    token,
  });
  res.status(200).json({
    token,
  });
});

module.exports = signup;
