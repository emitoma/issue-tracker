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

const projectActions = {
  loadProjects,
  loadProjectsSuccess,
  loadProjectError,
  clearProject,
};

export default projectActions;
