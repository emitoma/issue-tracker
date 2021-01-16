const express = require('express');
const cors = require('cors');

const anonimRoutes = require('./firewallConfig');
const firewallMiddleware = require('./middlewares/firewallMiddleware');

const authRouter = require('./routes/authRouter');
// const projectsRouter = require('./routes/projectRouter');
// const issueRouter = require('./routes/issuesRouter');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  if (anonimRoutes.includes(req.path)) {
    next();
    return;
  }
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return firewallMiddleware.verifyJWTToken(
      req.headers.authorization.split(' ')[0]
    );
  }
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/auth', authRouter);

// app.use('api/projects/{projectId}/issues', issueRouter);
// app.use('api/projects', projectsRouter);

module.exports = app;
