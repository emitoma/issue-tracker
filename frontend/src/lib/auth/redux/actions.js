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

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,

  clearErrors,

  loginRequest,
  loginSuccess,
  loginError,

  initSuccess,
  initError,
};

export default authActions;
