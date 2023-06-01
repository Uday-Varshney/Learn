const { text } = require("express");
const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: '"smtp.ethereal.email"<password>',
    port: 587,
    auth: {
      user: "lucio.batz@ethereal.email",
      pass: "FFPnCTehyhnhrPnkPw",
    },
  });
  // res.send("I am sending mail");
};

module.exports = sendMail;
