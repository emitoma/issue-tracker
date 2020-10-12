const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRouter');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/auth', authRouter);

module.exports = app;
