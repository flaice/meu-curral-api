const Sequelize = require('sequelize');
const enviroment = process.env.ENV || 'development';
const {
  database: { name, host, dialect, user, password, define }
} = require('../config/config')[enviroment];

const sequelize = new Sequelize(
  name,
  user,
  password,
  {
    host: host,
    dialect: dialect
  },
  define
);

module.exports = sequelize;
