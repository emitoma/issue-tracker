// add project
// delete project
// list projects based on user id

const projectQueries = require('../queries/projectQueries');

const listProjectsOfUser = async (userId) => {
  console.log(userId);
  const listOfProjects = await projectQueries.getProjectsByOwnerId(userId);

  return listOfProjects;
};

const addNewProject = async (name, description, ownerId) => {
  if (!name || !description) {
    return {
      status: 400,
      message: 'Project cannot be saved without name or description',
    };
  }
  const newProjectId = await projectQueries.addNewProject(
    name,
    description,
    ownerId
  );
  if (!newProjectId) {
    return {
      status: 500,
      message: 'Something went wrong',
    };
  }
  return {
    status: 201,
    message: 'Project saved',
  };
};

const deleteProject = async (projectId, ownerId) => {
  if (!projectId) {
    return {
      status: 400,
      message: 'Could not find project',
    };
  }
  try {
    const dbResponse = await projectQueries.removeProjectById(
      projectId,
      ownerId
    );
    console.log('dbResp', dbResponse.affectedRows);

    if (dbResponse.affectedRows === 0) {
      return {
        status: 500,
        message: 'No project found',
      };
    }

    if (dbResponse.affectedRows > 0) {
      return {
        status: 200,
        message: 'Project deleted successfully',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'Something went wrong',
    };
  }
};

const projectService = {
  listProjectsOfUser,
  addNewProject,
  deleteProject,
};

module.exports = projectService;
