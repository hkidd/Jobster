const router = require('express').Router();
const { Application, Interview, Test } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// Need GET, POST, PUT, and DELETE routes for the job interviews.

// GET
router.get('/interview', async (req, res) => {
});


// POST
router.post('/interview', async (req, res) => {
});


// PUT
router.put('/interview/:id', async (req, res) => {
});


// DELETE
router.delete('/interview/:id', async (req, res) => {
});