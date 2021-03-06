const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Users = sequelize.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validade: { len: [2, 255] }
  },
  lastName: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validade: { len: [2, 255] }
  },
  birthDate: {
    allowNull: true,
    type: Sequelize.DATE
  },
  address: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validade: { len: [2, 255] }
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Users;
