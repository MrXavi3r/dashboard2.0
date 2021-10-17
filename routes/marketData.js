const express = require("express");
const router = express.Router();
const cached = require("../cache");

const {
  getData,
  getTickers,
  addTicker,
  deleteTicker,
} = require("../controllers/marketData");

router.get("/", cached(300), getData);
router.route("/tickers").get(getTickers).post(addTicker);
router.route("/tickers/:id").delete(deleteTicker);

module.exports = router;
