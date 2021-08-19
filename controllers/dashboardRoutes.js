const router = require('express').Router();
const { Event } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        user_id: req.session.userId,
      },
    });

    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('dashboard', {
      layout: 'dashboard',
      events,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-event', { 'dashboard' });
});

router.get('/edit/:id', withAuth, async (req, res) => {
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
