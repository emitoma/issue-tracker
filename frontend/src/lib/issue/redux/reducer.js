import issueActionTypes from './action-types';

const initialState = {
  byId: {},
  ids: [],
  isInitialized: false,
  isLoading: false,
  errors: '',
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case issueActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };

    case issueActionTypes.LOAD_SUCCESS:
      const byId = {};

      action.payload.issues.forEach((issue) => {
        byId[issue.id] = issue;
      });

      const ids = Object.keys(byId).map(Number);

      return {
        ...state,
        byId,
        ids,
        isInitialized: true,
        isLoading: false,
      };

    case issueActionTypes.LOAD_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case issueActionTypes.CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default issueReducer;
