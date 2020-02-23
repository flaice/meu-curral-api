const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Accounts = sequelize.define('accounts', {
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
  },
  planLevel: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  statusID: {
    allowNull: false,
    type: Sequelize.INTEGER,
    validate: { len: [2, 255] },
    references: {
      model: 'accountStatus',
      key: 'id'
    }
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

module.exports = Accounts;
