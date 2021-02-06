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
  return await projectQueries.removeProjectById(projectId, ownerId);
};

const projectService = {
  listProjectsOfUser,
  addNewProject,
  deleteProject,
};

module.exports = projectService;
