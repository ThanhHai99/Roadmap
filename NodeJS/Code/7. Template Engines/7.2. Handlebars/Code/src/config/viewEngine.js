import express from "express";
import handlebars from "express-handlebars";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.engine(".hbs", handlebars({
    // layoutsDir: "",
    // defaultLayout: "",
    extname: '.hbs', 
    partialsDir: "./src/views/layouts/" // directory to include
  }));
  app.set("view engine", "hbs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
