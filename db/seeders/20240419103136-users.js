'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: 'Sara Parcer',
          age: 21,
          email: 'sara@mail.ru',
          regustrationDate: '04.04.2004',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Ser Patric',
          age: 41,
          email: 'ser@mail.ru',
          regustrationDate: '04.04.2014',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'SaraSofa Pat',
          age: 31,
          email: 'sara@mail.ru',
          regustrationDate: '04.04.2007',
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

