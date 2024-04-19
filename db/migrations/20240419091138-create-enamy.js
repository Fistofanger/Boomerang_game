'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enamies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      enamyName: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      speed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      power: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      noStress: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      powerofSmile: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enamies');
  }
};