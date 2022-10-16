import Joi from 'joi';

import { emailCheck, passwordCheck } from 'constants/regularExpressions';

export const loginSchema = Joi.object({
  email: Joi.string()
    .label('Email')
    .pattern(emailCheck)
    .message('Email is not correct!')
    .required(),
  password: Joi.string()
    .label('Password')
    .pattern(passwordCheck)
    .message(
      'Password is not correct! It must contain at least 8 characters, one special character(@$!%*#?&)/), one uppercase letter and one number',
    )
    .required(),
});
