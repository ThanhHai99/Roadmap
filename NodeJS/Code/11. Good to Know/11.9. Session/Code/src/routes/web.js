import express from "express";
import { auth, home } from "./../controllers/index";

let router = express.Router();

let configRoutes = (app) => {
  router.get("/",
    home.getHome
  );
  
  router.get("/signIn",
    auth.getSignIn
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
