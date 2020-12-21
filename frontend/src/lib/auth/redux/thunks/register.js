import authActions from '../actions';

const register = ({ formData, setFormErrors }) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + '/api/auth/register',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const json = await response.json();
    if (response.status < 200 || response.status >= 300) {
      console.log(response.status);

      if (json.errors) {
        const errors = {
          email: json.errors.email || '',
          password: json.errors.password || '',
          passwordAgain: json.errors.passwordAgain || '',
        };
        console.log('errors', json.errors);
        setFormErrors(errors);
      } 

      dispatch(authActions.registerError(json.message ? [json.message] : []));
    } else {

      dispatch(authActions.registerSuccess({}));

    }

    // const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
    dispatch(authActions.registerError(['Unknown error']));
  }
};

export default register;
