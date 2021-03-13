const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  status: Joi.string()
    .valid('done', 'todo', 'in_progress')
    .insensitive()
    .required(),
});

module.exports = schema;
