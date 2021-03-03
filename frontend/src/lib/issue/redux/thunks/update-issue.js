import issueActions from '../actions';
import authSelectors from '../../../auth/redux/selector';
import loadIssues from './load-issues';

const updateIssue = (projectId, issueId, formData) => async (
  dispatch,
  getState
) => {
  dispatch(issueActions.editIssue());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        `/api/projects/${projectId}/issues/${issueId}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(formData),
      }
    );

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      dispatch(issueActions.editIssueSuccess(json.message));
    } else {
      dispatch(issueActions.editIssueSuccess());
      dispatch(loadIssues(projectId));
    }
  } catch (e) {
    console.error(e);
    dispatch(issueActions.editIssueError('Unknown Error'));
  }
};

export default updateIssue();
