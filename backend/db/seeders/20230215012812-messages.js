'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
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
   options.tableName = 'Messages'
   await queryInterface.bulkInsert(options, [
    {
      senderId: 1,
      recipientId: 2,
      content: 'Your dog is so lovely with mine it is a match made in heaven',
      
    },
    {
      senderId: 2, 
      recipientId: 1,
      content: 'I concur and would love to set up another dog date as well',
    },
    {
      senderId: 3,
      recipientId: 1,
      content: 'My dog had sparkling eyes when she saw your dog'
    },
    {
      senderId: 4,
      recipientId: 1,
      content: 'Your dog is so cute'
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
    options.tableName = 'Messages'
    const Op = Sequelize.Op
    await queryInterface.bulkDelete(options, {
      recipientId: {[ Op.in]: [1, 2, 3, 4]}
    }, {})
  }
};
