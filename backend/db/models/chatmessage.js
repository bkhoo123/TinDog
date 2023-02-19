'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatMessage.belongsTo(
        models.User,
        {foreignKey: 'userId'}
      )
      // ChatMessage.belongsTo(
      //   models.ChatBot, 
      //   {foreignKey: 'chatBotId'}
      // )
    }
  }
  ChatMessage.init({
    chatBotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ChatMessage',
  });
  return ChatMessage;
};