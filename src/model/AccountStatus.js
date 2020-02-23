const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const AccountStatus = sequelize.define('accountStatu', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  desctription: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: { len: [2, 255] }
  }
});

module.exports = AccountStatus;
