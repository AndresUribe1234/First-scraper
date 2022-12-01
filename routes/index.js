const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .json(`hello world! End point using express router ->${req.url}`);
});

module.exports = router;
