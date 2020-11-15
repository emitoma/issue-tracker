const userQueries = require('../queries/userQueries');
const buildResponseFromJoiErrors = require('../utils/buildResponseFromJoiErrors');
const registerSchema = require('../validation-schemas/registerSchema');
const loginSchema = require('../validation-schemas/loginSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const validateRegister = (email, password, passwordAgain) => {
  const data = {
    email,
    password,
    passwordAgain,
  };
  return registerSchema.validateAsync(data);
};

const validateLogin = (email, password) => {
  const data = {
    email,
    password
  };
  return loginSchema.validateAsync(data);
}

const createJWTToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.jwtSecret, (err, token) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
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

    const newUser = await userQueries.createUser({
      email,
      password: passwordHash,
    });

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
  try {
    //TODO: make joi error messages more accurate for the login
    try {
      await validateLogin(email, password);
    } catch (error) {
      console.error(error)
      if (error.isJoi !== true) {
        throw error;
      }
      return {
        status: 403,
        errors: buildResponseFromJoiErrors(error),
      };
    }



    const dbUser = await userQueries.findUserForLogin(email);

    const isPasswordOk = await bcrypt.compare(password, dbUser.password);

    if (isPasswordOk) {
      const token = await createJWTToken({
        email: dbUser.email
      })

      return {
        status: 200,
        token: token,
      }

    } else {
      return {
        status: 403,
        message: 'Username or password is not correct.'
      }
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
