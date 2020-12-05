import authActions from '../actions';

const login = ({ formData, setFormErrors }) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + '/api/auth/login',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.status < 200 || response.status >= 300) {
      const json = await response.json();
      console.log(response.status);

      if (json.errors) {
        const errors = {
          email: json.errors.email || '',
          password: json.errors.password || '',
        };
        console.log('errors', json.errors);
        setFormErrors(errors);
      }

      dispatch(authActions.loginError(json.message ? [json.message] : []));
    }

    const json = await response.json();
    console.log(json);

    dispatch(authActions.loginSuccess(json.token));
  } catch (error) {
    console.error(error);
    dispatch(authActions.loginError(['Unknown error']));
  }
};

export default login;
