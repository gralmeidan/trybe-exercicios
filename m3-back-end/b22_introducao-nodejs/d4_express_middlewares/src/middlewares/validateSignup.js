const validateSignup = (req, res, next) => {
  if (
    !['email', 'password', 'firstName', 'phone'].every((key) => key in req.body)
  )
    return res.status(401).json({
      message: 'Campos ausentes!',
    });
  next();
};

module.exports = validateSignup;
