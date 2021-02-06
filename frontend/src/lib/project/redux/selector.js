const getState = (state) => state.project;

const getIsInitialized = (state) => getState(state).isInitialized;

const getIsLoading = (state) => getState(state).isLoading;

const getProjectIds = (state) => getState(state).ids;

const getProjectById = (state) => getState(state).byId;

const getProjectErrors = (state) => getState(state).errors;

const projectSelectors = {
  getIsInitialized,
  getIsLoading,
  getProjectIds,
  getProjectById,
  getProjectErrors,
};

export default projectSelectors;
