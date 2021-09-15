const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "please add a positive or negative number"],
  },
  date: {
    type: Date,
    required: [true, "please add a valid date"],
  },
  category: {
    type: String,
    enum: [
      "housing",
      "utilities",
      "food/dining",
      "personal care",
      "transportation",
      "entertainment/leisure",
      "clothing/apparel",
      "health/fitness",
      "medical",
      "big ticket items",
      "other",
    ],
    required: [true, "please select a category"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
