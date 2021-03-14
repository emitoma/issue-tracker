const express = require('express');
const projectService = require('../services/projectsService');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('router');
  console.log(req.locals.user);
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

  res.status(data.status).json(data);
});

router.delete('/:id', async (req, res) => {
  const data = await projectService.deleteProject(
    req.params.id,
    req.locals.user.id
  );
  console.log(data);

  res.status(data.status).json(data);
});

module.exports = router;
