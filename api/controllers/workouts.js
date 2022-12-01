const router = require("express").Router();
const { user, workouts } = require("../models");
const passport = require("../middleware/passport-config");

router.get("/", passport.isAuthenticated(), (req, res) => {
    workouts.findAll({}).then((allWorkouts) => res.json(allWorkouts));
});

router.post("/", passport.isAuthenticated(), (req, res) => {
    let { content } = req.body;

    workouts.create({ 
        title:req.body.title,
        textBody: req.body.textBody,
        userId: req.user.uuid
     })
      .then((newPost) => {
        res.status(201).json(newPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

router.get("/byuserId/:id", passport.isAuthenticated(), async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await workouts.findAll({
      where: { userId: id },
    });
    res.json(listOfPosts);
  });



module.exports = router;