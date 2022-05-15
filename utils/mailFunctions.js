const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
const res = require("express/lib/response");
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (receiver, sender, subject, msg) => {
  const msgToSend = {
    to: receiver,
    from: sender,
    subject,
    text: msg,
  };

  sgMail
    .send(msgToSend)
    .then((response) => {
      console.log(response);
      return 200;
    })
    .catch((error) => {
      console.log(error);
      return 500;
    });
};

module.exports = {
  sendMail,
};