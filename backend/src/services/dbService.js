const mysql = require('mysql2/promise');
const config = require('../config');

const mysqlConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};
console.log(mysqlConfig);

const db = {
  pool: null,
};

const dbPool = () => {
  db.pool = mysql.createPool(mysqlConfig);
};

const getDBPool = () => db.pool;

const createConnection = () => mysql.createConnection(mysqlConfig);

const dbService = {
  dbPool,
  getDBPool,
  createConnection,
};

module.exports = dbService;
