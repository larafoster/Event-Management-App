const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');
class Event extends Model {}


var format = require('date-fns/format');
class Event extends Model {};

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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    covid_items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { 
     hooks: {
      beforeCreate: async (timeData) => {

        const event_dates = ["6, 12", "7, 4", "8, 21", "9, 13", "9, 25"];

        for(let i = 0; i < event_dates.length; i++) {
        timeData.event_date = await format(new Date(event_dates[i]), "MMMM-do");
        console.log(timeData);
        };
        return timeData;
      },

      beforeUpdate: async (updatedTimeData) => {

        updatedTimeData.event_date = await format(new Date(), "MMMM-do");
        return updatedTimeData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;
