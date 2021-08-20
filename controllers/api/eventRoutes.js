const router = require('express').Router();
const { Event } = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    const eventData = await Event.findAll().catch((err) => {
        res.json(err);
    });
    res.status(200).json(eventData);
    // const events = eventData.map((event) => event.get({ plain: true }));

    // res.render(`name`, { events });
});

module.exports = router;