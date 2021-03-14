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
    const putPayload = {
      title: formData.title,
      status: formData.issueStatus,
    };
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        `/api/projects/${projectId}/issues/${issueId}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(putPayload),
      }
    );

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      dispatch(issueActions.editIssueError(json.message));
    } else {
      dispatch(issueActions.editIssueSuccess());
    }
  } catch (e) {
    console.error(e);
    dispatch(issueActions.editIssueError('Unknown Error'));
  } finally {
    dispatch(loadIssues(projectId));
  }
};

export default updateIssue;
