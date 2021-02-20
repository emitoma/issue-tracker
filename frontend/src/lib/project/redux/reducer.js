import projectActionTypes from './action-types';

const initialState = {
  isProjectSaved: false,
  byId: {},
  ids: [],
  isInitialized: false,
  isLoading: false,
  errors: '',
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case projectActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: '',
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
        errors: action.payload.errors,
      };

    case projectActionTypes.CLEAR:
      return initialState;

    case projectActionTypes.ADD_REQUEST:
      return {
        ...state,
        isProjectSaved: false,
        isLoading: true,
        errors: '',
      };

    case projectActionTypes.ADD_SUCCESS:
      return {
        ...state,
        isProjectSaved: true,
        isLoading: false,
        //TODO: ?? the new project should be listed with the others
      };

    case projectActionTypes.ADD_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };

    default:
      return state;
  }
};

export default projectReducer;
