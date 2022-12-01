const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 7000;

app.use(cors());

const url = "https://forkify-api.herokuapp.com/phrases.html";

const availableSearchQueries = [];
async function forkifyScrapping() {
  try {
    const res = await axios(url);
    const data = res.data;
    const $ = cheerio.load(data);

    $("li").each((ind, ele) => {
      const item = $(ele);
      availableSearchQueries.push(item.text().trimStart());
    });
  } catch (err) {
    console.log(err);
  }
}

forkifyScrapping();

app.get("/recipes", function (req, res) {
  res.json(availableSearchQueries);
});

app.get("/andres", (req, res) => {
  console.log(req.url);
  res.status(200).json(`hello world! This was the req url -> ${req.url}`);
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

app.use("/api", require("./routes/index"));
