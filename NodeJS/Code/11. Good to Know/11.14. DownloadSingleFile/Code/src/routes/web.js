import express from "express";
import getDownload from "./../controllers/downloadController";

let router = express.Router();

let configRoutes = (app) => {
  router.get("/",
    getDownload
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
