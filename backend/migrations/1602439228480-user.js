const dbService = require('../src/services/dbService');

module.exports.up = async function () {
  const conn = await dbService.createConnection();

  await conn.execute(
    'CREATE TABLE `user` (`id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY, `email_address` VARCHAR(255) NOT NULL UNIQUE, `password_hash` VARCHAR(255) NOT NULL);'
  );

  conn.end();
};

module.exports.down = async function () {
  const conn = await dbService.createConnection();

  await conn.execute('DROP TABLE `user`;');

  conn.end();
};
