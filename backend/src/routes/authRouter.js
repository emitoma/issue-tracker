const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

router.use(express.json());

router.post('/register', (req, res) => {
  const data = authService.register(
    req.body.emailAddress,
    req.body.password,
    req.body.repeatPassword
  );
  console.log(data);

  if (data.status === 200) {
    res.status(200).json(data);
  } else if (data.status === 401) {
    res.status(401).json(data);
  } else if (data.status === 500) {
    res.status(500).json(data);
  }
});

module.exports = router;
