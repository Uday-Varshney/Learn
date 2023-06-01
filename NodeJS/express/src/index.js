// subreddit is used as the variavle as we cannot make too much .get method and req.params

const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");
// This is the middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("hello from the express");
});
app.get("/about", (req, res) => {
  res.send("hello from the about section");
});

app.listen(8000, () => {
  console.log("listening from the port 8000");
});
