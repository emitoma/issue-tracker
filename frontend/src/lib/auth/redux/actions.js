import authActionTypes from './action-types';

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

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,

  clearErrors,
};

export default authActions;
