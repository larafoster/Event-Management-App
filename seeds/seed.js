const sequelize = require('../config/connection');
const { User, Event } = require('../models');
const date = require('date-fns');


const userData = require('./userData.json');
const eventData = require('./eventData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await User.bulkCreate(userData, { 
        individualHooks: true,
        returning: true,

    });

    for (const event of eventData) {
        await Event.create({ 
            ...event,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};


seedDatabase();
