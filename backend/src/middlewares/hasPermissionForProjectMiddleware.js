// issue project id-jához tartozó owner id egyezzen meg a requestben levő user idval
// findproject by id
const projectQueries = require('../queries/projectQueries');

const hasPermission = (paramName) => async (req, res, next) => {
  try {
    console.log(req.params);
    const projectId = req.params[paramName];
    if (isNaN(Number(projectId))) {
      return res.status(400).send({
        status: 400,
        message: 'Project id is not a number',
      });
    }
    const dbProject = await projectQueries.findProjectByID(projectId);

    if (req.locals.user.id !== dbProject.owner_id) {
      return res.status(403).send('Forbidden.');
    }
    next();
  } catch (e) {
    return res.status(500).send('Internal server error.');
  }
};

module.exports = hasPermission;
