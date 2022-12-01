const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200)
    .json(`hello world! End point using express router "/api" ->${req.url}
    
    ENV variables test
    ENV 1:${process.env.API_BASE_URL}
    ENV 2:${process.env.API_KEY_NAME}
    `);
});

module.exports = router;
