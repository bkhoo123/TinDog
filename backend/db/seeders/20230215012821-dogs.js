'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const names = "Abraham,Rocco,Aryan,Phillip,Neil,Rodney,Jordon,Anne,Abbey,Turner,Bryant,Adrienne,Lillian,Emiliano,Alanna,Mariana,Santos,Lucille,Gillian,Kyla,Sage,Paityn,Keegan,Stephen,Esteban,Titus,Angel,Madeline,Lukas,Lucian,Sidney,Amiyah,Kadyn,Bryce,Aracely,Marlene,Vincent,Ulises,Cohen,Leonel,Baylee,Derek,Danny,Travis,Raegan,Jeffery,Shane,Josephine,Adyson,Nathen"
const split = names.split(",")


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
      url: "https://images.dog.ceo/breeds/beagle/n02088364_16065.jpg"
    },
    {
      ownerId: 1,
      dogName: 'MinSoe',
      breed: 'terrier-bedlington',
      url: "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1129.jpg"
    },
    {
      ownerId: 2,
      dogName: 'ChrisdaLaw',
      breed: 'brabancon',
      url: "https://images.dog.ceo/breeds/brabancon/n02112706_793.jpg"
    },
    {
      ownerId: 2,
      dogName: 'Mochi',
      breed: 'corgi-cardigan',
      url: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_5242.jpg"
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
