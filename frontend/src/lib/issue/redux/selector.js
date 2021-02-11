const getState = (state) => state.issue;

const getIsInitialized = (state) => getState(state).isInitialized;

const getIsLoading = (state) => getState(state).isLoading;

const getProjectIds = (state) => getState(state).ids;

const getProjectById = (state, id) => getState(state).byId[id];

const getProjectErrors = (state) => getState(state).errors;

const issueSelectors = {
  getIsInitialized,
  getIsLoading,
  getProjectIds,
  getProjectById,
  getProjectErrors,
};

export default issueSelectors;
