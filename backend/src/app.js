const express = require('express');
const cors = require('cors');

const firewallMiddleware = require('./middlewares/firewallMiddleware');

const authRouter = require('./routes/authRouter');
const issuesRouter = require('./routes/issuesRouter');
const projectRouter = require('./routes/projectRouter');

const app = express();

app.use(cors());

app.use(firewallMiddleware());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/auth', authRouter);

app.use('/api/projects/:projectId/issues', issuesRouter);
app.use('/api/projects', projectRouter);

module.exports = app;
