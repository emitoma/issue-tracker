// mysql2 specific issue
require('mysql2/node_modules/iconv-lite').encodingExists('cesu8');

beforeAll(() => {
  require('./src/services/dbService').dbPool();
});

afterAll(() => {
  const db = require('./src/services/dbService').getDBPool();
  db.end();
});
