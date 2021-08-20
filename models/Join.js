const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Join extends Model {};

Join.init(
  {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
        model: 'user', 
        key: 'username' //to join they enter their username and the event is added to their joined events 
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'join',
  }
);

module.exports = Join;