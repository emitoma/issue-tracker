const { anonymousRoutes } = require('../firewallConfig');
const authService = require('../services/authService');
const userQueries = require('../queries/userQueries');

const firewallMiddleware = () => async (req, res, next) => {
  if (anonymousRoutes.includes(req.path)) {
    return next();
  }

  if (!req.headers.authorization) {
    res.status(401);
    res.send('JWT is missing');
    return;
  }

  const splitAuthorization = req.headers.authorization.split(' ');

  if (splitAuthorization.length !== 2) {
    res.status(400);
    res.send('Invalid JWT');
    return;
  }
  const token = splitAuthorization[1];

  try {
    const decodedToken = await authService.verifyJWTToken(token);
    console.log(decodedToken);
    if (!req.locals) {
      req.locals = {};
    }
    req.locals.user = await userQueries.findUserByEmail(decodedToken.email);
    console.log(req.locals.user);
    return next();
  } catch (err) {
    console.error(err);
    res.status(400);
    res.send('Invalid JWT');
  }
};

module.exports = firewallMiddleware;
