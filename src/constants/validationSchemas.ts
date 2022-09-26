import Joi from 'joi';

import {
  emailCheck,
  nameCheck,
  passwordCheck,
} from 'constants/regularExpressions';

export const registerSchema = Joi.object({
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
  password: Joi.string()
    .label('Password')
    .pattern(passwordCheck)
    .message(
      'Password is not correct! It must contain at least 8 characters, one special character(@$!%*#?&)/), one uppercase letter and one number',
    )
    .required(),
  confirmPassword: Joi.any()
    .label('Confirm Password')
    .equal(Joi.ref('password'))
    .options({ messages: { 'any.only': '{{#label}} does not match' } })
    .required(),
});

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

export const forgotSchema = Joi.object({
  email: Joi.string()
    .label('Email')
    .pattern(emailCheck)
    .message('Email is not correct!')
    .required(),
});

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
