// ejs is the view engine

const express = require("express");
const app = express();

app.set("view engine", "ejs");
// to change the name of views to any other name as you want
// app.set('views',folder path relateve)

app.get("/", (req, res) => {
  // not need to set path in ejs we need to shar path if its in another directory
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(5000, (req, res) => {
  console.log("server runnig from port 5000");
});
