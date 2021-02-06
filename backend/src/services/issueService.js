const issueQueries = require('../queries/issueQueries');
const issueSchema = require('../validation-schemas/issueSchema');
const buildResponseFromJoiErrors = require('../utils/buildResponseFromJoiErrors');

const validateIssue = (title, status) => {
  const data = { title, status };
  return issueSchema.validateAsync(data);
};

const listIssuesOfProject = async (projectId) => {
  try {
    const issuesList = await issueQueries.getIssuesByProjectId(projectId);
    return {
      status: 200,
      message: issuesList,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: 'Something went wrong!',
    };
  }
};

const addNewIssue = async (title, issueStatus, projectId) => {
  console.log(issueStatus, 'status');
  try {
    try {
      await validateIssue(title, issueStatus);
    } catch (error) {
      console.error(error);
      if (error.isJoi !== true) {
        throw error;
      }
      return {
        status: 400,
        errors: buildResponseFromJoiErrors(error),
      };
    }

    const newId = await issueQueries.addNewIssue(title, issueStatus, projectId);
    return {
      status: 201,
      message: 'New issue created ' + newId,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: 'Something went wrong!',
    };
  }
};

const removeIssue = async (issueId, projectId) => {
  try {
    const deleted = await issueQueries.removeIssueById(issueId, projectId);
    console.log(deleted);

    return {
      status: 204,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: 'Something went wrong!',
    };
  }
};

const updateIssue = async (issueId, issueProps, projectId) => {
  try {
    const dbIssue = await issueQueries.getIssueByIdAndProjectId(
      issueId,
      projectId
    );

    if (!dbIssue) {
      return {
        status: 404,
        message: 'No issue found with given id.',
      };
    }

    try {
      await validateIssue(issueProps.title, issueProps.status);
    } catch (error) {
      console.error(error);
      if (error.isJoi !== true) {
        throw error;
      }
      return {
        status: 400,
        errors: buildResponseFromJoiErrors(error),
      };
    }

    console.log(issueProps);
    const updated = await issueQueries.updateIssueById(
      issueId,
      issueProps,
      projectId
    );

    console.log(updated);
    return {
      status: 204,
      message: 'No content.',
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: 'Something went wrong!',
    };
  }
};

const issueService = {
  listIssuesOfProject,
  addNewIssue,
  removeIssue,
  updateIssue,
};
module.exports = issueService;
