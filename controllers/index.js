const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const eventRoutes = require('./eventRoutes');


router.use('/', homeRoutes);
router.use('/event', eventRoutes);
router.use('/api', apiRoutes);

module.exports = router;
