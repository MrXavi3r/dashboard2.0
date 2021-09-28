const axios = require("axios");
const Ticker = require("../models/TickerData");

// CONVERT TICKER SYMBOL DATA FROM API TO A SINGLE STRING
// NECESSARY FOR MAKING A BATCH REQUEST TO TWELVE DATA API
const stringifyTickerData = async () => {
  try {
    const response = await Ticker.find();
    return response.map((symbol) => symbol.ticker).join();
  } catch (error) {
    console.log(error, "stringify did not run");
  }
};

//CACHE FETCH REQUESTS IN ORDER TO NOT OVERPOWER TWELVE API RATE LIMITS
//CACHE IS AUTO REFRESHED EVERY 5 MINUTE INTERVAL
let cached = [];
const fetchData = async () => {
  const marketsApiKey = process.env.MARKETS_KEY;
  const url = `https://api.twelvedata.com/time_series?`;
  const params = `&interval=1day&previous_close=true&outputsize=1&dp=2&apikey=`;
  const tickers = await stringifyTickerData();
  const data = await axios.get(
    url + "symbol=" + tickers + params + marketsApiKey
  );
  const parsed = [];
  const symbols = data.data
  for (const symbol in symbols) {
    parsed.push({
      meta: symbols[symbol].meta,
      values: symbols[symbol].values,
      symbol: symbol,
    });
  }
  cached = parsed;
};

// FETCH DATA ON INIT IN ORDER TO IMMEDIATELY STORE IT IN CACHE
setTimeout(() => fetchData(), 0);
setInterval(async () => fetchData(), 300000);


// @desc   GET THE DATA FROM CACHE AND SEND IT TO CLIENT//
// @route   /api/v1/market_data
// @access   Public
exports.getData = async (req, res, next) => {
  try {
    res.status(200).send(cached);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
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
      ticker: req.body.ticker,
    };

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
