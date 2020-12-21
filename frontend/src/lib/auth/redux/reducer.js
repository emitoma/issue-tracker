import authActionTypes from './action-types';

const initialState = {
  isRegistered: false,
  token: null,
  isLoggedIn: false,
  registerErrors: [],
  loginErrors: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        isRegistered: false,
        registerErrors: [],
      };

    case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
      };

    case authActionTypes.REGISTER_ERROR:
      return {
        ...state,
        registerErrors: action.payload.errors,
      };

    case authActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        registerErrors: [],
        loginErrors: [],
      };

    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        loginErrors: [],
      };

    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
      };

    case authActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginErrors: action.payload.errors,
      };

    default:
      return state;
  }
};

export default authReducer;
