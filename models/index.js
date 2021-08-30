const User = require('./User');
const Event = require('./Event');
const Comment = require('./Comment');
//const Join = require('./Join');

User.belongsToMany(Event, {
  through: {
    model: Comment,
    unique: false
  },
  as: 'planned_events'
});

Event.belongsToMany(User, {
  through: {
    model: Comment,
    unique: false
  },
  as: 'event_goers'
});

/* Event.hasMany(Comment, {
  foreignKey: 'user_id',
  },
); */

module.exports = { User, Event, Comment };
