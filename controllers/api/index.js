// Urls with /api will take the user here
// Might want to move the application routes here

const router = require('express').Router();

const userRoutes = require('./user-routes');
const interviewRoutes = require('./interview-routes');

router.use('/users', userRoutes);
router.use('/interview-routes', interviewRoutes);

module.exports = router;
