const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
// const requireDir = require('require-dir');

const routes = require('./src/routes/routes');
const database = require('./src/database/database');
const { internalServer, notFound } = require('./src/middleware/errorHandler');
const enviroment = process.env.ENV || 'developement';
const { port, host } = require('./src/config/config')[enviroment];

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(internalServer);
app.use(notFound);
app.use(routes);

database.sync({ force: true }).then(() => {
  app.listen(port, host, () => {
    console.log(`App listening to ${host} on port ${port}`);
  });
});
