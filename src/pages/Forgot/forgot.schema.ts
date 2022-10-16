import Joi from 'joi';

import { emailCheck } from 'constants/regularExpressions';

export const forgotSchema = Joi.object({
  email: Joi.string()
    .label('Email')
    .pattern(emailCheck)
    .message('Email is not correct!')
    .required(),
});
