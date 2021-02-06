// add project
// delete project
// list projects based on user id
// segéd függvény, aminek átadom a project id mega user id-t, kiszedi majd a requestből ezeket
const dbService = require('../services/dbService');

const getProjectsByOwnerId = async (ownerId) => {
  const db = dbService.getDBPool();

  const [rows] = await db.query('SELECT * FROM `project` WHERE owner_id=?;', [
    ownerId,
  ]);
  return rows;
};

const addNewProject = async (name, description, ownerId) => {
  const db = dbService.getDBPool();
  const [
    rows,
  ] = await db.query(
    'INSERT INTO `project` (name, description, owner_id) VALUES (?,?,?);',
    [name, description, ownerId]
  );

  return rows.insertId;
};

const removeProjectById = async (projectId, ownerId) => {
  const db = dbService.getDBPool();

  const [
    rows,
  ] = await db.query('DELETE FROM `project` WHERE  id=? AND owner_id= ?;', [
    projectId,
    ownerId,
  ]);

  console.log(rows);
  return rows;
};

const findProjectByID = async (projectId) => {
  const db = dbService.getDBPool();
  console.log(projectId);
  const [rows] = await db.query('SELECT * FROM `project` WHERE id=?;', [
    projectId,
  ]);

  return rows[0];
};

const projectQueries = {
  getProjectsByOwnerId,
  addNewProject,
  removeProjectById,
  findProjectByID,
};

module.exports = projectQueries;
