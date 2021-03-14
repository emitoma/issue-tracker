const getState = (state) => state.project;

const getIsInitialized = (state) => getState(state).isInitialized;

const getIsLoading = (state) => getState(state).isLoading;

const getProjectIds = (state) => getState(state).ids;

const getProjectById = (state, id) => getState(state).byId[id];

const getProjectErrors = (state) => getState(state).errors;

const getIsProjectSaved = (state) => getState(state).isProjectSaved;

const getIsSaving = (state) => getState(state).isSaving;

const getIsProjectDeleted = (state) => getState(state).isProjectDeleted;

const getIsDeleting = (state) => getState(state).isDeleting;

const projectSelectors = {
  getIsInitialized,
  getIsLoading,
  getProjectIds,
  getProjectById,
  getProjectErrors,
  getIsProjectSaved,
  getIsSaving,
  getIsProjectDeleted,
  getIsDeleting,
};

export default projectSelectors;
