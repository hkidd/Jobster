const router = require("express").Router();
const { User } = require("../../models");
// const withAuth = require("../utils/auth");

router.get('/api/userInfo-routes/userInfo', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                id: req.session.user,
            },
        })
        
        console.log(dbUserData);

        const userInfo = dbUserData.get({ plain: true });

        res.render("userInfo", {
            userInfo,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user,
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;