'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    static associate(models) {
      this.belongsTo(models.clients, {
        foreignKey: 'client_id'
      });
      this.belongsTo(models.accountTypes, {
        foreignKey: 'type'
      });
    }
  };
  account.init({
    acount_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'account',
    underscored: true
  });
  return account;
};