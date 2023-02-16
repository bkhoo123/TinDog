'use strict';
const {Model} = require('sequelize');

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
      Dog.hasMany(
        models.Match,
        {foreignKey: 'dogId1'}
      )
      Dog.hasMany(
        models.Match,
        {foreignKey: 'dogId2'}
      )
    }
  }
  Dog.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};