'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    static associate(models) {
      this.hasMany(models.account, {
        foreignKey: 'client_id'
      });
    }
  };
  clients.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clients',
    underscored: true
  });
  return clients;
};