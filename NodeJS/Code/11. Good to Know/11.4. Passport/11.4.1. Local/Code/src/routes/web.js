import express from "express";
import { home, auth } from "./../controllers/index";
import { initPassportLocal } from "./../controllers/passportController/index";
import { authValid } from "./../validations/index";
import passport from "passport";

initPassportLocal();

let router = express.Router();

let configRoutes = (app) => {
  router.get("/",
    auth.checkLoggedIn,
    home.index
  );

  router.get("/signUp",
    auth.checkLoggedOut,
    auth.getSignUp
  );

  router.post("/signUp",
    authValid.signUp,
    auth.checkLoggedOut,
    auth.postSignUp
  );

  router.get("/signIn",
    auth.checkLoggedOut,
    auth.getSignIn
  );

  router.post("/signIn",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/signIn",
    })
  );

  router.get("/signOut",
    auth.checkLoggedIn,
    auth.getSignOut
  );

  app.use("/", router);

  // catch 404 error
  app.use( (req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};

module.exports = configRoutes;
