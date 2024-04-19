'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Enamies',
      [
        {
          enamyName: 'DarK',
          speed: 100,
          power: 300,
          noStress: 17,
          powerofSmile: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          enamyName: 'DurK',
          speed: 10,
          power: 700,
          noStress: 7,
          powerofSmile: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          enamyName: 'Krut',
          speed: 500,
          power: 700,
          noStress: 77,
          powerofSmile: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};