const axios = require("axios");

//FETCH DATA FROM NEWS API EVERY 20 MINUTES
//RESPONSES ARE CACHED
//ONLY CACHED RESPONSES WILL BE SENT TO CLIENT IN ORDER TO CONTROL API RATE LIMITS
let cached = [];
const fetchNews = async () => {
  const newsApiKey = process.env.NEWS_KEY;
  const newsUrl =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=3";
  const response = await axios.get(`${newsUrl}&apiKey=${newsApiKey}`);
  let data = response.data.articles
  console.log(data)
  cached = data;
};

//RUN FUNCTION ON INIT TO IMMEDIATELY GET ARTICLES
setTimeout(() => fetchNews(), 0);

//INITIATES THE INTERVAL FOR FETCHING NEWS
setInterval(async () => fetchNews(), 1200000);
console.log("cached", cached);
//GETS DATA FROM CACHE AND SENDS TO CLIENT ON DEMAND
exports.getNews = async (req, res, next) => {
  try {
    res.status(200).send(cached);
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
