import express from "express";
import { home, upload } from "./../controllers/index";

let router = express.Router();

let configRoutes = (app) => {
  router.get("/", 
    home.getSignIn
  );

  router.post("/upload",
    upload.postSingleUpload
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
