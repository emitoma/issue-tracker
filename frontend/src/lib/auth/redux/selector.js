const getState = (state) => state.auth;

const getRegisterErrors = (state) => getState(state).registerErrors;

const authSelectors = {
  getState,
  getRegisterErrors,
};

export default authSelectors;
