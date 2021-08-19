const router = require('express').Router();
const { Event } = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    const eventData = await Event.findAll().catch((err) => {
        res.json(err);
    });

    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('all', { events });
});

/*router.put('/:id', withAuth, async (req, res) => {
    try {
        const eventData = await Event.update({
            ...req.body,
            name: req.session.name,
            description: req.session.description,
            event_date: req.session.event_date,
            event_time: req.session.event_time,
            category: req.session.category,
            covid_items: req.session.covid_items,
            user_id: req.session.user_id,
        });
        res.status(200).json(eventData);
    } catch (err) {
        res.status(400).json(err);
    }
});*/



module.exports = router;