const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const BlackList = sequelize.define('blacklist', {
  id: {
    alloNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  token: {
    alloNull: false,
    type: Sequelize.INTEGER,
    validate: { len: [1, 255] }
  }
});

module.exports = BlackList;
