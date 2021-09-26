const mongoose = require("mongoose");

const TickerDataSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: [true, "Please add a valid ticker symbol"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Ticker", TickerDataSchema);
