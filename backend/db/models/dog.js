'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dog.belongsTo(
        models.User,
        {foreignKey: 'ownerId'}
      )
    }
  }
  Dog.init({
    ownerId: DataTypes.INTEGER,
    dogName: DataTypes.STRING,
    breed: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};