const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./controller/sendMail");
1;

//this is home page this will shownf
app.get("/", (req, res) => {
  res.send("I am a server");
  // both will work
  // res.end("I am a server");
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am listeining form the ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
