const fs = require('fs');
const dotenv = require('dotenv');

const dotenvExists = fs.existsSync('.env.local');

if (dotenvExists) {
  const envConfig = dotenv.parse(fs.readFileSync('.env.local'));

  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

module.exports = {
  port: process.env.PORT,
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  jwtSecret: process.env.SECRET,
};
