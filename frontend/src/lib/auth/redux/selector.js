const getState = (state) => state.user;

const getRegisterErrors = (state) => getState(state).registerErrors;

const authSelectors = {
  getState,
  getRegisterErrors,
};

export default authSelectors;
