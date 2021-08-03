const router = require('express').Router();
const { Application } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// Need GET, POST, PUT, and DELETE routes for the job applications.
// These will be presented on the home page after user login using handlebars

// GET all applications for homepage
router.get('/', async (req, res) => {
  try {
    const dbApplicationData = await Application.findAll({
      include: [
        {
          model: Interview,
          attributes: [],
        },
        {
          model: Test,
          attributes: [],
        }
      ],
    });

    const applications = dbApplicationData.map((apps) =>
      apps.get({ plain: true })
    );

    res.render('homepage', {
      applications,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one application
// // Use the custom middleware before allowing the user to access the gallery
// router.get('/application/:id', withAuth, async (req, res) => {
//   try {
//     const dbApplicationData = await Application.findByPk(req.params.id, {
//       include: [
//         {
//           model: Interview,
//           attributes: [],
//         },
//         {
//           model: Test,
//           attributes: [],
//         }
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
