'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Match.belongsTo(
        models.Dog,
        {foreignKey: 'dogId1'}
      )
      Match.belongsTo(
        models.Dog,
        {foreignKey: 'dogId2'}
      )
    }
  }
  Match.init({
    dogId1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dogId2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};