const app = require('./app');
const config = require('./config');
const dbService = require('./services/dbService');

const PORT = config.port || 3000;

dbService.dbPool();

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
