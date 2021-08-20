const router = require('express').Router();
const { Event, User } = require('../models');
const withAuth = require('../utils/auth');

// new event form
router.get('/new-event', withAuth, (req, res) => {
  res.render('new-event', {
  
  });
});

// get single event 
router.get('/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
    });

    if (eventData) {
      const event = eventData.get({ plain: true });

      res.render('single-event', { event });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit event view
router.get('/:id/edit', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    
    if (eventData) {
      const event = eventData.get({ plain: true });
      
      res.render('edit-event', {
        layout: 'dashboard',
        event,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});



module.exports = router;