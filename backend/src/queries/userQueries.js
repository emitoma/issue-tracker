const dbService = require('../services/dbService');

const createUser = async ({ email, password }) => {
  const db = dbService.getDBPool();

  const [
    rows,
  ] = await db.query('INSERT INTO `user` (`email`, `password`) VALUES (?,?);', [
    email,
    password,
  ]);
  return rows.insertId;
};

const findUserByEmail = async (email) => {
  const db = dbService.getDBPool();

  const [rows] = await db.query('SELECT `email` FROM `user` WHERE `email`=?;', [
    email,
  ]);
  return rows[0];
};
const userQueries = {
  createUser,
  findUserByEmail,
};


const findUserWithPasswordByEmail = async (email) => {
  console.log("userQuery")
  const db = dbService.getDBPool();

  const [rows] = await db.query('SELECT * FROM `user` WHERE `email`=?;', [email]);

  console.log('rows: ', rows[0])
  return rows[0];

};

module.exports = userQueries;
