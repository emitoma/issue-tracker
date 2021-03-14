import issueActions from '../actions';
import authSelectors from '../../../auth/redux/selector';
import loadIssues from './load-issues';

const deleteIssue = (projectId, issueId) => async (dispatch, getState) => {
  dispatch(issueActions.deleteIssue());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);

    const response = await fetch(
      process.env.REACT_APP_API_URL +
        `/api/projects/${projectId}/issues/${issueId}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      dispatch(issueActions.deleteIssueError(json.message));
    } else {
      dispatch(issueActions.deleteIssueSuccess());
    }
  } catch (error) {
    console.error(error);
    dispatch(issueActions.deleteIssueError('Unknown error'));
  } finally {
    dispatch(loadIssues(projectId));
  }
};

export default deleteIssue;
