'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatBot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // ChatBot.belongsToMany(
      //   models.ChatMessages,
      //   {foreignKey: 'chatBotId'}
      // )
    }
  }
  ChatBot.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ChatBot',
  });
  return ChatBot;
};