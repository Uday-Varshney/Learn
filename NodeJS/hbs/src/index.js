const path = require("path");
const express = require("express");

const app = express();

//to set view engine spelling must be the smae and the next part is the exteion
app.set("view engine", "hbs");
const staticPath = path.join(__dirname, "../views");
// console.log(path.join(__dirname, "../views"));
// app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render("index");
});

//here we use * to check all the predefined get methods if user enter other than this this will shoot.
// app.get("*", (req, res) => {
// res.render("404", {
// errorMessage: "page not found sir 404",
// });
// });

app.listen(8000, (req, res) => {
  console.log("server runnig");
});
