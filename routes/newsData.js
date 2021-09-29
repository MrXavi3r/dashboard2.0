const express = require("express");
const router = express.Router();

const { getNews } = require("../controllers/newsData");

router.route("/").get(getNews);

module.exports = router;
