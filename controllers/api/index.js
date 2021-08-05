// Urls with /api will take the user here
// Might want to move the application routes here

const router = require('express').Router();

const userRoutes = require('./user-routes');
const interviewRoutes = require('./interview-routes');
const testRoutes = require('./test-routes');

router.use('/users', userRoutes);
router.use('/interview-routes', interviewRoutes);
router.use('/test-routes', testRoutes);

module.exports = router;
