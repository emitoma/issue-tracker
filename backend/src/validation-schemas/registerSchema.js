const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required()
    .message({
      'any.required': 'Email cannot be empty!',
      'any.invalid': 'Invalid email address',
    }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .message({
      'string.pattern.base':
        'Password should not contain special characters and should not be shorter then 6 characters or longer than 30',
      'any.required': 'Password cannot be empty!',
    }),

  repeat_password: Joi.ref('password'),
});

module.exports = schema;
