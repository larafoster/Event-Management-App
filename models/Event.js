const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
var format = require('date-fns/format');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },

    event_date: {
      type: DataTypes.STRING,
    },
    event_time: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    covid_items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  { 
    hooks: {
      beforeCreate: async (timeData) => {
        timeData.event_time = await date.format(date, [format= 'dddd-MMMM-Qo', [options]]);
        return timeData;
      },
      beforeUpdate: async (updatedTimeData) => {
        updatedTimeData.event_time = await date.format(date, [format= 'dddd-MMMM-Qo', [options]]);
        return updatedTimeData;
      },
    },

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;
