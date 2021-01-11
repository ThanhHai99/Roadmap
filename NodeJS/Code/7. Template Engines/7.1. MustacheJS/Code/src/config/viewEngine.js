import express from "express";
import mustache from "mustache-express";
import layout from "mustache-layout-s";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.engine("html", mustache());
  app.set("view engine", "html");
  app.set("views", "./src/views");
  layout.setExpressApp(app);
};

module.exports = configViewEngine;
