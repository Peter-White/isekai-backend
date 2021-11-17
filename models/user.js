'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    date_registered: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN,
    confirmed_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};