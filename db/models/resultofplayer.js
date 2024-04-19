'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resultOfPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resultOfPlayer.init({
    gameTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    enamyKilled: {
      type: DataTypes.INTEGER
    },
    scoree: {
      type: DataTypes.INTEGER
    },
    coins: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'resultOfPlayer',
  });
  return resultOfPlayer;
};