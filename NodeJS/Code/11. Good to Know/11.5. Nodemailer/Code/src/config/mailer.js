import nodeMailer from "nodemailer";

const adminEmail = "tranhai23031999@gmail.com";
const adminPassword = "KimNg@n12082000";
const mailHost = "smtp.gmail.com";
const mailPort = "587";

let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    host: mailHost,
    port: mailPort,
    secure: false, //Use SSL - TLS
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };

  return transporter.sendMail(options); //This default return a promise
};

module.exports = sendMail;
