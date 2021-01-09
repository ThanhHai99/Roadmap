import express from "express";

/*Config views engine*/
let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "pug");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
