import projectActions from '../actions';
import authSelectors from '../../../auth/redux/selector';
import loadProjects from './load-projects';

const addProject = () => async (dispatch, getState) => {
  dispatch(projectActions.addProject());

  try {
    const state = getState();
    const token = authSelectors.getToken(state);
    const response = await fetch(
      process.env.REACT_APP_API_URL + '/api/projects/',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          name: 'Test project5',
          description: 'Doing something',
        }),
      }
    );

    const json = await response.json();

    if (response.status < 200 || response.status >= 300) {
      console.log(response.status);
      dispatch(projectActions.addProjectError(response.message));
    } else {
      dispatch(projectActions.addProjectSuccess());
      dispatch(loadProjects());
    }
  } catch (error) {
    console.error(error);
    dispatch(projectActions.addProjectError(['Unknown error']));
  }
};

export default addProject;
