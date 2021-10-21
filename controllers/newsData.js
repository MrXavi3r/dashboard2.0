const axios = require("axios");

// FETCH FROM NEWS API
const fetchNews = async () => {
  const newsApiKey = process.env.NEWS_KEY;
  const newsUrl =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5";
  const response = await axios.get(`${newsUrl}&apiKey=${newsApiKey}`);
  let data = response.data.articles;
  return data;
};

exports.getNews = async (req, res, next) => {
  try {
    res.status(200).send(await fetchNews());
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
