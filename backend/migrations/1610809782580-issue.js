const dbService = require('../src/services/dbService');

module.exports.up = async function (next) {
  const conn = await dbService.createConnection();

  await conn.execute(
    'CREATE TABLE `issue` (`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, `title` VARCHAR(255) NOT NULL, `status` VARCHAR(255) NOT NULL , `project_id` INT NOT NULL, FOREIGN KEY (project_id) REFERENCES project(id)  ON DELETE CASCADE);'
  );
  conn.end();
};

module.exports.down = async function (next) {
  const conn = await dbService.createConnection();
  await conn.execute('DROP TABLE `issue`;');

  conn.end();
};
