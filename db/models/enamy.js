'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enamy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enamy.init({
    enamyName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    speed: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    power: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    noStress: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    powerofSmile: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Enamy',
  });
  return Enamy;
};