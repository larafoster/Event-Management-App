const router = require ('express').Router ();
const {Event, User} = require ('../models');
const withAuth = require ('../utils/auth');

router.get ('/', async (req, res) => {
  try {
    //GET all Events and JOIN with user data
    const eventData = await Event.findAll ({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    //serialize data so the template can read it
    const events = eventData.map (Event => Event.get ({plain: true}));

    //Pass serialized data
    res.render ('homepage', {
      events,
    });
  } catch (err) {
    res.status (500).json (err);
  }
});

// get single event
router.get ('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk (req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (eventData) {
      const event = eventData.get ({plain: true});

      res.render ('single-event', {event});
    } else {
      res.status (404).end ();
    }
  } catch (err) {
    res.status (500).json (err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event }],
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


router.get ('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render ('login');
});

/*router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect ('/dashboard');
    return;
  }

  res.render('signup');
});*/

module.exports = router;
