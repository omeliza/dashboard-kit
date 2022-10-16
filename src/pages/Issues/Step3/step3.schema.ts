import Joi from 'joi';

import { emailCheck } from 'constants/regularExpressions';

export const step3 = Joi.object({
  step3: Joi.array()
    .items({
      email: Joi.string()
        .label('Email')
        .pattern(emailCheck)
        .message('Email is not correct!')
        .required(),
      address: Joi.string().label('Address').min(10).max(100).required(),
    })
    .required()
    .min(1),
});
