const dbService = require('../services/dbService');

const createUser = async ({ emailAddress, passwordHash }) => {
  const db = dbService.getDBPool();

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

  const [
    rows,
  ] = await db.query(
    'SELECT `email_address` FROM `user` WHERE `email_address`=?;',
    [emailAddress]
  );
  return rows[0];
};
const userQueries = {
  createUser,
  findUserByEmail,
};

module.exports = userQueries;
