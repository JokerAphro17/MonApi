const express = require("express");
const app = express();
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use("/posts", postsRoutes);
require("./models/dbConfig");
app.listen(5500, () => {
  console.log("Server started on port 5500");
});
