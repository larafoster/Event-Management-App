const User = require('./User');
const Event = require('./Event');
const Comment = require('./Comment');
const Join = require('./Join'); 

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});


Join.belongsTo(Event, {
  through: 'user_username',
  onDelete: 'CASCADE'
});


module.exports = { User, Event };
