import Joi from 'joi';

import { nameCheck, emailCheck } from 'constants/regularExpressions';

export const addContactSchema = Joi.object({
  image: Joi.any(),
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
  email: Joi.string()
    .label('Email')
    .pattern(emailCheck)
    .message('Email is not correct!')
    .required(),
  address: Joi.string().label('Address').min(10).max(100).required(),
});
