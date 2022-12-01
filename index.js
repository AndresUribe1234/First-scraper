const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 7000;

app.use(cors());

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

app.use("/recipes", require("./routes/index"));
