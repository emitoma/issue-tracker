const express = require('express');
const issueService = require('../services/issueService');
const hasPermission = require('../middlewares/hasPermissionForProjectMiddleware');
const router = express.Router({ mergeParams: true });

router.use(hasPermission('projectId'));

router.get('/', async (req, res) => {
  console.log(req.params);
  const data = await issueService.listIssuesOfProject(req.params.projectId);
  console.log(data);
  if (data.status === 500) {
    res.status(data.status).json(data);
  } else {
    res.status(200).json(data);
  }
});

router.post('/', async (req, res) => {
  const data = await issueService.addNewIssue(
    req.body.title,
    req.body.status,
    req.params.projectId
  );

  console.log(data);

  res.status(data.status).json(data);
});
router.delete('/:id', async (req, res) => {
  const data = await issueService.removeIssue(
    req.params.id,
    req.params.projectId
  );

  console.log(data);

  res.status(data.status).json(data);
});
router.put('/:id', async (req, res) => {
  const data = await issueService.updateIssue(
    req.params.id,
    req.body,
    req.params.projectId
  );

  console.log(data);

  res.status(data.status).json(data);
});

module.exports = router;
