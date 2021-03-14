const getState = (state) => state.issue;

const getIsInitialized = (state) => getState(state).isInitialized;

const getIsLoading = (state) => getState(state).isLoading;

const getIssueIds = (state) => getState(state).ids;

const getIssueById = (state, id) => getState(state).byId[id];

const getIssueErrors = (state) => getState(state).errors;

const getIsIssueSaved = (state) => getState(state).isIssueSaved;

const getIsSaving = (state) => getState(state).isSaving;

const getIsIssueDeleted = (state) => getState(state).isIssueDeleted;

const getIsIssueEdited = (state) => getState(state).isIssueEdited;

const getIsIssueEditing = (state) => getState(state).isIssueEditing;

const issueSelectors = {
  getIsInitialized,
  getIsLoading,
  getIssueIds,
  getIssueById,
  getIssueErrors,
  getIsIssueSaved,
  getIsSaving,
  getIsIssueDeleted,
  getIsIssueEdited,
  getIsIssueEditing,
};

export default issueSelectors;
