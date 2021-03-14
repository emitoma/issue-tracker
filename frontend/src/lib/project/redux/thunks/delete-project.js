import projectActions from '../actions';
import authSelectors from '../../../auth/redux/selector';
import loadProjects from './load-projects';

const deleteProject = (projectId) => async (dispatch, getState) => {
  dispatch(projectActions.deleteProject());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/api/projects/${projectId}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );

    console.log('response', response.body);

    const json = await response.json();
    if (response.status < 200 || response.status >= 300) {
      console.log(json);
      dispatch(projectActions.deleteProjectError(json.message));
    } else {
      console.log(json);
      dispatch(projectActions.deleteProjectSuccess());
    }
  } catch (error) {
    console.error(error);
    dispatch(projectActions.deleteProjectError('Unknown error'));
  } finally {
    dispatch(loadProjects());
  }
};

export default deleteProject;
