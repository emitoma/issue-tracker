const dbService = require('../src/services/dbService');

module.exports.up = async function () {
  const conn = await dbService.createConnection();
  await conn.execute(
    'CREATE TABLE `project` (`id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `description` VARCHAR(255), `owner_id` INT NOT NULL, FOREIGN KEY (owner_id) REFERENCES user(id));'
  );
  conn.end();
};

module.exports.down = async function () {
  const conn = await dbService.createConnection();

  await conn.execute('DROP TABLE `project`;');

  conn.end();
};
