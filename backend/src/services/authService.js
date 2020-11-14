const userQueries = require('../queries/userQueries');
const buildResponseFromJoiErrors = require('../utils/buildResponseFromJoiErrors');
const registerSchema = require('../validation-schemas/registerSchema');
const bcrypt = require('bcrypt');

const validateRegister = (email, password, passwordAgain) => {
  const data = {
    email,
    password,
    passwordAgain,
  };
  return registerSchema.validateAsync(data);
};

const register = async (email, password, passwordAgain) => {
  try {
    try {
      await validateRegister(email, password, passwordAgain);
    } catch (error) {
      // console.log('validation error', error.annotate());
      console.error(error);
      if (error.isJoi !== true) {
        throw error;
      }
      return {
        status: 400,
        errors: buildResponseFromJoiErrors(error),
      };
    }
    const dbUser = await userQueries.findUserByEmail(email);

    if (dbUser) {
      return {
        status: 400,
        message: 'User already exists',
      };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const newUser = await userQueries.createUser({
      email,
      password: passwordHash,
    });
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

const login = async (email, password) => {
  console.log("service")
  try {
    console.log("service try-catch")
    const dbUser = await userQueries.findUserWithPasswordByEmail(email);
    console.log(dbUser)
    return {
      status: 200,
      message: 'working'
    }

  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'Something went wrong!'
    }
    
  }
}

const authService = {
  register,
  login
};

module.exports = authService;
