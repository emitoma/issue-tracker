const express = require('express');
const issueService = require('../services/issueService');
const hasPermission = require('../middlewares/hasPermissionForProjectMiddleware');
const router = express.Router({ mergeParams: true });

router.get('/', hasPermission('projectId'), async (req, res) => {
  console.log(req.params);
  const data = await issueService.listIssuesOfProject(req.params.projectId);
  console.log(data);

  res.status(data.status).json(data);
});

router.post('/', hasPermission('projectId'), async (req, res) => {
  const data = await issueService.addNewIssue(
    req.body.title,
    req.body.status,
    req.params.projectId
  );

  console.log(data);

  res.status(data.status).json(data);
});
router.delete('/:id', hasPermission('projectId'), async (req, res) => {
  const data = await issueService.removeIssue(
    req.params.id,
    req.params.projectId
  );
  console.log(data);

  res.status(data.status).json(data);
});
router.put('/:id', hasPermission('projectId'), async (req, res) => {
  const data = await issueService.updateIssue(req.params.id, req.body);
  console.log(data);

  res.status(data.status).json(data);
});

module.exports = router;
