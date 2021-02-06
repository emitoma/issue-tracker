import projectActions from '../actions';
import authSelectors from '../../../auth/redux/selector';

const loadProjects = () => async (dispatch, getState) => {
  dispatch(projectActions.loadProjects());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);
    console.log(token);
    // TODO save token to local storage
    const response = await fetch(
      process.env.REACT_APP_API_URL + '/api/projects/',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const json = await response.json();
    console.log(json);

    if (response.status < 200 || response.status >= 300) {
      console.log(response.status);
      dispatch(projectActions.loadProjectError(response.message));
    } else {
      dispatch(projectActions.loadProjectsSuccess(json));
    }
  } catch (error) {
    console.error(error);
    dispatch(projectActions.loadProjectError('Unknown error'));
  }
};
export default loadProjects;
