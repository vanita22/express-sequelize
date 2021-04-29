'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accountTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.account, {
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
    timestamps: false
  });
  return accountTypes;
};