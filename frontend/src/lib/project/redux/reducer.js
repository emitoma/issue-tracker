import projectActionTypes from './action-types';

const initialState = {
  isProjectSaved: false,
  isSaving: false,
  byId: {},
  ids: [],
  isInitialized: false,
  isLoading: false,
  errors: {
    general: '',
    form: {},
  },
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case projectActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: {
          general: '',
          form: {},
        },
      };

    case projectActionTypes.LOAD_SUCCESS:
      const byId = {};

      action.payload.projects.forEach((project) => {
        byId[project.id] = project;
      });

      const ids = Object.keys(byId).map(Number);

      return {
        ...state,
        byId,
        ids,
        isInitialized: true,
        isLoading: false,
      };

    case projectActionTypes.LOAD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          general: action.payload.errors,
        },
      };

    case projectActionTypes.CLEAR:
      return initialState;

    case projectActionTypes.ADD_REQUEST:
      return {
        ...state,
        isProjectSaved: false,
        isSaving: true,
        errors: {
          general: '',
          form: {},
        },
      };

    case projectActionTypes.ADD_SUCCESS:
      return {
        ...state,
        isProjectSaved: true,
        isSaving: false,
      };

    case projectActionTypes.ADD_ERROR:
      return {
        ...state,
        errors: {
          general: action.payload.generalError,
          form: action.payload.formErrors,
        },
      };
    case projectActionTypes.SET_IS_PROJECT_SAVED:
      return {
        ...state,
        isProjectSaved: action.payload.isSaved,
      };

    case projectActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: {
          general: '',
          form: {},
        },
      };

    default:
      return state;
  }
};

export default projectReducer;
