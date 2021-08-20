/* const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Join extends Model {}

Join.init(
  {
username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user', //not sure if it should reference event with key: user_id 
        key: 'username', //to join they enter their username and the event is added to their joined events 
      },
    },
  },
  {
    sequelize
  }
);

module.exports = Join; */