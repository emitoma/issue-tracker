import issueActionTypes from './action-types';

const loadIssuesRequest = () => ({
  type: issueActionTypes.LOAD_REQUEST,
});

const loadIssueSuccess = (issues) => ({
  type: issueActionTypes.LOAD_SUCCESS,
  payload: { issues },
});

const loadIssuesError = (generalError, formErrors = {}) => ({
  type: issueActionTypes.LOAD_ERROR,
  payload: { generalError, formErrors },
});

const clearIssues = () => ({
  type: issueActionTypes.CLEAR,
});

const addIssue = () => ({
  type: issueActionTypes.ADD_REQUEST,
});

const addIssueSuccess = () => ({
  type: issueActionTypes.ADD_SUCCESS,
});

const addIssueError = (generalError, formErrors = {}) => ({
  type: issueActionTypes.ADD_ERROR,
  payload: { generalError, formErrors },
});

const setIsIssueSaved = (isSaved) => ({
  type: issueActionTypes.SET_IS_ISSUE_SAVED,
  payload: { isSaved },
});

const deleteIssue = () => ({
  type: issueActionTypes.DELETE_REQUEST,
});

const deleteIssueSuccess = () => ({
  type: issueActionTypes.DELETE_SUCCESS,
});

const deleteIssueError = (generalError, formErrors = {}) => {
  console.trace();
  return {
    type: issueActionTypes.DELETE_ERROR,
    payload: { generalError, formErrors },
  };
};

const setISIssueDeleted = (isDeleted) => ({
  type: issueActionTypes.SET_IS_ISSUE_DELETED,
  payload: { isDeleted },
});

const editIssue = () => ({
  type: issueActionTypes.EDIT_REQUEST,
});

const editIssueSuccess = () => ({
  type: issueActionTypes.EDIT_SUCCESS,
});

const editIssueError = (generalError, formErrors = {}) => {
  console.trace();
  return {
    type: issueActionTypes.EDIT_ERROR,
    payload: { generalError, formErrors },
  };
};

const setISIssueEdited = (isEdited) => ({
  type: issueActionTypes.SET_IS_ISSUE_EDITED,
  payload: { isEdited },
});

const clearErrors = () => ({
  type: issueActionTypes.CLEAR_ERRORS,
});

const issueActions = {
  loadIssuesRequest,
  loadIssueSuccess,
  loadIssuesError,

  clearIssues,

  addIssue,
  addIssueSuccess,
  addIssueError,
  setIsIssueSaved,

  deleteIssue,
  deleteIssueSuccess,
  deleteIssueError,
  setISIssueDeleted,

  editIssue,
  editIssueSuccess,
  editIssueError,
  setISIssueEdited,

  clearErrors,
};

export default issueActions;
