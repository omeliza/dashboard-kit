import Joi from 'joi';

import { passwordCheck } from 'constants/regularExpressions';

export const resetSchema = Joi.object({
  password: Joi.string()
    .label('Password')
    .pattern(passwordCheck)
    .message(
      'Password is not correct! It must contain at least 8 characters, one special character(@$!%*#?&)/), one uppercase letter and one number',
    )
    .required(),
  confirmPassword: Joi.string().pattern(passwordCheck).required(),
});
