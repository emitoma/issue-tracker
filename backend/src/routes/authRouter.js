const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

router.use(express.json());

router.post('/register', async (req, res) => {
  const data = await authService.register(
    req.body.email,
    req.body.password,
    req.body.passwordAgain
  );
  console.log('router data', data);

  if (data.status === 200) {
    res.status(200).json(data);
  } else if (data.status === 400) {
    res.status(400).json(data);
  } else {
    res.status(data.status).json(data);
  }
});

module.exports = router;
