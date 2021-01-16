const express = require('express');
const projectService = require('../services/projectsService');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  console.log('router');
  const data = await projectService.listProjectsOfUser(req.locals.user.id);

  res.send(data);
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const data = await projectService.addNewProject(
    name,
    description,
    req.locals.user.id
  );
  console.log(data);

  if (data.status === 201) {
    res.status(201).json(data);
  } else if (data.status === 400) {
    res.status(400).json(data);
  } else {
    res.status(data.status).json(data.message);
  }
});

router.delete('/:id', async (req, res) => {
  const data = await projectService.deleteProject(
    req.params.id,
    req.locals.user.id
  );
  res.send(data);
});

module.exports = router;
