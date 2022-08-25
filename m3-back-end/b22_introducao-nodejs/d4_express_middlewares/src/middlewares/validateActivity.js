const getData = require('../utils/getData');

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({
      message: 'O campo name é obrigatório',
    });
  if (name.length <= 4)
    return res.status(400).json({
      message: 'O campo name deve ter pelo menos 4 caracteres',
    });
  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (typeof price === 'undefined')
    return res.status(400).json({
      message: 'O campo price é obrigatório',
    });
  if (price < 0)
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  next();
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  if (!description)
    return res.status(400).json({
      message: 'O campo description é obrigatório',
    });

  const required = ['rating', 'difficulty', 'createdAt'];
  for (let i = 0; i < required.length; i++) {
    if (!description[required[i]])
      return res.status(400).json({
        message: `O campo ${required[i]} é obrigatório`,
      });
  }
  next();
};

const validateCreatedAt = (req, res, next) => {
  const {
    description: { createdAt },
  } = req.body;

  if (!createdAt.match(/^(\d\d\/){2}\d{4}$/))
    return res.status(400).json({
      message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'",
    });

  next();
};

const validateRating = (req, res, next) => {
  const {
    description: { rating },
  } = req.body;

  if (rating > 5 || rating < 1)
    return res.status(400).json({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });

  next();
};

const validateDifficulty = (req, res, next) => {
  const {
    description: { difficulty },
  } = req.body;

  if (!difficulty.match(/^(Fácil)|(Médio)|(Difícil)$/))
    return res.status(400).json({
      message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'",
    });

  next();
};

const validateToken = async (req, res, next) => {
  const Authorization = req.header('Authorization');
  const users = await getData('users');
  if (
    !users.some(({ token }) => token === Authorization) ||
    Authorization.length !== 16
  )
    return res.status(401).json({
      message: 'Token inválido',
    });

  next();
};

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateToken,
};
