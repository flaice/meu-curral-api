const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const MemberShip = sequelize.define('memberShip', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  relatedUserid: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  relatedCompanyid: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: 'companies',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  relatedRoleid: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: 'roles',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  emailAddress: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: { isEmail: true }
  },
  phoneNumber: {
    allowNull: true,
    type: Sequelize.STRING,
    validate: { len: [1, 255] }
  }
});

module.exports = MemberShip;
