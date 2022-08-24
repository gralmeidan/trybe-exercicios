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

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
};
