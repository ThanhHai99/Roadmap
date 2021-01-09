import express from "express";
import nunjucks from "nunjucks";

/*Config views engine*/
let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.engine("html", nunjucks.render);
  app.set("view engine", "html");
  nunjucks.configure("./src/views", {
    autoescape: true,
    express: app,
  });

};

module.exports = configViewEngine;
