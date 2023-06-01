// not understood the querry in this

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is the root folder..z");
});

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("radhe radhey ");
// });
app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send("jai shree ram Uday ");
});

app.listen(8000, () => {
  console.log("listening from the port 8000");
});
