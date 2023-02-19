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
   options.tableName = 'Dogs'
   await queryInterface.bulkInsert(options, [
    {
      ownerId: 1,
      dogName: 'PaintJob',
      breed: 'beagle',
      url: "https://images.dog.ceo/breeds/beagle/n02088364_16065.jpg",
      description: "I am the best dog licker in the world no one can lick as much as me"
    },
    {
      ownerId: 1,
      dogName: 'MinSoe',
      breed: 'terrier-bedlington',
      url: "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1129.jpg",
      description: "My owner always makes me smell good so I smell good too"
    },
    {
      ownerId: 2,
      dogName: 'ChrisdaLaw',
      breed: 'brabancon',
      url: "https://images.dog.ceo/breeds/brabancon/n02112706_793.jpg",
      description: "Looking to marry Simon's Dog"
    },
    {
      ownerId: 2,
      dogName: 'Mochi',
      breed: 'corgi-cardigan',
      url: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_5242.jpg",
      description: "I actually want to marry a cat I don't know why I'm here"
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
    options.tableName = 'Dogs'
    const Op = Sequelize.Op
    await queryInterface.bulkDelete(options, {
      ownerId: {[Op.in]: [1, 2, 3, 4]}
    }, {})
  }
};
