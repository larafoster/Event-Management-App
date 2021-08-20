const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
  {
    comment_details: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
          model: 'user',
          key: 'username',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

//module.exports = Comment;
 