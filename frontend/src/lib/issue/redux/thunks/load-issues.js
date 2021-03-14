import issueActions from '../actions';
import authSelectors from '../../../auth/redux/selector';

const loadIssues = (projectId) => async (dispatch, getState) => {
  dispatch(issueActions.loadIssuesRequest());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);
    console.log(projectId);
    console.log(token);
    // localhost:5000/api/projects/2/issues
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/api/projects/${projectId}/issues`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      dispatch(issueActions.loadIssuesError(response.message));
    } else {
      dispatch(issueActions.loadIssueSuccess(json));
    }
  } catch (error) {
    console.error(error);
    dispatch(issueActions.loadIssuesError('Unknown error'));
  }
};

export default loadIssues;
