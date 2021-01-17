const issueQueries = require('../queries/issueQueries');

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
  try {
    if (title === undefined || title === null) {
      return {
        status: 400,
        message: 'Cannot save issue without title',
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

const updateIssue = async (issueId, issueProps) => {
  try {
    const dbIssue = await issueQueries.getIssueById(issueId);

    if (issueProps.title === undefined || issueProps.title === null) {
      issueProps.title = dbIssue.title;
    }
    if (issueProps.status === undefined || issueProps.status === null) {
      issueProps.status = dbIssue.status;
    }
    const updated = await issueQueries.updateIssueById(issueId, issueProps);

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

  // ha üres nem írom felül, null v undefinded
  //
};

const issueService = {
  listIssuesOfProject,
  addNewIssue,
  removeIssue,
  updateIssue,
};
module.exports = issueService;
