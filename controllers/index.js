const router = require('express').Router();

const apiRoutes = require('./api');
const applicationRoutes = require('./application-routes.js');

router.use('/', applicationRoutes);
router.use('/api', apiRoutes);

module.exports = router;
