const express = require("express");
const router = express.Router();

const { getGoals, updateGoal } = require("../controllers/goals");

router.route("/").get(getGoals);
router.route("/:id").put(updateGoal);

module.exports = router;
