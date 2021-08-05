const router = require('express').Router();
const { Application, Interview, Test } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// Need GET, POST, PUT, and DELETE routes for the job interviews.

// GET, Not sure if this is necessary
router.get('/interview/', withAuth, async (req, res) => {
    try {
        const dbInterviewData = await Interview.findAll({
            include: [],
        });

        console.log(dbInterviewData);

          res.status(200).json(dbInterviewData);
        } catch (err) {
          res.status(400).json(err);
        }

    //     const interviews = dbInterviewData.map((apps) =>
    //         apps.get({ plain: true })
    //     );

    //     console.log(interviews);

    //     res.render('homepage', {
    //         interviews,
    //         loggedIn: req.session.loggedIn,
    //     });
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});


// POST
router.post("/interview/", withAuth, async(req, res) => {
    // create a new interview
    console.log("post route")
    try {
        const interviewData = await Interview.create({
            interview_date: req.body.interview_date,
            thank_you_note_sent: req.body.thank_you_note_sent,
            follow_up_email: req.body.follow_up_email,
        });
        // if the interview is successfully created, the new response will be returned as json
        res.status(200).json(interviewData);
    } catch (err) {
        res.status(400).json(err);
    }
});


// PUT
router.put('/interview/:id', withAuth, async (req, res) => {
    // Update an interview by id
    try {
        const interviewData = await Interview.update({
            interview_date: req.body.interview_date,
            thank_you_note_sent: req.body.thank_you_note_sent,
            follow_up_email: req.body.follow_up_email,
        }, {
            where: {
                id: req.params.id,
            },
        });
        // if the interview is successfully updated, the response will be returned as json
        res.status(200).json(interviewData);
    } catch (err) {
        res.status(500).json(err);
    };
});


// DELETE
router.delete('/interview/:id', withAuth, async (req, res) => {
    // delete a interview by its `id` value
    try {
        const interviewData = await Interview.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!interviewData) {
            res.status(404).json({ message: "No interview found with this id!" });
            return;
        }

        res.status(200).json(interviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;