import Joi, { ValidationError } from 'joi';
import { ERROR_MESSAGE } from '../constants';
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
  .pattern(new RegExp('^[a-zA-Z0-9]{8,20}$'))
  .required()
  .messages({
    'string.pattern.base': ERROR_MESSAGE.PASSWORD_TYPE,
    'string.empty': ERROR_MESSAGE.PASSWORD_EMPTY,
  });
const PASSWORD_CHECK = Joi.string()
  .required()
  .equal(Joi.ref('password'))
  .messages({
    'any.only': ERROR_MESSAGE.PASSWORD_CONFIRM_EQUAL,
    'string.empty': ERROR_MESSAGE.PASSWORD_CONFIRM_EQUAL,
  });
const AGREE_TERM = Joi.boolean().invalid(false).required().messages({
  'any.invalid': ERROR_MESSAGE.DISAGREE_TERM,
});
const reformatErrorMessages = (error: ValidationError | undefined) => {
  if (error) {
    const { details } = error;
    const errorMessages = {} as Record<string, any>;
    console.log(details);
    details.forEach((detail) => {
      if (detail.context?.key)
        errorMessages[detail.context?.key] = detail.message;
    });
    return errorMessages;
  }
  return {};
};

export const validateCreateUser = (user: any) => {
  const schema = Joi.object()
    .keys({
      email: EMAIL,
      password: PASSWORD,
      name: NAME,
      passwordCheck: PASSWORD_CHECK,
      agreeTerm: AGREE_TERM,
    })
    .options({ abortEarly: false });
  const { error } = schema.validate(user);
  return reformatErrorMessages(error);
};
