import Joi from 'joi';

import { nameCheck } from 'constants/regularExpressions';

export const step1 = Joi.object({
  step1: Joi.array()
    .items({
      firstName: Joi.string()
        .label('First name')
        .pattern(nameCheck)
        .message('Alphabetical characters only')
        .min(3)
        .max(15)
        .required(),
      lastName: Joi.string()
        .label('Last name')
        .pattern(nameCheck)
        .message('Alphabetical characters only')
        .min(3)
        .max(15)
        .required(),
    })
    .required()
    .min(1),
});
