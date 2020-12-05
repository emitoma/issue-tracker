const getState = (state) => state.auth;

const getRegisterErrors = (state) => getState(state).registerErrors;

const getIsRegistered = (state) => getState(state).isRegistered;

const getUser = (state) => getState(state).user;

const getIsLoggedIn = (state) => getState(state).isLoggedIn;

const getLoginError = (state) => getState(state).loginError;

const authSelectors = {
  getState,
  getRegisterErrors,
  getIsRegistered,
  getUser,
  getLoginError,
  getIsLoggedIn,
};

export default authSelectors;
