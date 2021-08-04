const router = require('express').Router();
const { Application, Interview, Test } = require('../../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// Need routes for the job tests.

// GET, Not sure if this is necessary
router.get('/test', async (req, res) => {
});


// POST, Need to be able to add new tests tot he database
router.post('/test', async (req, res) => {
});


// PUT, Need to be able to update the test info
router.put('/test/:id', async (req, res) => {
});


// DELETE, Need to be able to delete tests by id
router.delete('/test/:id', async (req, res) => {
});