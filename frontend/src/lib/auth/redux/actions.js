import authActionTypes from './action-types';

const initSuccess = (token) => ({
  type: authActionTypes.INIT_SUCCESS,
  payload: { token },
});

const initError = () => ({
  type: authActionTypes.INIT_ERROR,
});

const registerRequest = () => ({
  type: authActionTypes.REGISTER_REQUEST,
});

const registerSuccess = () => ({
  type: authActionTypes.REGISTER_SUCCESS,
});

const registerError = (errors) => ({
  type: authActionTypes.REGISTER_ERROR,
  payload: { errors },
});

const clearErrors = () => ({
  type: authActionTypes.CLEAR_ERRORS,
});

const loginRequest = () => ({
  type: authActionTypes.LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { token },
});

const loginError = (errors) => ({
  type: authActionTypes.LOGIN_ERROR,
  payload: { errors },
});

const setIsLoggedIn = (isLoggedIn) => ({
  type: authActionTypes.LOGIN_SET_IS_LOGGED_IN,
  payload: { isLoggedIn },
});

const logout = () => {
  localStorage.removeItem('token');

  return {
    type: authActionTypes.LOGOUT,
  };
};

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,

  clearErrors,
  logout,

  loginRequest,
  loginSuccess,
  loginError,

  initSuccess,
  initError,

  setIsLoggedIn,
};

export default authActions;
