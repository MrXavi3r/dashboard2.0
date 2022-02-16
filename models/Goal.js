const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: [true, "please add a positive numerical value"],
  },
  spending: {
    type: Number,
    required: [true, "please add a positive numerical value"],
  },
  income: {
    type: Number,
    required: [true, "please add a positive numerical value"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Goal", GoalSchema);
