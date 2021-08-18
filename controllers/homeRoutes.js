const router = require('express').Router();
const { Event, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        //GET all Events and JOIN with user data
        const eventData = await Event.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
        //serialize data so the template can read it
        const events = eventData.map((Event) => Event.get({plain: true}));

        //Pass serialized data 
        res.render('homepage', {
            events,
        });
    } catch (err) {
        res.status(500).json(err);    
    }
});

router.get('/event/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPK(req.params.id, {
            include: {
                model: User,
                attributes: ['username'],
            },
        });

        const event = eventData.get({ plain: true });

        res.render('event', {
            ...event,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/dashboard', withAuth, async (req, res) => {
    try{
    
     const userData = await User.findByPK(req.session.user_id, {
         attributes: {exclude: ['password'] },
         include: [{model: Event}],
     });

     const user = userData.get({ plain: true });

     res.render('dashboard', {
         ...user,
         logged_in: true
     });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('./dashboard');
        return;
    }

    res.render('login');
});
module.exports = router;
