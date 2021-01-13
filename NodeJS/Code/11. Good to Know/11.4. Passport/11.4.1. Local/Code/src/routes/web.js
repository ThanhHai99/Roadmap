import express from "express";
import { home, auth } from "./../controllers/index";
import { initPassportLocal } from "./../controllers/passportController/index";
import { authValid } from "./../validations/index";
import passport from "passport";

initPassportLocal();

let router = express.Router();

let configRoutes = (app) => {
  router.get("/",
    home.index
  );

  router.get("/signUp",
    auth.create
  );

  router.post("/signUp",
    authValid.signUp,
    auth.store
  );

  router.get("/signIn",
    auth.index
  );

  router.post("/signIn",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/signIn",
      // successFlash: true,
      // failureFlash: true
    })
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
