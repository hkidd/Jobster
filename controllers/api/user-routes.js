// These routes allow creation of new users
// Allow users to login and logout

const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user (Sign Up)
router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });

    const userId = dbUserData.dataValues.id;

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userId;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const userId = dbUserData.dataValues.id;

    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true,
      req.session.user = userId;
      console.log(req.session.user);

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update user image
// router.put("/updateimg", async(req, res) => {
//   try {
//       const userData = await User.update({
//           img_url: req.body.img_url,
//       }, {
//           where: {
//               id: req.session.user,
//           },
//       });
//       // if the update is successful, the response will be returned as json
//       res.status(200).json(userData);
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;