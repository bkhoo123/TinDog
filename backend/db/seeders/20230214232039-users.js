'use strict';
const bcrypt = require("bcryptjs");


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'simon.min123@gmail.com',
        username: 'Tyreek_Hill',
        firstName: 'Simon',
        lastName: 'Min',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'chris.law123@gmail.com',
        username: 'Julio_Jones',
        firstName: 'Anthony',
        lastName: 'Liu',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'animelover123@gmail.com',
        username: 'Stefon_Diggs',
        firstName: 'Brian',
        lastName: 'Khoo',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'ilovedogs1233@gmail.com',
        username: 'Klay Thompson',
        firstName: 'Leon',
        lastName: 'Liu',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Tyreek_Hill', 'Julio_Jones', 'Stefon_Diggs', 'Klay Thompson'] }
    }, {});
  }
};


