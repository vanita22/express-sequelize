'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accountTypes extends Model {
    static associate(models) {
      this.hasMany(models.accounts, {
        foreignKey: 'type'
      })
    }
  };
  accountTypes.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'accountTypes',
    tableName: "account_types",
    timestamps: true
  });
  return accountTypes;
};