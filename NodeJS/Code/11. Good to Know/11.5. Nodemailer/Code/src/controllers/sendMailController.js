import mailer from "../config/mailer";
import { sendMailContent } from "../../lang/vi";

let sendMailService = (to, subject, htmlContent) => {
  return new Promise(async(resolve, reject) => {
    mailer(to, subject, htmlContent)
      .then(success => {
        resolve("Send mail successful");
      })
      .catch(error => {
        reject("Send mail failure");
      });
  });
};

let sendMailController = async (req, res) => {
  //example:
  let mailClient = "tranvietthanhhaiit@gmail.com";
  let linkVerify = `${req.protocol}://${req.get("host")}`;
  
  console.log("Start send mail");

  try {
    let status = await sendMailService(mailClient, sendMailContent.subject, sendMailContent.template(linkVerify));
    console.log(status);
  } catch (error) {
    console.log(error);
  }

  console.log("End send mail");
  res.send("The end.");
};

module.exports = {
  sendMailController
};
