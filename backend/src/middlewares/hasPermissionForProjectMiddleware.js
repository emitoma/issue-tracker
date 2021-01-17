// issue project id-jához tartozó owner id egyezzen meg a requestben levő user idval
// findproject by id
const projectQueries = require('../queries/projectQueries');

const hasPermission = (paramName) => async (req, res, next) => {
  console.log(req.params);
  const projectId = req.params[paramName];
  const dbProject = await projectQueries.findProjectByID(projectId);

  if (req.locals.user.id !== dbProject['owner_id']) {
    return res.status(403).send('Forbidden.');
  }

  next();
};

module.exports = hasPermission;
