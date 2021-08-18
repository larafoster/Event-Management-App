const router = require('express').Router();
const { Event, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            attributes: { exclude: ['password'] },
            order: [['date', ]]
        })
    }

});

module.exports = router;
