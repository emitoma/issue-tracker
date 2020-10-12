const { use } = require('../app');
const dbService = require('../services/dbService');

const createUser = async (emailAddress, passwordHash) => {
  const db = dbService.getDBPool();

  console.log(emailAddress, passwordHash);

  const [
    rows,
  ] = await db.query(
    'INSERT INTO `user` (  `email_address` ,`password_hash`) VALUES (?,?);',
    [emailAddress, passwordHash]
  );
  return rows.insertId;
};

const userQueries = {
  createUser,
};

module.exports = userQueries;
