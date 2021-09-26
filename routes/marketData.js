const express = require("express");
const router = express.Router();

const {
  getData,
  getTickers,
  addTicker,
  deleteTicker,
} = require("../controllers/marketData");

router.route("/").get(getData);
router.route("/tickers").get(getTickers).post(addTicker);
router.route("/tickers/:id").delete(deleteTicker);

module.exports = router;
