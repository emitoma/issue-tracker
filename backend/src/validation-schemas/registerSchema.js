const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required()
    .messages({
      'string.empty': 'kek',
      'string.email': 'kok',
    }),

  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .message({
      'pattern.empty': 'empty',
      'string.password': 'password',
    }),

  repeat_password: Joi.ref('password'),
});

module.exports = schema;
