const userQueries = require('../queries/userQueries');
const buildResponseFromJoiErrors = require('../utils/buildResponseFromJoiErrors');
const registerSchema = require('../validation-schemas/registerSchema');
const bcrypt = require('bcrypt');

const validateRegister = (inputEmail, inputPassword, inputPwRepeat) => {
  const data = {
    email: inputEmail,
    password: inputPassword,
    repeat_password: inputPwRepeat,
  };
  return registerSchema.validateAsync(data);
};

const register = async (emailAddress, password, repeatPassword) => {
  try {
    try {
      await validateRegister(emailAddress, password, repeatPassword);
    } catch (error) {
      // console.log('validation error', error.annotate());
      // console.error(error);
      if (error.isJoi !== true) {
        throw error;
      }
      return {
        status: 400,
        errors: buildResponseFromJoiErrors(error),
      };
    }
    const dbUser = await userQueries.findUserByEmail(emailAddress);

    if (dbUser) {
      return {
        status: 400,
        message: 'User already exists',
      };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const newUser = await userQueries.createUser(emailAddress, passwordHash);
    console.log(newUser, '2');
    return {
      status: 200,
      message: 'User created',
    };
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
