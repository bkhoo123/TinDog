'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   options.tableName = 'Matches'
   await queryInterface.bulkInsert(options, [
    {
      dogId1: 1,
      dogId2: 2,
    },
    {
      dogId1: 1, 
      dogId2: 3
    },
    {
      dogId1: 1, 
      dogId2: 4
    },
    {
      dogId1: 2,
      dogId2: 3
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Matches'
    const Op = Sequelize.Op
    await queryInterface.bulkDelete(options, {
      dogId1: {[Op.in]: [1, 2, 3, 4]}
    }, {})
  }
};
