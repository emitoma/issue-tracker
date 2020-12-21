const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Email address or password is not correct.',
    }),

  password: Joi.string()
    .pattern(/^.{6,255}$/)
    .required()
    .messages({
      'any.required': 'Password is required.',
      'string.empty': 'Password is required.',
      'string.pattern.base': 'Email address or password is not correct.',
    }),
});

module.exports = schema;
