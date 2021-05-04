'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accounts extends Model {
    static associate(models) {
      this.belongsTo(models.clients, {
        foreignKey: 'client_id'
      });
      this.belongsTo(models.accountTypes, {
        foreignKey: 'type'
      });
      this.hasMany(models.transactions, {
        foreignKey: 'account_ori'
      });
    }
  };
  accounts.init({
    account_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'accounts',
    underscored: true
  });
  return accounts;
};