const Sequelize = require('sequelize');
const sequelize = require('../database/databese');

const Users = sequelize.define('users', {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    allownull: false,
    type: Sequelize.STRING(255),
    validade: { len: [2, 255] }
  },
  lastName: {
    allownull: false,
    type: Sequelize.STRING(255),
    validade: { len: [2, 255] }
  },
  birthDate: {
    allownull: true,
    type: Sequelize.DATE
  },
  address: {
    allownull: false,
    type: Sequelize.STRING(255),
    validade: { len: [2, 255] }
  }
});

module.exports = Users;
