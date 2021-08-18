const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth)

module.exports = router;