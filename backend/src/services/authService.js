const userQueries = require('../queries/userQueries');
const registerSchema = require('../validation-schemas/registerSchema');

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
    const validValue = await validateRegister(
      emailAddress,
      password,
      repeatPassword
    );
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
