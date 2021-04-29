'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions_types extends Model {
    static associate(models) {
      this.hasMany(models.transaction, {
        foreignKey: 'transactions_types'
      });
    }
  };
  transactions_types.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactions_types',
  });
  return transactions_types;
};