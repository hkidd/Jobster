const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../utils/auth");

router.get('/userinfo/:id', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                user_id: req.session.user,
            },
        })
        res.status(200).json(dbUserData);

        res.render("userInfo", {
            first_name: dbUserData.first_name,
            last_name: dbUserData.last_name,
            
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;