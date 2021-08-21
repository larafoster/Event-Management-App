const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(eventData);
    // const events = eventData.map((event) => event.get({ plain: true }));

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

/* router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
}); */
router.put('/:id', async (req, res) => {
  try {
    const eventUpdate = await Event.update(
      {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        event_date: req.body.event_date,
        event_time: req.body.event_time,
        covid_items: req.body.covid_items
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(eventUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Event.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
