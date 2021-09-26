const axios = require("axios");
const Ticker = require("../models/TickerData");


// @desc   GET PRICE DATA FROM TWELVE API
// @route   /api/v1/market_data
// @access   Public
exports.getData = async (req, res, next) => {
  const marketsApiKey = process.env.MARKETS_KEY;
  let url = `https://api.twelvedata.com/time_series?`;
  let params = `&interval=1day&previous_close=true&outputsize=1&dp=2&apikey=`;
  let tickers = [];
  let symbols = tickers.join();

  try {
    const data = await axios.get(
      url + "symbol=" + symbols + params + marketsApiKey
    );

    return res.status(200).json({
      success: true,
      // count: data.length,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc   GET TICKER SYMBOLS FROM DB
// @route   /api/v1/market_data/tickers
// @access   Public
exports.getTickers = async (req, res, next) => {
  try {
    const tickers = await Ticker.find();

    return res.status(200).json({
      success: true,
      count: tickers.length,
      data: tickers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc   ADD TICKER SYMBOL TO DB
// @route   /api/v1/market_data/tickers
// @access   Public
exports.addTicker = async (req, res, next) => {
  try {
    const data = {
      ticker: req.body.ticker
    }

    const ticker = await Ticker.create(data);

    return res.status(201).json({
      success: true,
      data: ticker,
    });
  } catch (error) {
    if (error.type == "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc   DELETE TICKER SYMBOL FROM DB
// @route   /api/v1/market_data/tickers/:id
// @access   Public
exports.deleteTicker = async (req, res, next) => {
  try {
    const ticker = await Ticker.findById(req.params.id);

    if (!ticker) {
      return res.status(404).json({
        success: false,
        error: "symbol not found",
      });
    }

    await ticker.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
