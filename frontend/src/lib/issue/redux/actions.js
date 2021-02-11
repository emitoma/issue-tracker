import issueActionTypes from './action-types';
const loadIssuesRequest = () => ({
  type: issueActionTypes.LOAD_REQUEST,
});

const loadIssueSuccess = (issues) => ({
  type: issueActionTypes.LOAD_SUCCESS,
  payload: { issues },
});

const loadIssuesError = (errors) => ({
  type: issueActionTypes.LOAD_ERROR,
  payload: { errors },
});

const clearIssues = () => ({
  type: issueActionTypes.CLEAR,
});

const issueActions = {
  loadIssuesRequest,
  loadIssueSuccess,
  loadIssuesError,
  clearIssues,
};

export default issueActions;
