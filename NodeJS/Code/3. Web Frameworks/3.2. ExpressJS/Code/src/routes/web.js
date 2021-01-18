import express from "express";
import { controller1, controller2 } from "./../controllers/index";

let router = express.Router();

let configRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.render("master");
  });

  router.get("/c1/f1",
    controller1.func1
  );

  router.get("/c1/f2",
    controller1.func2
  );

  router.get("/c2/f1",
    controller2.func1
  );

  router.get("/c2/f1",
    controller2.func2
  );

  app.use("/", router);

  // catch 404 error
  app.use( (req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}

module.exports = configRoutes;
