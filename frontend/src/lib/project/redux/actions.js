import projectActionTypes from './action-types';

const loadProjects = () => ({
  type: projectActionTypes.LOAD_REQUEST,
});

const loadProjectsSuccess = (projects) => ({
  type: projectActionTypes.LOAD_SUCCESS,
  payload: {
    projects,
  },
});

const loadProjectError = (errors) => ({
  type: projectActionTypes.LOAD_ERROR,
  payload: {
    errors,
  },
});

const clearProject = () => ({
  type: projectActionTypes.CLEAR,
});

const addProject = () => ({
  type: projectActionTypes.ADD_REQUEST,
});

const addProjectSuccess = () => ({
  type: projectActionTypes.ADD_SUCCESS,
});

const addProjectError = (generalError, formErrors = {}) => ({
  type: projectActionTypes.ADD_ERROR,
  payload: { generalError, formErrors },
});

const setIsProjectSaved = (isSaved) => ({
  type: projectActionTypes.SET_IS_PROJECT_SAVED,
  payload: { isSaved },
});

const clearErrors = () => ({
  type: projectActionTypes.CLEAR_ERRORS,
});

const projectActions = {
  loadProjects,
  loadProjectsSuccess,
  loadProjectError,

  clearProject,

  addProject,
  addProjectSuccess,
  addProjectError,

  setIsProjectSaved,
  clearErrors,
};

export default projectActions;
