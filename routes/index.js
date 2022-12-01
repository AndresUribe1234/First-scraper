const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/", async function (req, res) {
  try {
    let availableSearchQueries = [];
    const url = "https://forkify-api.herokuapp.com/phrases.html";
    const fetchCall = await axios(url);
    const data = fetchCall.data;
    const $ = cheerio.load(data);

    $("li").each((ind, ele) => {
      const item = $(ele);
      availableSearchQueries.push(item.text().trimStart());
    });
    availableSearchQueries = availableSearchQueries.sort();
    res.json(availableSearchQueries);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
