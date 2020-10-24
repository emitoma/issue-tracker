const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Email is not valid.',
    }),

  password: Joi.string()
    .pattern(/^.{6,255}$/)
    .required()
    .messages({
      'any.required': 'Password is required.',
      'string.empty': 'Password is required.',
      'string.pattern.base': 'Password should be at least 6 characters long.',
    }),

  passwordAgain: Joi.ref('password'),
}).with('password', 'passwordAgain');

module.exports = schema;
