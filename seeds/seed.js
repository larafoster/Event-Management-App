const sequelize = require('../config/connection');
const { User, Event } = require('../models');

const userData = require('../models');

const seedDatabase = async () => {
    await squelize.sync({ force: true});

    await User.bulkCreate(userData, { 
        individualHooks: true,
        returning: true,

    });

    await Event.bulkCreate(userData, { 
        individualHooks: true,
        returning: true,

    });
    process.exit(0); 

};


seedDatabase();
