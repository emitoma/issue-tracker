const getState = (state) => state.issue;

const getIsInitialized = (state) => getState(state).isInitialized;

const getIsLoading = (state) => getState(state).isLoading;

const getIssueIds = (state) => getState(state).ids;

const getIssueById = (state, id) => getState(state).byId[id];

const getIssueErrors = (state) => getState(state).errors;

const issueSelectors = {
  getIsInitialized,
  getIsLoading,
  getIssueIds,
  getIssueById,
  getIssueErrors,
};

export default issueSelectors;
