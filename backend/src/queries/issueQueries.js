const dbService = require('../services/dbService');

const getIssuesByProjectId = async (projectId) => {
  const db = dbService.getDBPool();

  const [rows] = await db.query('SELECT * FROM `issue` WHERE project_id=?;', [
    projectId,
  ]);
  return rows;
};

const getIssueById = async (issueId) => {
  const db = dbService.getDBPool();

  const [rows] = await db.query('SELECT * FROM `issue` WHERE id=?', [issueId]);

  return rows[0];
};

const addNewIssue = async (title, issueStatus = 'todo', projectId) => {
  const db = dbService.getDBPool();
  const [
    rows,
  ] = await db.query(
    'INSERT INTO `issue` (title, status, project_id) VALUES (?,?,?);',
    [title, issueStatus, projectId]
  );
  return rows.insertId;
};

const removeIssueById = async (issueId, projectId) => {
  const db = dbService.getDBPool();
  const [
    rows,
  ] = await db.query(' DELETE FROM `issue` WHERE project_id=? AND id=?;', [
    projectId,
    issueId,
  ]);
  return rows;
};

const updateIssueById = async (id, issueProps) => {
  const db = dbService.getDBPool();

  const [
    rows,
  ] = await db.query('UPDATE `issue` SET title=?, status=?  WHERE id= ?;', [
    issueProps.title,
    issueProps.status,
    id,
  ]);

  return rows;
};

const issueQueries = {
  getIssuesByProjectId,
  getIssueById,
  addNewIssue,
  removeIssueById,
  updateIssueById,
};
module.exports = issueQueries;
