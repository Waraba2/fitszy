const express = require("express");
const router = express.Router();

// Load each controller
const workoutsController = require("./workouts.js");
const authController = require("./auth.js");


// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/auth", authController);
router.use("/workouts", workoutsController);

module.exports = router;