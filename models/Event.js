const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');
class Event extends Model {};
var format = require('date-fns/format');

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
  //    hooks: {
  //     beforeCreate: async (timeData) => {
  //     //console.log(timeData.event_date, typeof timeData.event_date)
  //     //const date = timeData.event_date.split('-');
  //       // 
  //     timeData.event_date = await format(new Date(timeData.event_date), "MMMM-do");
  //       return timeData;
  //     },

  //     beforeUpdate: async (updatedTimeData) => {

  //       updatedTimeData.event_date = await format(new Date(), "MMMM-do");
  //       return updatedTimeData;
  //     },
  //   },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;


