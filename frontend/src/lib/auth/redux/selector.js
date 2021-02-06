const getState = (state) => state.auth;

const getRegisterErrors = (state) => getState(state).registerErrors;

const getIsRegistered = (state) => getState(state).isRegistered;

const getUser = (state) => getState(state).user;

const getIsLoggedIn = (state) => getState(state).isLoggedIn;

const getLoginError = (state) => getState(state).loginError;

const getToken = (state) => getState(state).token;

const authSelectors = {
  getState,
  getRegisterErrors,
  getIsRegistered,
  getUser,
  getLoginError,
  getIsLoggedIn,
  getToken,
};

export default authSelectors;
