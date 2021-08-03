// Urls with /api will take the user here
// Might want to move the application routes here

const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
