const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Companies = sequelize.define('companies', {
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
  accessLevel: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  relatedAccountID: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'accounts',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }
});

module.exports = Companies;
