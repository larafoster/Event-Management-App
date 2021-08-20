const User = require('./User');
const Event = require('./Event');
/* const Comment = require('./Comment');
const Join = require('./Join'); */

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

/* Comment.belongsTo(User, {
  foreignKey: 'user_Id',
  onDelete: 'CASCADE'
}); */

/* add Join --- 
Join.belongsTo(Event, { through: 'user', /* options  });
*/


module.exports = { User, Event };
