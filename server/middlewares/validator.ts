import Joi, { ValidationError } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS, ERROR_MESSAGE } from '../constants';

const EMAIL = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.email': ERROR_MESSAGE.EMAIL_TYPE,
    'string.empty': ERROR_MESSAGE.EMAIL_EMPTY,
  });
const NAME = Joi.string().min(2).max(10).required().messages({
  'string.min': ERROR_MESSAGE.NAME_TYPE,
  'string.max': ERROR_MESSAGE.NAME_TYPE,
  'string.empty': ERROR_MESSAGE.NAME_EMPTY,
});
const PASSWORD = Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .required()
  .messages({
    'string.pattern.base': ERROR_MESSAGE.PASSWORD_TYPE,
    'string.empty': ERROR_MESSAGE.PASSWORD_EMPTY,
  });

const errorHandler = (
  error: ValidationError | undefined,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    const { details } = error;
    const messages = details.map((error) => error.message);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ messages });
  }
  next();
};

export const validateCreateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object()
    .keys({
      email: EMAIL,
      password: PASSWORD,
      name: NAME,
    })
    .options({ abortEarly: false });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};
