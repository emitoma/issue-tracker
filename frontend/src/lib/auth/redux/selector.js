const getState = (state) => state.auth;

const getRegisterErrors = (state) => getState(state).registerErrors;

const getIsRegistered = (state) => getState(state).isRegistered;

const authSelectors = {
  getState,
  getRegisterErrors,
  getIsRegistered,
};

export default authSelectors;
