import authActionTypes from './action-types';

const initialState = {
  isRegistered: false,
  token: null,
  isInitialized: false,
  isLoggedIn: false,
  registerErrors: [],
  loginErrors: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.INIT_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isInitialized: true,
        isLoggedIn: true,
      };

    case authActionTypes.INIT_ERROR:
      return {
        ...state,
        token: null,
        isInitialized: true,
        isLoggedIn: false,
      };

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

    case authActionTypes.LOGIN_SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };

    case authActionTypes.LOGOUT:
      return {
        isRegistered: false,
        token: null,
        isInitialized: true,
        isLoggedIn: false,
        registerErrors: [],
        loginErrors: [],
      };

    default:
      return state;
  }
};

export default authReducer;
