const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyJWTToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded);
    });
  });
};

const firewallMiddleware = {
  verifyJWTToken,
};

module.exports = firewallMiddleware;
