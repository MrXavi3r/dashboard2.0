const Goal = require("../models/Goal");

// @desc  GET ALL GOALS
// @route GET /api/v1/goals
exports.getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find();
    const data = JSON.parse(JSON.stringify(goals))[0];

    return res.status(200).json({
      success: true,
      count: goals.length,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc update a property on the goals object
// @route PUT /api/v1/goals/:id
exports.updateGoal = async (req, res) => {
  const id = req.params.id;
  const updates = Object.keys(req.body);

  try {
    const goal = await Goal.findById(id);

    if (!goal) {
      return res.status(404).send({ error: "Goal not found" });
    }

    updates.forEach((update) => (goal[update] = req.body[update]));
    await goal.save();

    res.status(200).send(goal);
  } catch (err) {
    res.status(500).send(err);
  }
};
