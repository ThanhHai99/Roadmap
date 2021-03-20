import express from "express";
import ejs from "ejs";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.engine("html", ejs.renderFile);
  app.set("view engine", "html");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
