const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Logins = sequelize.define('logins', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userName: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true,
    validate: { len: [1, 255] }
  },
  passwordHash: {
    allowNull: false,
    type: Sequelize.STRING(1024)
  },
  passwordSalt: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: { len: [2, 255] }
  },
  relatedUserId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    defferable: Sequelize.Deferrable.INITIALLY_DEFERRED
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

module.exports = Logins;
