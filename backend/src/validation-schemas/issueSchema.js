const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string()
    .required()
    .message({ 'string.empty': 'Title is required.' }),
});

module.exports = schema;
