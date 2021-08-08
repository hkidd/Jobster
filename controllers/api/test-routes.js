const router = require('express').Router();
const { Application, Interview, Test } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// Need routes for the job tests.

// Edit test route
router.get("/editTest/:id", async (req, res) => {
    try {
      const dbTestData = await Test.findOne({
          where: { application_id: req.params.id }
      });
      console.log(dbTestData);
  
      const test = dbTestData.get({ plain: true });
      console.log(test.test);
  
      res.render("editTest", {
        test,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
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
            application_id: req.session.applicationId,
        });
        // if the test is successfully created, the new response will be returned as json
        res.status(200).json(testData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT, Update an test by application id
router.put("/editTestInfo/:id", withAuth, async (req, res) => {
    console.log(req.params.id);
  
    try {
      const testData = await Test.update(
        {
            test_date: req.body.test_date,
            concepts: req.body.concepts,
            passed: req.body.passed,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      req.session.save(() => {
        // if the application is successfully updated, the response will be returned as json
        res.status(200).json(testData);
      });
    } catch (err) {
      res.status(500).json(err);
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