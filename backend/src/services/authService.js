const userQueries = require('../queries/userQueries');
const joi = require('joi');
const Joi = require('joi');
const { invalid } = require('joi');

const validateRegister = (inputEmail, inputPassword, inputPwRepeat) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: true } })
      .min(1),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required(),

    repeat_password: Joi.ref('password'),
  }).with('email', 'password', 'repeat_password');

  const data = {
    email: inputEmail,
    password: inputPassword,
    repeat_password: inputPwRepeat,
  };

  Joi.validate(data, schema, (err, value) => {
    if (err) {
      return {
        status: 401,
        message: 'invalid input data',
      };
    } else {
      return value;
    }
  });
};

const register = async (emailAddress, password, repeatPassword) => {
  try {
    const validValue = validateRegister(emailAddress, password, repeatPassword);
    console.log(validValue);

    let newUser = await userQueries.createUser(emailAddress, password);
    return newUser;
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'Something went wrong!',
    };
  }
};

const authService = {
  register,
};

module.exports = authService;
