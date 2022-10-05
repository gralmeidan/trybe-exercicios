import Joi from 'joi';

export const newUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).max(12).optional(),
});
