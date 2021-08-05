const router = require('express').Router();
const { Application, Interview, Test } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// Need routes for the job tests.

// GET, Not sure if this is necessary
router.get('/test', withAuth, async (req, res) => {
    try {
        const dbTestData = await Test.findAll({
            include: [],
        });

          res.status(200).json(dbTestData);
        } catch (err) {
          res.status(400).json(err);
        }
});


// POST, Need to be able to add new tests to the database
router.post('/test', withAuth, async (req, res) => {
    // create a new test
    console.log("post route")
    try {
        const testData = await Test.create({
            test_date: req.body.test_date,
            concepts: req.body.concepts,
            passed: req.body.passed,
        });
        // if the test is successfully created, the new response will be returned as json
        res.status(200).json(testData);
    } catch (err) {
        res.status(400).json(err);
    }
});


// PUT, Need to be able to update test info by id
router.put('/test/:id', withAuth, async (req, res) => {
    console.log("post route")
    try {
        const testData = await Test.create({
            test_date: req.body.test_date,
            concepts: req.body.concepts,
            passed: req.body.passed,
        });
        // if the test is successfully updated, the new response will be returned as json
        res.status(200).json(testData);
    } catch (err) {
        res.status(400).json(err);
    }
});


// DELETE, Need to be able to delete tests by id
router.delete('/test/:id', withAuth, async (req, res) => {
     try {
        const testData = await Test.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!testData) {
            res.status(404).json({ message: "No test found with this id!" });
            return;
        }

        res.status(200).json(testData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;