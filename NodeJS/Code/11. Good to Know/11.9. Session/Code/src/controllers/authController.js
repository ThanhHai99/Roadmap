import * as configApp from "./../config/app";

let getSignIn = async (req, res) => {
  try {
    console.log(typeof configApp.app.SAVE_TO_STORE);
    console.log(configApp.app.SAVE_TO_STORE);

    // "===================Save on DB==================="
    const { sessionStore } = require("./../config/session");
    console.log("===================Save on DB===================");
    await sessionStore.set("hai", "tranvietthanhhaiit1@gmail.com");
    await sessionStore.set("hai", "tranvietthanhhaiit2@gmail.com");
    console.log("hai: " + await sessionStore.get("hai")); // get session
    
    // await sessionStore.destroy("hai"); //delete a session
    // await sessionStore.clear(); // delete all session

    // ===================Save on RAM===================
    // console.log("===================Save on RAM===================");
    // req.session.email = "hai@gmail.com";
    // req.session.psw = "passwordddd";
  
    // setTimeout(() => {
    //   console.log("=============================================");
    //   console.log("session after 2s");
    //   console.log(req.session);
    //   setTimeout(() => {
    //     console.log("=============================================");
    //     console.log("session after 2s");
    //     console.log(req.session);
    //   }, 2000);
    // }, 2000);

    return res.render("auth/signIn/signIn");
  } catch (error) {
    console.log("Accurr a error");
  }
};

module.exports = {
  getSignIn
};
