const { Model, DataTypes, TEXT } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
  {
  comment_details: { 
    type: DataTypes.TEXT
  },
  
    event_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'event',
          key: 'id',
      },
    },

    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
 