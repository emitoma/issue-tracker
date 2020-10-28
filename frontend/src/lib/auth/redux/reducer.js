import authActionTypes from './action-types';

const initialState = {
  isRegistered: false,
  user: null,
  registerErrors: [],
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
      };

    default:
      return state;
  }
};

export default authReducer;
