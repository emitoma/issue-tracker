import projectActions from '../actions';
import authSelectors from '../../../auth/redux/selector';
import issueActions from '../../../issue/redux/actions';
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

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      dispatch(projectActions.deleteProjectError(response.message));
    } else {
      dispatch(projectActions.deleteProjectSuccess());
      dispatch(loadProjects());
    }
  } catch (error) {
    console.error(error);
    dispatch(projectActions.deleteProjectError('Unknown error'));
  }
};

export default deleteProject;
