const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
// const requireDir = require('require-dir');

const routes = require('./src/routes');
const database = require('./src/database/database');
const { internalServer, notFound } = require('./src/middleware/errorHandler');
const enviroment = process.env.ENV || 'development';
const { port, host } = require('./src/config/config')[enviroment];

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);
app.use(internalServer);
app.use(notFound);
database.sync({ force: true }).then(() => {
  app.listen(port, host, () => {
    console.log(`App listening to ${host} on port ${port}`);
  });
});
