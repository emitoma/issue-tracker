const userQueries = require('../queries/userQueries');

const register = async (emailAddress, password) => {
  try {
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
