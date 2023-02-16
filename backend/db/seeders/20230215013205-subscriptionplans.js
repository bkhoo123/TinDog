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
   options.tableName = 'SubscriptionPlans'
   await queryInterface.bulkInsert(options, [
    {
      name: 'Chihuahua',
      price: 0,
    },
    {
      name: 'Labrador',
      price: 49
    },
    {
      name: 'Mastiff',
      price: 99
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SubscriptionPlans'
    const Op = Sequelize.Op
    await queryInterface.bulkDelete(options, {price: {
      [Op.in]: [0, 49, 99]
    }}, {})
  }
};
