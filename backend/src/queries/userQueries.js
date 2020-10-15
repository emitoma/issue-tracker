const dbService = require('../services/dbService');

const createUser = async (emailAddress, passwordHash) => {
  const db = dbService.getDBPool();

  console.log('query data 1', emailAddress, passwordHash);

  const [
    rows,
  ] = await db.query(
    'INSERT INTO `user` (  `email_address` ,`password_hash`) VALUES (?,?);',
    [emailAddress, passwordHash]
  );
  return rows.insertId;
};

const findUserByEmail = async (emailAddress) => {
  const db = dbService.getDBPool();

  const [rows] = await db.query(
    'SELECT `email_address` FROM `user` WHERE `email_address`=?;',
    [emailAddress]);
  console.log('rows0', rows);
  return rows[0];
};
const userQueries = {
  createUser,
  findUserByEmail,
};

module.exports = userQueries;
