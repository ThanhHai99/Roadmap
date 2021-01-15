import express from "express";
import { home, auth } from "./../controllers/index";
import passport from "passport";
import { initPassportGoogle } from "./../controllers/passportController/index";

initPassportGoogle();

let router = express.Router();

let configRoutes = (app) => {
  router.get("/auth/google",
    passport.authenticate("google",{
      scope: ["profile", "email"]
    })
  );

  router.get("/auth/google/callback", 
    passport.authenticate("google", {
      failureRedirect: "/signIn",
      successRedirect: "/"
    })
  );

  router.get("/signIn",
    auth.checkLoggedOut,
    auth.getSignIn
  );

  router.get("/signOut",
    auth.checkLoggedIn,
    auth.getSignOut
  );
  
  router.get("/",
    auth.checkLoggedIn,
    home.index
  );

  app.use("/", router);

  // catch 404 error
  app.use( (req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
};

module.exports = configRoutes;
