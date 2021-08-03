// Based on the url, using a / will take the user to the application routes
// Otherwise, /api will take the user to the api routes folder

const router = require('express').Router();

const apiRoutes = require('./api');
const applicationRoutes = require('./application-routes.js');

router.use('/', applicationRoutes);
router.use('/api', apiRoutes);

module.exports = router;