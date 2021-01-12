import express from "express";
import { home, auth } from "./../controllers/index";

let router = express.Router();

let configRoutes = (app) => {
  router.get("/",
    home.index
  );

  router.get("/signUp",
    auth.create
  );

  router.post("/signUp",
    auth.store
  );

  router.get("/signIn",
    auth.index
  );

  router.post("/signIn",
    auth.check
  );

  router.get("/logout",
    auth.destroy
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
