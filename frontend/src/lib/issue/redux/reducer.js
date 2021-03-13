import issueActionTypes from './action-types';

const initialState = {
  isIssueSaved: false,
  isSaving: false,
  isIssueDeleted: false,
  isIssueDeleting: false,
  isIssueEdited: false,
  isIssueEditing: false,
  byId: {},
  ids: [],
  isInitialized: false,
  isLoading: false,
  errors: {
    general: '',
    form: {},
  },
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case issueActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: {
          general: '',
          form: {},
        },
      };

    case issueActionTypes.LOAD_SUCCESS:
      const byId = {};

      action.payload.issues.forEach((issue) => {
        byId[issue.id] = issue;
      });

      const ids = Object.keys(byId).map(Number);

      return {
        ...state,
        byId,
        ids,
        isInitialized: true,
        isLoading: false,
      };

    case issueActionTypes.LOAD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          general: action.payload.errors,
        },
      };
    case issueActionTypes.CLEAR:
      return initialState;

    case issueActionTypes.ADD_REQUEST:
      return {
        ...state,
        isIssueSaved: false,
        isSaving: true,
        errors: {
          general: '',
          form: {},
        },
      };

    case issueActionTypes.ADD_SUCCESS:
      return {
        ...state,
        isIssueSaved: true,
        isSaving: false,
      };

    case issueActionTypes.ADD_ERROR:
      return {
        ...state,
        isSaving: false,
        errors: {
          general: action.payload.generalError,
          form: action.payload.formErrors,
        },
      };

    case issueActionTypes.SET_IS_ISSUE_SAVED:
      return {
        ...state,
        isIssueSaved: action.payload.isSaved,
      };

    case issueActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: {
          general: '',
          form: {},
        },
      };

    case issueActionTypes.DELETE_REQUEST:
      return {
        ...state,
        isIssueDeleted: false,
        isIssueDeleting: true,
        errors: {
          general: '',
          form: {},
        },
      };

    case issueActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        isIssueDeleted: true,
        isIssueDeleting: false,
      };

    case issueActionTypes.DELETE_ERROR:
      return {
        ...state,
        isIssueDeleting: false,
        errors: {
          general: action.payload.generalError,
          form: action.payload.formErrors,
        },
      };

    case issueActionTypes.SET_IS_ISSUE_DELETED:
      return {
        ...state,
        isIssueDeleted: action.payload.isIssueDeleted,
      };

    case issueActionTypes.EDIT_REQUEST:
      return {
        ...state,
        isIssueEdited: false,
        isIssueEditing: true,
        errors: {
          general: '',
          form: {},
        },
      };

    case issueActionTypes.EDIT_SUCCESS:
      return {
        ...state,
        isIssueEdited: true,
        isIssueEditing: false,
      };

    case issueActionTypes.EDIT_ERROR:
      return {
        ...state,
        isIssueEditing: false,
        errors: {
          general: action.payload.generalError,
          form: action.payload.formErrors,
        },
      };

    case issueActionTypes.SET_IS_ISSUE_EDITED:
      return {
        ...state,
        isIssueEdited: action.payload.isEdited,
      };

    default:
      return state;
  }
};

export default issueReducer;
