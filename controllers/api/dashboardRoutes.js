const router = require('express').Router();
const { Event } = require('../../models');
//const withAuth = require('../../utils/auth');




router.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create({
            ...req.body,
            name: req.body.name,
            description: req.body.description,
            event_date: req.body.event_date,
            event_time: req.body.event_time,
            category: req.body.category,
            covid_items: req.body.covid_items,
            user_id: req.body.user_id,
        });
        res.status(200).json(newEvent);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const eventData = await Event.update({
            ...req.body,
            name: req.body.name,
            description: req.body.description,
            event_date: req.body.event_date,
            event_time: req.body.event_time,
            category: req.body.category,
            covid_items: req.body.covid_items,
            user_id: req.body.user_id,
        });
        res.status(200).json(eventData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) =>{
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if(!eventData) {
            res.status(404).json({ message: 'No event found with this id!' });
            return;
        }

        res.status(200).json(eventData)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;