const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');

const event_dates = ["6, 12", "7, 4", "8, 21", "9, 13", "9, 25"];

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
      allowNull: true,
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
    covid_items: {
      type: DataTypes.STRING,
      allowNull: true,
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

        for(let i = 0; i < event_dates.length; i++) {
        
        timeData.event_date = await format(new Date(event_dates[i]), "MMMM-Qo");
        };
        console.log(timeData.event_date);
        return timeData;
      },

      beforeUpdate: async (updatedTimeData) => {

        updatedTimeData.event_date = await format(new Date(), "MMMM-Qo");
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
