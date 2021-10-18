const express = require("express");
const router = express.Router();
const cached = require('./caching/cache')
const { getNews } = require("../controllers/newsData");

router.get('/', cached(1200), getNews);

module.exports = router;
