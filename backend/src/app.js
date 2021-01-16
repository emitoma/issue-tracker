const express = require('express');
const cors = require('cors');

const firewallMiddleware = require('./middlewares/firewallMiddleware');

const authRouter = require('./routes/authRouter');
// const projectsRouter = require('./routes/projectRouter');
// const issueRouter = require('./routes/issuesRouter');

const app = express();

app.use(cors());

app.use(firewallMiddleware());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/auth', authRouter);

// app.use('api/projects/{projectId}/issues', issueRouter);
// app.use('api/projects', projectsRouter);

module.exports = app;
