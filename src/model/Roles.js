const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Roles = sequelize.define('roles', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: { len: [2, 255] }
  }
});

module.exports = Roles;
