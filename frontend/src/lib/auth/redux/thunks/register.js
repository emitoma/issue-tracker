import authActions from '../actions';

const register = ({ email, password, passwordAgain }) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + '/api/auth/register',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          passwordAgain,
        }),
      }
    );

    if (response.status < 200 || response.status >= 300) {
      console.log(response.status);
      const json = await response.json();

      dispatch(authActions.registerError([json.message]));
      return;
    }

    const json = await response.json();
    console.log(json);
    dispatch(authActions.registerSuccess({}));
  } catch (error) {
    console.error(error);
    dispatch(authActions.registerError(['Unknown error']));
  }
};

export default register;
