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

const addProjectError = (errors) => ({
  type: projectActionTypes.ADD_ERROR,
  payload: { errors },
});

const projectActions = {
  loadProjects,
  loadProjectsSuccess,
  loadProjectError,

  clearProject,

  addProject,
  addProjectSuccess,
  addProjectError,
};

export default projectActions;
