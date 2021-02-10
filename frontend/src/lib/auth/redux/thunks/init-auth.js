import authActions from '../actions';

const initAuth = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined' || token === 'null') {
      dispatch(authActions.initError());
      return;
    }

    dispatch(authActions.initSuccess(token));
  } catch (e) {
    console.error(e);
    dispatch(authActions.initError());
  }
};

export default initAuth;
