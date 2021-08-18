const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    const eventData = await Event.findAll().catch((err) => {
        res.json(err);
    });

    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('all', { events });
});


module.exports = router;