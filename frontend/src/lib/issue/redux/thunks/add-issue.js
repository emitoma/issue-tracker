import issueActions from '../actions';
import authSelectors from '../../../auth/redux/selector';
import loadIssues from './load-issues';

const addIssue = (projectId, formData) => async (dispatch, getState) => {
  dispatch(issueActions.addIssue());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/api/projects/${projectId}/issues`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(formData),
      }
    );

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      dispatch(issueActions.addIssueError(json.message));
    } else {
      dispatch(issueActions.addIssueSuccess());
      dispatch(loadIssues(projectId));
    }
  } catch (e) {
    console.error(e);
    dispatch(issueActions.addIssueError('Unknown Error'));
  }
};

export default addIssue();
